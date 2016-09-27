import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskInputs from '../common/taskInputs';
import ProgressBar from '../common/progressBar';
import TimeInput from '../common/timeInput';
import TimeControls from '../common/timeControls';

export default class Timer extends Component {
  render() {
    return (
      <div>
          <ProgressBar />          
          <TaskInputs />
          <TimeInput />
          <TimeControls />
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>         
      </div>
    );
  }
}
