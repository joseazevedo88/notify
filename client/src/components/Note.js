import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form
} from 'reactstrap';

export class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      modal: false,
      editedTitle: this.props.note.title,
      editedBody: this.props.note.body
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.editNote(
      this.props.note._id,
      this.state.editedTitle,
      this.state.editedBody
    );
    // this.setState({
    //   title: '',
    //   body: ''
    // });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { _id, title, body } = this.props.note;

    return (
      <div className="container">
        <Button onClick={this.toggle} style={titleStyle}>
          {title}
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={wrapperStyle}>
            <CardBody>{body}</CardBody>
            <Button
              style={buttonStyle}
              onClick={this.props.deleteNote.bind(this, _id)}
            >
              Delete
            </Button>
            <Button style={buttonStyle} onClick={this.toggleModal}>
              Edit
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
              <Form onSubmit={this.onSubmit}>
                <ModalHeader toggle={this.toggleModal}>
                  <Input
                    type="text"
                    name="editedTitle"
                    onChange={this.onChange}
                    value={this.state.editedTitle}
                    //placeholder="Note title..."
                    style={{ minWidth: '25rem' }}
                  />
                </ModalHeader>
                <ModalBody>
                  <Input
                    type="textarea"
                    name="editedBody"
                    onChange={this.onChange}
                    value={this.state.editedBody}
                    //placeholder="Note body..."
                    style={{ minHeight: '15rem' }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={this.toggleModal}
                  >
                    Submit
                  </Button>{' '}
                  <Button color="secondary" onClick={this.toggleModal}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            </Modal>
          </Card>
        </Collapse>
      </div>
    );
  }
}

const titleStyle = {
  marginBottom: '0.5rem',
  marginTop: '1rem',
  fontSize: '1.5rem',
  alignSelf: 'center',
  backgroundColor: '#c7d2e2',
  borderColor: '#f4f4f4'
};

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row'
};

const buttonStyle = {
  margin: 'auto',
  marginRight: '1rem'
};

export default Note;
