import React, { Component } from 'react';
import './Tile.min.css';
import Tile from './Tile';
class Tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: this.props.opacity,
      tiles: ["Notes","Clefs","Keys","Chords","Progressions","Modes","Substitutions","Complex Stuff","This Stuff'll Blow Your Mind","Placeholder","Placeholder","Placeholder"],
      tileActive: [],
      Progress: [0],
    }
  }
  componentWillMount() {
    this.checkBackgrounds();
  }
  checkBackgrounds() {
    if(localStorage.getItem('save') == null) {
      var progress = [0: "Progress", 0: "CurrentProgress"];
      localStorage.setItem('save', JSON.stringify(progress));
    } else {
      var progress = JSON.parse(localStorage.getItem('save'));
    }
    setTimeout(() => this.setState({
      Progress: JSON.parse(localStorage.getItem('save'))
    }),500);
  }
  ExitMenu(newName, key) {
    if(this.state.tileActive[key] == null){
      this.props.ExitMenu(newName);
    }
  }
  EnterMenu(newName){
    this.props.EnterMenu(newName);
  }
  render() {
    console.log(this.state.Progress[0]);
    let tiles = [];
    for(let i = 0; i < this.state.tiles.length; i++){
      if(this.state.Progress[0] < i){
        this.state.tileActive[i] = "rgb(80,80,80)";
      } else {
        this.state.tileActive[i] = null;
      }
      tiles.push(<Tile key={'Tile'+i} listId={i} opacity={this.props.opacity} ExitMenu={this.ExitMenu.bind(this)} title={this.state.tiles[i]} background={this.state.tileActive[i]}/>);
    }
    return (
      <div className="Tiles">
        {tiles}
      </div>
    );
  }
}
export default Tiles;
