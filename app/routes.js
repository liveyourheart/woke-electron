import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import PomodoroPage from './containers/PomodoroPage';
import StopWatchPage from './containers/StopWatchPage';
import HabitsPage from './containers/HabitsPage';
import TodosPage from './containers/TodosPage';
import AddHabitPage from './containers/AddHabitPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter"   component={CounterPage} />
    <Route path="/pomodoro"  component={PomodoroPage} />
    <Route path="/stopwatch" component={StopWatchPage} />
    <Route path="/habits"    component={HabitsPage} />
    <Route path="/todos"     component={TodosPage} />
    <Route path="/addHabit"  component={AddHabitPage} />
  </Route>
);
