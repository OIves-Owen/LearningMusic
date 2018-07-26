import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Music from './Vex.jsx';
export default class Stave extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div id="boo" style={{display:'inline-block', opacity: this.props.object1.opacity, transition: 'all 1.5s', width: this.props.object1.width, transform: 'translate3d('+this.props.object1.translate+')'}}>
          {this.props.object1.display && <Music size={this.props.object1.size} ref={(node) => {this.childStave = node;}} notes={this.props.notes} clef={"treble"}/>}
      </div>
    );
  }
}
