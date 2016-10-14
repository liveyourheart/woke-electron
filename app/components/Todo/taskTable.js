import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';

export default class TaskTable extends Component {
    render() {
        const style = 
        {
            height: '90vh',
            borderLeft: "2px solid rgb(100,100,100)",
        }
        const titleStyle = {
            color:"rgb(100,100,100)",
            borderBottom: "2px solid rgb(100,100,100)",
        }
        return (
            <div>
                <Card style={style}>
                    <CardTitle
                        subtitle='Tasks To Do' style={titleStyle}
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
