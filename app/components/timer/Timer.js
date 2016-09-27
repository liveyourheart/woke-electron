import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskInputs from '../common/taskInputs';
import ProgressBar from '../common/progressBar';
import TimeInput from '../common/timeInput';
import TimeControls from '../common/timeControls';
import SaveButton from '../common/saveButton';

export default class Timer extends Component {
  render() {
    return (
      <div>
          <ProgressBar />          
          <TimeInput />
          <TimeControls />
          <TaskInputs />
          <SaveButton />
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>         
      </div>
    );
  }
}
