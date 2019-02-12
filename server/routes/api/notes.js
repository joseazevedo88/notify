const express = require('express');
const router = express.Router();

//Fetch the model
const Note = require('../../models/Note');

//Delete all
//Note.deleteMany({}).then(() => console.log('Deleted all records for this document'));

//@route GET api/notes
router.get('/', (req, res) => {
  Note.find()
    .sort({ date: -1 })
    .then(notes => res.json(notes))
    .catch(err => console.log(err));
});

//@route POST api/notes
router.post('/', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    body: req.body.body
  });

  newNote
    .save()
    .then(note => res.json(note))
    .catch(err => res.json(err));
});

//@route DELETE api/notes/:id
router.delete('/:id', (req, res) => {
  Note.findById(req.params.id)
    .then(note => note.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.json(err));
});

//@route UPDATE api/notes/:id
router.put('/:id', (req, res) => {
  Note.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      body: req.body.body
    },
    { new: true }
  )
    .then(note => res.json(note))
    .catch(err => res.json(err));
});

module.exports = router;
