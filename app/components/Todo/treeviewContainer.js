import React, {Component} from 'react';
import TreeView from './treeview'
import TreeButtons from './treeButtons';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

export default class TreeViewContainer extends Component {
    render() {
        const style = 
        { 
            width: '30%',
            display: 'inline',
            float: 'left',
            height: '95vh'
        }
        const paperStyle = 
        {
            height: '90vh'
        }
        
        return (
            <div style={style}>
                <Paper style={paperStyle} zDepth={1}>
                    <TreeView className="treeView"/>
                    
                    <TreeButtons />
                </Paper>
            </div>
        );
    }
}
