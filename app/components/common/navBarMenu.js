import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';

export default class NavBarMenu extends Component {
    constructor(props) {
        super();

        this.state = {
            home: <Link to="/">Home</Link>,
            pomodoro: <Link to="/pomodoro">Pomodoro</Link>,
            stopwatch: <Link to="/stopwatch">Stopwatch</Link>,
            habits: <Link to="/habits">Habits</Link>,
            todos: <Link to="/todos">Todos</Link>,
        }
    }
    render() {
        const style = {
            height: '100vh'
        }
        return (
            <div className="navbar-menu">
                <Paper zDepth={5} style={style}> 
                    <Menu>
                        <MenuItem primaryText = {this.state.home} onTouchTap={this.props.closeMenu}/>
                        <MenuItem primaryText = {this.state.pomodoro} onTouchTap={this.props.closeMenu}/>
                        <MenuItem primaryText = {this.state.stopwatch} onTouchTap={this.props.closeMenu}/>
                        <MenuItem primaryText = {this.state.habits} onTouchTap={this.props.closeMenu}/>
                        <MenuItem primaryText = {this.state.todos} onTouchTap={this.props.closeMenu}/>
                    </Menu>
                </Paper>
            </div>
        )     
    }
} 