import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

export default class NavBarMenu extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="navbar-menu">
                <Paper zDepth={5}> 
                    <Menu>
                        <MenuItem primaryText = "Home"/>
                        <MenuItem primaryText = "Pomodoro"/>
                        <MenuItem primaryText = "Stopwatch"/>
                        <MenuItem primaryText = "Habits"/>
                        <MenuItem primaryText = "Todos"/>
                    </Menu>
                </Paper>
            </div>
        )     
    }
} 