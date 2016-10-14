import React, { Component } from 'React';

 export default class TimeOutput extends Component {
     render() {
         const style = {
             textAlign: "Center",
             color: "rgb(100,100,100)",
             fontSize: "150%",
         }
         return (
             <div style={style}>
                <h1>00:45:00</h1>
             </div>
         )
     }
 }