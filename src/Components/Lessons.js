import React, { Component } from 'react';
import Notes from './Lessons/Notes/Notes';
import Clefs from './Lessons/Clefs/Clefs';
export default class Lessons extends Component {
  constructor(){
    super();
    this.Output = this.Output.bind(this);
  }
  Output(state) {
    switch(state) {
        case 'Notes':
            return <Notes opacity={this.props.opacity} />;
        case 'Clefs':
            return <Clefs opacity={this.props.opacity} />
        default:
            return <h1 style={{opacity: this.props.opacity, transition: 'all 0.4s'}}>Sorry, no content here yet</h1>;
      }
  }
  render(){
    const out = this.Output(this.props.lesson);
    return(
      out
    );
  }
}
