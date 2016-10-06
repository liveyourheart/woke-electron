import React, { Component } from 'react';
import Home from '../components/Home';
import NavBar from '../components/common/navbar';
import Todos from '../components/todo/todos'


export default class TodosPage extends Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}