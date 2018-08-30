import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import _ from 'lodash';
import '../styles/note_list.css';
import Logout from './logout';
import myFireBase from '../my_firebase';

class NoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.resetRouter = this.resetRouter.bind(this);
    this.addNote = this.addNote.bind(this);
    this.authListener = this.authListener.bind(this);
  }

  authListener() {
    myFireBase.auth().onAuthStateChanged(user => {
      //console.log('here is the user in authListener: ', user);
      if (user) {
        let email = myFireBase.auth().currentUser.email;

        this.props.fetchNotes(email);
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  renderNotes() {
    //console.log('in render notes this.props.notes: \n', this.props.notes);

    return _.map(this.props.notes, note => {
      const name = note.name ? note.name : ' no name ';
      const author = note.author ? note.author : ' no author ';
      const contents = note.contents ? note.contents : ' no contents ';

      return (
        <li className="list-group-item" key={note.id}>
          <div>{name}</div>
          <div>{author}</div>
          <div>{contents}</div>
        </li>
      );
    });
  }

  resetRouter() {
    this.props.history.push('/');
  }

  addNote() {
    console.log('moving to add note component');
    this.props.history.push('/add');
  }

  render() {
    if (!this.props.notes) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="list-group">{this.renderNotes()}</ul>
        <button onClick={() => this.addNote()}>Add a Note</button>
        <Logout reset={() => this.resetRouter()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log('redux state', state);
  return { notes: state.notes };
}

export default connect(mapStateToProps, { fetchNotes })(NoteList);
