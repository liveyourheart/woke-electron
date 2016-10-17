import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';

class componentName extends Component {
    render() {
        const divStyle = {
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            borderTop: "2px solid rgb(100,100,100)",
        }
        const buttonStyle = {
            margin: '10px'
        }
        return (
            <div style={divStyle}>
                <Divider />
                <RaisedButton
                    label="ADD"
                    primary={true}
                    icon={<i className="fa fa-plus-square fa-2x"></i>}
                    style={buttonStyle}
                />
                <RaisedButton
                    secondary={true}
                    label="EDIT"
                    style={buttonStyle}
                    icon={<i className="fa fa-pencil-square fa-2x"></i>}
                />
            </div>
        );
    }
}

export default componentName;