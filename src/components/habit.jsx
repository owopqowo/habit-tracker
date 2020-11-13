import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  }
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  }
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  }
  render() {
    const {name, count} = this.props.habit;
    return (
      <li className="habit">
        <button className="habit-button habit-delete" onClick={this.handleDelete}><i className="fas fa-times"></i></button>
        <span className="habit-name">{name}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}><i className="fas fa-plus"></i></button>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}><i className="fas fa-minus"></i></button>
      </li>
    );
  }
}

export default Habit;