import React, { Component } from 'react';
import './Tile.min.css';
import Tile from './Tile';
class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: this.props.opacity
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({opacity: newProps.opacity});
  }
  ExitMenu(newName) {
    this.props.ExitMenu(newName);
  }
  EnterMenu(newName){
    this.props.EnterMenu(newName);
  }
  render() {
    return (
      <div className="Tiles">
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Notes" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Clefs" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Keys" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Chords" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Progressions" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Modes" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Substitutions" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Complex Shit" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="This stuff'll blow your mind" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Don't even try" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="? ?" />
        <Tile opacity={this.state.opacity} ExitMenu={this.ExitMenu.bind(this)} title="Mystery Box 5" />
      </div>
    );
  }
}
export default Tiles;
