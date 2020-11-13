import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="reset-button" onClick={this.props.onReset}>Reset All</button>
      </div>
    );
  }
}

export default Button;