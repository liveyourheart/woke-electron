import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';

export default class TaskTable extends Component {
    render() {
        const style = 
        {
            height: '90vh'
        }
        return (
            <div>
                <Card style={style}>
                    <CardTitle
                        subtitle='Tasks To Do'
                    />
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableRowColumn>Task 1</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Task 2</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Task 3</TableRowColumn>
                            </TableRow>
                        </TableBody>>
                    </Table>
                </Card>
            </div>
        );
    }
}
