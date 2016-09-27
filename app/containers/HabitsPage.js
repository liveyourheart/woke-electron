import React, { Component } from 'react';
import Home from '../components/Home';
import NavBar from '../components/common/navbar';
import Habits from '../components/habits/habits'


export default class HabitsPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Habits />
      </div>
    );
  }
}