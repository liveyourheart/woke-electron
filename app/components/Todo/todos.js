import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Todos extends Component {
  render() {
    return (
      <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
          <h2>Todos</h2>          
      </div>
    );
  }
}
