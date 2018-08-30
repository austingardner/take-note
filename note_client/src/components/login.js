import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hasLoggedIn } from '../actions';
import myFireBase from '../my_firebase';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: ''
    };

    this.authListener = this.authListener.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.user) {
      this.props.history.push('/notes');
    }
  }

  componentDidMount() {
    console.log('mounted the login');
    this.authListener();
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onLoginSubmit(event) {
    event.preventDefault();
    myFireBase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
        this.setState({ error: error.message });
      });
  }

  onSignUpSubmit(event) {
    event.preventDefault();
    myFireBase
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error.message });
      });
  }

  authListener() {
    myFireBase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('do user to redux state');
        let args = {
          user: user,
          username: this.state.username,
          password: this.state.password
        };
        hasLoggedIn(args);
        this.props.history.push('/notes');
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onLoginSubmit} className="input-group">
          <input
            placeholder="Username"
            className="form-control"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
          <input
            placeholder="Password"
            className="form-control"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
            <button onClick={this.onSignUpSubmit} className="btn btn-secondary">
              Sign Up
            </button>
          </span>
        </form>
        <span className="text-danger">{this.state.error}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { hasLoggedIn })(Login);
