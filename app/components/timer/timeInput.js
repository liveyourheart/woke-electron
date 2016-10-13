import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class timeInput extends Component {
    render() {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            display: 'block',
            fontSize: '40px',
            width: '160px',
            textAlign: 'Center'
        }
        return (
            <div className="time-input">
                <TextField
                    style={style}
                    defaultValue="00:45:00"
                />
            </div>
        );
    }
}
