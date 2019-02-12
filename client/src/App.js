import React, { Component } from 'react';
import { AppNavbar } from './components/AppNavbar';
import { Notes } from './components/Notes';
import axios from 'axios';

class App extends Component {
  state = {
    notes: []
  };

  async componentDidMount() {
    await axios
      .get('api/notes')
      .then(res => this.setState({ notes: res.data }));
  }

  deleteNote = id => {
    axios.delete(`/api/notes/${id}`).then(res => {
      this.setState({
        notes: [...this.state.notes.filter(note => note._id !== id)]
      });
    });
  };

  addNote = (title, body) => {
    const newNote = {
      title,
      body: body
    };
    axios.post('/api/notes', newNote).then(res =>
      this.setState({
        notes: [res.data, ...this.state.notes]
      })
    );
  };

  editNote = (id, title, body) => {
    const editedNote = {
      title,
      body: body
    };
    axios.put(`/api/notes/${id}`, editedNote).then(res => {
      this.state.notes.forEach(note => {
        if (note._id === res.data._id) {
          note.title = res.data.title;
          note.body = res.data.body;
        }
      });
      return this.setState({
        notes: [...this.state.notes]
      });
    });
  };

  render() {
    return (
      <div className="App">
        <AppNavbar addNote={this.addNote} />
        <Notes
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          editNote={this.editNote}
        />
      </div>
    );
  }
}

export default App;
