import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/paper';
import HabitCategory from './HabitCategoryContainer';
import RaisedButton from 'material-ui/RaisedButton';

export default class Habits extends Component {
  render() {
    const style ={
      height: '90vh',
      textAlign: 'Center',
      paddingTop: "10px"
    }
    const buttonStyle = {
      width: "50%",
      marginTop: "10px"
    }
    const buttonLabelStyle = {
      fontSize: "150%",
    }
    const buttonLink=<Link to="/"></Link>
    return (
      <div>
        <Paper style={style}>
          <HabitCategory category="DAILY"/>
          <HabitCategory category="WEEKLY"/>
          <HabitCategory category="MONTHLY"/>
          <RaisedButton
            primary={true}
            label="+Habit"
            style={buttonStyle}
            labelStyle={buttonLabelStyle}
            containerElement={buttonLink}
            />
        </Paper>          
      </div>
    );
  }
}
