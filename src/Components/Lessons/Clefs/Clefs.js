import React, { Component } from 'react';
import Vex from 'vexflow';
import Music from '../Vex';
import './Clefs.min.css'
const {Accidental, StaveNote, Voice} = Vex.Flow;
const notes = [
  new StaveNote({clef: "treble", keys:['a/4'], duration: 'q'}),
  new StaveNote({clef: "treble", keys:['c/4'], duration: 'q'})
]
const notes2 = [
  new StaveNote({clef: "bass", keys:['a/4'], duration: 'q'}),
  new StaveNote({clef: "bass", keys:['c/4'], duration: 'q'})
]
const notes3 = [
  new StaveNote({clef: "alto", keys:['a/4'], duration: 'q'}),
  new StaveNote({clef: "alto", keys:['c/4'], duration: 'q'})
]
const notes4 = [
  new StaveNote({clef: "tenor", keys:['a/4'], duration: 'q'}),
  new StaveNote({clef: "tenor", keys:['c/4'], duration: 'q'})
]
export default class Clefs extends Component {
  constructor() {
    super();
    this.state = {
      staveSizes: [(window.innerWidth/2 - 100),200]
    }
  }
  render(){
    return(
      <div>
        <Music clef={"treble"} notes={notes} size={this.state.staveSizes}/>
        <Music clef={"bass"} notes={notes2} size={this.state.staveSizes}/>
        <Music clef={"alto"} notes={notes3} size={this.state.staveSizes}/>
        <Music clef={"tenor"} notes={notes4} size={this.state.staveSizes}/>
      </div>
    )
  }


}
