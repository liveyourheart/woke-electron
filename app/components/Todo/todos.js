import React, { Component } from 'react';
import { Link } from 'react-router';
import TreeViewContainer from './treeviewContainer'

export default class Todos extends Component {
  render() {
      const TreeViewContainerStyle = 
        {
          height: '80%'
        }
    return (
      <div>
          <TreeViewContainer style={TreeViewContainerStyle}/>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>  
      </div>
    );
  }
}
