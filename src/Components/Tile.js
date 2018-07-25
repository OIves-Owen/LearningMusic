import React, { Component } from 'react';
export default class Tile extends Component {
  ExitMenu() {
    this.props.ExitMenu(this.props.title, this.props.listId);
  }
  render() {
    return (
      <div style={{opacity: this.props.opacity, background: this.props.background, color: this.props.background}} onClick={this.ExitMenu.bind(this)} className="Tile"> {this.props.title} </div>
    );
  }
}
