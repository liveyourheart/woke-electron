import React, { Component } from 'react';
import Home from '../components/Home';
import NavBar from '../components/common/navbar';
import Timer from '../components/timer/timer'


export default class PomodoroPage extends Component {
  render() {
    return (
      <div>
        <Timer showProgress={true}/>
      </div>
    );
  }
}