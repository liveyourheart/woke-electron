import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import CreateNewFolder from 'material-ui/svg-icons/file/create-new-folder';
import NoteAdd from 'material-ui/svg-icons/action/note-add';

class componentName extends Component {
    render() {
        const buttonStyle = {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            textAlign: 'center'
        }
        return (
            <div style={buttonStyle}>
                <IconButton>
                    <CreateNewFolder />
                </IconButton>
                <IconButton>
                    <NoteAdd />
                </IconButton>
            </div>
        );
    }
}

export default componentName;