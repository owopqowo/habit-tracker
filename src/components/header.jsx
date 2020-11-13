import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <h1 className="header-title">Habit Tracker</h1>
        <span className="header-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;