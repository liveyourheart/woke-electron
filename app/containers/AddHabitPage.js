import React, { Component } from 'react';
import Home from '../components/Home';
import NavBar from '../components/common/navbar';
import AddHabit from '../components/habits/addHabit'


export default class AddHabitPage extends Component {
  render() {
    return (
      <div>
        <AddHabit />
      </div>
    );
  }
}