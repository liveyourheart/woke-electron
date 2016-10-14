import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const hours = [];
const minutes = [];
const seconds = [];
for(let i = 0; i < 60; i++){
    minutes.push(<MenuItem value={i} key={i} primaryText={i} style={{color:"rgb(100,100,100)"}}/>);
}
for(let i = 0; i < 60; i++){
    seconds.push(<MenuItem value={i} key={i} primaryText={i} style={{color:"rgb(100,100,100)"}}/>);
}
for(let i = 0; i < 9; i++){
    hours.push(<MenuItem value={i} key={i} primaryText={i} style={{color:"rgb(100,100,100)"}}/>);
}


export default class timeInput extends Component {
    render() {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            display: 'block',
            textAlign: "Center",
            border: "1px solid rgb(100,100,100)",
            borderRadius: "2px",
            width: "85%"
        }
        const selectStyle = {
            width: "25%",
            marginLeft: "5px",
            marginRight: "5px",
            textAlign: "Left"
        }
        return (
            <div className="time-input" style={style}>
                <SelectField 
                    floatingLabelFixed={true}
                    floatingLabelText="Hours"
                    maxHeight={200}
                    style={selectStyle}
                >
                    {hours}
                </SelectField>
                <SelectField 
                    floatingLabelFixed={true}
                    floatingLabelText="Minutes"
                    maxHeight={200}
                    style={selectStyle}
                >
                    {minutes}
                </SelectField>
                <SelectField 
                    floatingLabelFixed={true}
                    floatingLabelText="Seconds"
                    maxHeight={200}
                    style={selectStyle}
                >
                    {seconds}
                </SelectField>
            </div>
        );
    }
}
