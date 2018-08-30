import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      name: props.name,
      contents: props.contents,
      author: props.author
    };
  }

  render() {
    return (
      <li className="list-group-item" key={this.state.id}>
        <Link to={`/api/notes/${this.state.id}`}>{this.state.name}</Link>
      </li>
    );
  }
}
