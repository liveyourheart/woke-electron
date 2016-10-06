import React, {Component} from 'react';
import TaskTable from './taskTable';
import Paper from 'material-ui/Paper';

export default class TaskTableContainer extends Component {
    render() {
        const style = 
        {
            width: '69.7%',
            display: 'inline',
            float: 'right',
            height: '90vh'
        }

        return (
            <div style={style}>
                <TaskTable />
            </div>
        );
    }
}

