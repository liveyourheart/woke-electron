import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/paper';
import TextField from 'material-ui/textfield';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddHabit extends Component {
  render() {
    const paperStyle = {
      height: '90vh',
      textAlign: 'Center'
    }

    const selectStyle = {
        width: '80%',
        textAlign: "Left"
    }

    const textFieldStyle = {
        width: '80%'
    }

    const buttonStyle = {
      width: "50%",
      marginTop: "10px"
    }
    const buttonLabelStyle = {
      fontSize: "150%",
    }

    return (
      <div>
        <Paper style={paperStyle}>
            <TextField floatingLabelText="Task Name" style={textFieldStyle}/>
            <br />
            <TextField floatingLabelText="Category" style={textFieldStyle}/>
            <br />
            <SelectField floatingLabelText="Frequency"
                floatingLabelFixed={true}
                style={selectStyle}
            >
                <MenuItem primaryText="DAILY"/>
                <MenuItem primaryText="WEEKLY"/>
                <MenuItem primaryText="MONTHLY"/>
            </SelectField>
            <br />
            <SelectField floatingLabelText="Target Goal"
                floatingLabelFixed={true}
                style={selectStyle}
            >
                <MenuItem primaryText="1 DAY"/>
                <MenuItem primaryText="2 DAYS"/>
                <MenuItem primaryText="3 DAYS"/>
                <MenuItem primaryText="4 DAYS"/>
                <MenuItem primaryText="5 DAYS"/>
            </SelectField>
            <RaisedButton
                primary={true}
                label={"+Habit"}
                style={buttonStyle}
                labelStyle={buttonLabelStyle}
            />
        </Paper>
      </div>
    );
  }
}
