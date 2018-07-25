import React, { Component } from 'react';
import './Title.css';
class Title extends Component {
  constructor(props){
    super(props);
    this.state = {
      Progress: 0,
    }
  }
  render() {
    console.log(this.props.ProgressBar);
    let up = 'translate(0px, '+this.props.offy+')';
    let left = 'translate('+this.props.offx+', 0px)';
    let hidel = {
      transform: left
    }
    let hide = {
      transform: up
    }
    return (
      <div className="TitleWhole">
        { this.props.ProgressBar ? (
          <div className="progressOuter" style={{opacity: this.props.opacity, transition: 'all 1s'}}>
            <div className="innerPlaceholder"></div>
            <div className="progressInner" style={{width: this.props.progressPercent*98+'%'}}></div>
          </div>
        ) : (
        <div className="title">
          <div style={hidel} ><i onClick={this.props.goHome.bind(this)} className={this.props.iconleft}/></div>
          <h1 style={hide}>{this.props.title}</h1>
          <div><i className={this.props.iconright}/></div>
        </div>
      )}
      </div>
    );
  }
}
export default Title;
