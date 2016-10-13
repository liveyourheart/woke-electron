import React, { Component } from 'React';
import LinearProgress from 'material-ui/LinearProgress';
import {pinkA200} from 'material-ui/styles/colors';

 export default class ProgressBar extends Component {
     render() {
         return (
             <div className="progress-bar">
                <LinearProgress mode="determinate" value={80} color={pinkA200} />
             </div>
         )
     }
 }