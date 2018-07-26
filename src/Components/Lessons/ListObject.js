import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ListObject extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    let textlist = [];
    for(let i = 0; i< this.props.notelist.length; i++) {
      if(this.props.iterator === i){
        this.props.weights[i] = 'rgb(250, 200, 50)';
      } else {
        this.props.weights[i] = null;
      }
      textlist.push(<li key={'text'+i} style={{opacity: this.props.opacities[11-i], transition: this.props.listObject.liTransition}}><p style={{color: this.props.weights[11-i],padding:0, margin:0}}>{this.props.notelist[i]}</p></li>);
    }
    return(
      <div style={{transform: 'translate3d('+this.props.listObject.translate+')', transition: 'all 1s', display: 'inline-block', padding: 0, margin:0, width: this.props.listObject.width}}>
        <ul style={{transition: this.props.listObject.transition, opacity: this.props.listObject.opacity}} className="textContainer">
          {textlist}
        </ul>
      </div>
    );
  }
}
