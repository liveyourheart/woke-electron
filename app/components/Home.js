import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <br />
          <Link to="/pomodoro">POMODORO</Link>          
          <br />
          <Link to="/stopwatch">STOPWATCH</Link>
          <br />
          <Link to="/habits">HABITS</Link>
          <br />
          <Link to="/todos">TODOS</Link>
        </div>
      </div>
    );
  }
}
