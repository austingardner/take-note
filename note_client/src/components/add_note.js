import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doAddNote, ROOT_URL } from '../actions';
import myFireBase from '../my_firebase';
import axios from 'axios';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { noteName: '', noteContents: '', added: false };
  }

  onNoteNameChange = e => {
    e.preventDefault();
    this.setState({ noteName: e.target.value });
  };

  onNoteContentsChange = e => {
    e.preventDefault();
    this.setState({ noteContents: e.target.value });
  };

  doneAdding = () => {
    console.log('in doneAdding');

    this.props.history.push('/');
  };

  onAddNoteSubmit = () => {
    let email = myFireBase.auth().currentUser.email;
    console.log('email: \n', email);

    // this.props.doAddNote(
    //   email,
    //   this.state.noteName,
    //   this.state.noteContents,
    //   this.doneAdding.bind(this)
    // );

    axios
      .post(`${ROOT_URL}/new`, {
        author: email,
        name: this.state.noteName,
        contents: this.state.noteContents
      })
      .then(result => {
        console.log(result);
        this.setState({ added: true });
        // console.log('returning to note_list');
        // this.props.history.push('/notes');
      })
      .catch(error => this.setState({ error, added: false }));
  };

  goHome = () => {
    console.log('going back to notes list ');

    this.props.history.push('/notes');
  };

  render() {
    const success = this.state.added ? 'Note Added' : '';
    if (this.state.added) {
      setTimeout(() => {
        this.setState({ added: false });
      }, 5000);
    }

    return (
      <div>
        <form onSubmit={() => this.onAddNoteSubmit()} className="input-group">
          <input
            placeholder="Name of note"
            className="form-control"
            value={this.state.noteName}
            onChange={this.onNoteNameChange}
          />
          <input
            placeholder="contents"
            className="form-control"
            value={this.state.noteContents}
            onChange={this.onNoteContentsChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit Note
            </button>
          </span>
        </form>
        <span className="text-danger">{this.state.error}</span>
        <span className="text-success">{success}</span>
        <div>
          <button onClick={() => this.goHome()}>Home</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { doAddNote })(AddNote);
