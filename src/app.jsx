import React, { Component } from 'react';
import './app.css';
import Header from './components/header';
import Input from './components/input';
import Habits from './components/habits';
import Button from './components/button';


class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count: 0};
      }
      return habit;
    });
    this.setState({habits});
  }
  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  }
  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count: habit.count + 1};
      }
      return item;
    });
    this.setState({habits});
  }
  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1
        return {...habit, count: count < 0 ? 0 : count};
      }
      return item;
    });
    this.setState({habits});
  }
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  }
  render() {
    return (
      <>
        <Header totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Input onAdd={this.handleAdd} />
        <Habits habits={this.state.habits} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
        <Button habits={this.state.habits} onReset={this.handleReset} />
      </>
    );
  }
}

export default App;
