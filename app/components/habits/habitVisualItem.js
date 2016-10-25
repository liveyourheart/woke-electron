import React, {Component} from 'react';

export default class HabitVisualItem extends Component {
    render() {
        const style = {
            backgroundColor: 'rgb(255,255,255)',
            textAlign: 'center',
        }
        return (
            <div style={style}>
                <i className="fa fa-check-square"></i>
            </div>
        );
    }
}
