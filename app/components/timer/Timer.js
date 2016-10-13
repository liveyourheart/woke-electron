import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskInputs from './taskInputs';
import ProgressBar from './progressBar';
import TimeInput from './timeInput';
import TimeControls from './timeControls';
import SaveButton from './saveButton';

export default class Timer extends Component {
  constructor(props){
    super();
    this.state = {
      isDirty: "true",
      isTicking: "false"
    }
  }
  render() {
    return (
      <div>
          {this.props.showProgress ? <ProgressBar /> : null}        
          <TimeInput />
          <TimeControls isTicking={this.state.isTicking}/>
          <TaskInputs />
          <SaveButton />   
      </div>
    );
  }
}
