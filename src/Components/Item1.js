import React, { Component } from 'react';
import Tiles from './Tiles';
import Lessons from './Lessons';
import './Content.css'
class Item1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Menu',
      opacity: 1
    }
  }
  ExitMenu(newName) {
    this.props.ExitMenu(newName);
    this.setState({opacity: 0});
    setTimeout(function() {
      this.setState({value: newName})}.bind(this)
    , 800);
    setTimeout(function() {
      this.setState({opacity: 1})}.bind(this)
    , 1000);
  }
  EnterMenu() {
    this.setState({opacity: 0});
    this.props.EnterMenu();
    setTimeout(function() {
      this.setState({value: 'Menu'})}.bind(this)
    , 800);
    setTimeout(function() {
      this.setState({opacity: 1})}.bind(this)
    , 1000);
  }
  render() {
    // Read whether the user is on the Menu or not, if not then send the lessonName to the lesson class and render it.
      return (
        <div style={{transition: 'all 1s', opacity: this.state.opacity}}>
          {this.state.value === 'Menu' ? (<Tiles Progress={this.props.Progress} ExitMenu={this.ExitMenu.bind(this)}/>) : ( <Lessons EnterMenu={this.EnterMenu.bind(this)} Progress={this.props.Progress} updateProgress={this.props.updateProgress.bind(this)} opacity={this.state.opacity} lesson={this.state.value}/> )}
        </div>
    );
  }
}
export default Item1;
