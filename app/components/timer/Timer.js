import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskInputs from '../common/taskInputs';
import ProgressBar from '../common/progressBar';
import TimeInput from '../common/timeInput';
import TimeControls from '../common/timeControls';
import SaveButton from '../common/saveButton';

export default class Timer extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div>
          {this.props.showProgress ? <ProgressBar /> : null}        
          <TimeInput />
          <TimeControls />
          <TaskInputs />
          <SaveButton />   
      </div>
    );
  }
}
