import React, {Component} from 'react';
import TreeView from './treeview'
import TreeButtons from './treeButtons';
import Divider from 'material-ui/Divider';

export default class TreeViewContainer extends Component {
    render() {
        const style = 
        { 
            width: '40%',
        }
        return (
            <div style={style}>
                <TreeView />
                <Divider />
                <TreeButtons />
            </div>
        );
    }
}
