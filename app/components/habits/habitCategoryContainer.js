import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import HabitItem from './habitItem'

export default class HabitCategoryContainer extends Component {
  render() {
    const style ={
        width: "98%",
        border: "3px solid rgb(100,100,100)",
        borderRadius: "2px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "5px",
    }
    const TitleStyle = {
        textAlign: "Left",
        marginLeft: "4px",
        marginTop: "0px",
        color: "rgb(48, 48, 48)"
    }
    const HeaderStyle = {
        backgroundColor: "rgb(100,100,100)",
        marginTop: "0px",
        padding: "0",
    }
    return (
      <div style={style}>
        <div style={HeaderStyle}>
          <h4 style={TitleStyle}>{this.props.category}</h4>
        </div>
        <HabitItem />
        <HabitItem />
        <HabitItem />       
      </div>
    );
  }
}
