import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskInputs from './taskInputs';
import ProgressBar from './progressBar';
import TimeInput from './timeInput';
import TimeControls from './timeControls';
import SaveButton from './saveButton';
import Card from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TimeOutput from './timeOutput'

export default class Timer extends Component {
  constructor(props){
    super();
    this.state = {
      isDirty: true,
      isTicking: true,
      needsInput: true,
    }
  }
  render() {
    return (
      <div>
        <Card style={{paddingBottom:"15px"}}>
          <ProgressBar progress={this.props.progress}/>      
          {this.state.needsInput ? <TimeInput /> : <TimeOutput />}
          <TimeControls isTicking={this.state.isTicking}/>
          <TaskInputs />
          <SaveButton />
          <Divider style={{marginTop:"40px", marginBottom:"15px"}}/>
        </Card>   
      </div>
    );
  }
}
