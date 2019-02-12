import React, { Component } from 'react';
import './AddNote.css';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form
} from 'reactstrap';

export class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      body: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addNote(this.state.title, this.state.body);
    this.setState({
      title: '',
      body: ''
    });
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <React.Fragment>
        <div className="addNote" onClick={this.toggle}>
          {' '}
          Add note
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Form onSubmit={this.onSubmit}>
            <ModalHeader toggle={this.toggle}>
              <Input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
                placeholder="Note title..."
                style={{ minWidth: '25rem' }}
              />
            </ModalHeader>
            <ModalBody>
              <Input
                type="textarea"
                name="body"
                onChange={this.onChange}
                value={this.state.body}
                placeholder="Note body..."
                style={{ minHeight: '15rem' }}
              />
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary" onClick={this.toggle}>
                Submit
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AddNote;
