import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Panel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    let panelDisplay;
    if(!this.props.panel.text){
      panelDisplay = <FontAwesomeIcon icon="caret-square-right" size="4x"/>;
    } else {
      panelDisplay = <h3 style={{padding:0, margin:0,lineHeight: '64px', fontSize: '30px',
        transition: 'all 0.5s'}}>{this.props.panel.text}</h3>;
    }
    let panel = [];
    for(let i = 0; i < this.props.panel.replies.length; i++){
      panel.push(<div style={{animation: this.props.panel.animation}} key={'reply'+i} onClick={this.props.reply.bind(this,i)} className="reply"><h2>{this.props.panel.replies[i]}</h2></div>);
    }

    return(
      <div className="NotesPanel">
        {panel}
      </div>
    );
  }
}
