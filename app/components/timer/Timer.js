import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Timer extends Component {
  render() {
    return (
      <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
          <h2>Timer</h2>          
      </div>
    );
  }
}
