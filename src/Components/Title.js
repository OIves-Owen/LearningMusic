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
    console.log(this.props.titleRightAnim);
    let up = 'translate(0px, '+this.props.offy+')';
    let left = 'translate('+this.props.offx+', 0px)';
    let right = 'translate('-this.props.offx+', 0px)';
    return (
      <div className="TitleWhole">
        { this.props.ProgressBar ? (
          <div className="progressOuter" style={{opacity: this.props.opacity, transition: 'all 1s', transform: up}}>
            <div className="innerPlaceholder"></div>
            <div className="progressInner" style={{width: this.props.progressPercent*98+'%'}}></div>
          </div>
        ) : (
        <div className="title">
          <h1 style={{opacity: this.props.opacity, transform: up}}>{this.props.title}</h1>
        </div>
      )}
      <div className="titleIconLeft" style={{transform: left}}><i onClick={this.props.goHome} className={this.props.iconleft}/></div>
      <div className="titleIconRight"><i onClick={this.props.settings} className={this.props.iconright} style={{animation: this.props.titleRightAnim, transform: right}}/></div>
      </div>
    );
  }
}
export default Title;
