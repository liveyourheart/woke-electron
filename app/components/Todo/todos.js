import React, { Component } from 'react';
import { Link } from 'react-router';
import TreeViewContainer from './treeviewContainer';
import TaskTableContainer from './taskTableContainer';

export default class Todos extends Component {
  render() {

    return (
      <div>
          <TreeViewContainer />
          <TaskTableContainer />
      </div>
    );
  }
}
