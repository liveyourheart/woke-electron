import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NavBarMenu from './navBarMenu';

export default class NavBar extends Component {
    constructor(props){
        super();

        this.state = {
            menu : false
        }

        this.handleChange = (e, menu) => {
            e.preventDefault();
            this.setState({menu: !this.state.menu});
        };
    }

    render() {
        const MenuStyle = 
        {
            display: "absolute"
        }

        return(
            <div>
                <AppBar
                    title="Woke"
                    onLeftIconButtonTouchTap={this.handleChange}
                />
                {this.state.menu ? <NavBarMenu style={MenuStyle} /> : null }
            </div>
        )
    }
}
    
