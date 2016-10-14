import React, {Component} from 'react';
import TaskTable from './taskTable';
import Paper from 'material-ui/Paper';

export default class TaskTableContainer extends Component {
    render() {
        const style = 
        {
            height: '100vh',
            width: '70%',
            display: 'inline',
            float: 'right',
            
        }

        return (
            <div style={style}>
                <TaskTable />
            </div>
        );
    }
}

