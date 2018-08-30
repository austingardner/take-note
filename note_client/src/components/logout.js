import React, { Component } from 'react';
import { connect } from 'react-redux';
import myFireBase from '../my_firebase';
import { hasLoggedOut } from '../actions';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
  }

  doLogout() {
    myFireBase.auth().signOut();
    hasLoggedOut();
    this.props.reset();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.doLogout}
          type="submit"
          className="btn btn-secondary"
        >
          Logout
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    password: state.password
  };
}

export default connect(mapStateToProps, { hasLoggedOut })(Logout);
