import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TaskInputs extends Component {
    render() {
        const style = {
            margin: '15px',
            display: 'inline-block',
            textAlign: 'Center',
            width: '250px'
        };

        const divStyle = {
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            width: "95%",
            textAlign: "center"
        }

        return (
            <div className="task-inputs">
                <div style={divStyle}>
                    <TextField style={style}
                        floatingLabelText = "Task"
                    />
                    <TextField style={style}
                        floatingLabelText = "Category"
                    />
                </div>
            </div>
        )
    }
}