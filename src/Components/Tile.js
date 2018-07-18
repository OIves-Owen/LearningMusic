import React, { Component } from 'react';
export default class Tile extends Component {
  ExitMenu() {
    this.props.ExitMenu(this.props.title);
  }
  render() {
    return (
      <div style={{opacity: this.props.opacity}} onClick={this.ExitMenu.bind(this)} className="Tile"> {this.props.title} </div>
    );
  }
}
