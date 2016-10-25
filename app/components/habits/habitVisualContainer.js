import React, {Component} from 'react';
import HabitVisualItem from './habitVisualItem';

export default class HabitVisualContainer extends Component {
    render() {
        const style = {
            backgroundColor:'rgb(100,100,100)',
            width: '100%',
            height: '50%',
            borderRadius: '2px',
            padding: '1px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

        const itemStyle = {
            width: '14%',
            height: '150%',
            display: 'inline-block',
            marginTop: '1.5%'
        }

        const containerStyle = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '1px',
            textAlign: 'center',
        }

        return (
            <div style={style}>
                <div style={containerStyle}>
                    <div style={itemStyle}>
                    <HabitVisualItem />
                    </div>
                    <div style={itemStyle}>
                        <HabitVisualItem />
                    </div>
                    <div style={itemStyle}>
                        <HabitVisualItem />
                    </div>
                    <div style={itemStyle}>
                        <HabitVisualItem />
                    </div>
                    <div style={itemStyle}>
                        <HabitVisualItem />
                    </div>
                    <div style={itemStyle}>
                        <HabitVisualItem />
                    </div>
                    <div style={itemStyle}>
                        <HabitVisualItem />
                    </div>
                </div>
            </div>
        );
    }
}
