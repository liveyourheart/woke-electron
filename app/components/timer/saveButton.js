import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SaveButton extends Component {
    render() {
        const style = {
            margin: 'auto',
            display: 'block',
            width: '20%',
            marginTop: '25px'
        }
        return (
            <div className="save-button">
                <RaisedButton label="Save" secondary={true} style={style} />
            </div>
        );
    }
}
