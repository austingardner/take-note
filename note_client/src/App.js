import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NoteList from './components/note_list';
import Login from './components/login';
import Logout from './components/logout';
import AddNote from './components/add_note';
//import ShowNote from './components';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/add" component={AddNote} />
              <Route path="/notes" component={NoteList} />
              <Route path="/" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(App);

//<Route path="/:id" component={ShowNote} />
