import React, { Component } from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

export default class HabitItem extends Component {
  render() {
    const style ={
      height: '90vh',
      textAlign: 'Center'
    }
    return (
      <div>
        <Table>
            <TableBody>
                <TableRow>
                    <TableRowColumn>Task Name</TableRowColumn>
                    <TableRowColumn>Task Category</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
      </div>
    );
  }
}
