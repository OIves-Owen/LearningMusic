import React, { Component } from 'react';
export default class Tile extends Component {
  ExitMenu() {
    this.props.ExitMenu(this.props.title, this.props.listId);
  }
  render() {
    return (
      <div style={{opacity: this.props.opacity, background: this.props.background[0], color: this.props.background[1]}} onClick={this.ExitMenu.bind(this)} className="Tile"> {this.props.title} </div>
    );
  }
}
