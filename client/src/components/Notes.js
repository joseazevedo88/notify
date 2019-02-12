import React, { Component } from 'react';
import { Note } from './Note';

export class Notes extends Component {
  render() {
    return this.props.notes.map(note => {
      return (
        <Note
          note={note}
          deleteNote={this.props.deleteNote}
          editNote={this.props.editNote}
          key={note._id}
        />
      );
    });
  }
}

export default Notes;
