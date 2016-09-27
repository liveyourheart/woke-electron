import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskInputs from '../common/taskInputs';
import ProgressBar from '../common/progressBar';

export default class Timer extends Component {
  render() {
    return (
      <div>
          <ProgressBar />          
          <TaskInputs />
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>         
      </div>
    );
  }
}
