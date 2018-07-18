import React, { Component } from 'react';
import './Title.css';
class Title extends Component {
  render() {
    let up = 'translate(0px, '+this.props.offy+')';
    let left = 'translate('+this.props.offx+', 0px)';
    let hidel = {
      transform: left
    }
    let hide = {
      transform: up
    }
    return (
      <div className="title">
        <div style={hidel} ><i onClick={this.props.goHome.bind(this)} className={this.props.iconleft}/></div>
        <h1 style={hide}>{this.props.title}</h1>
        <div><i className={this.props.iconright}/></div>
      </div>
    );
  }
}
export default Title;
