import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Maintext extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <div className="mainTextContainer" style={{opacity: this.props.maintext.opacity, animation: this.props.maintext.animation}}>
          <h3 style={{color: this.props.maintext.color}} className="mainText">{this.props.maintext.text}</h3>
        </div>
      </div>
    );
  }
}
