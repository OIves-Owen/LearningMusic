import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Notes.min.css'
import Vex from 'vexflow';
import Music from '../Vex';
import {States} from './NotesStates';
import Notes1 from '../../Audio/Notes 1.mp3';
import Plonk1 from '../../Audio/Plonk1.mp3';
import HighVoice1 from '../../Audio/HighVoice1.mp3';
import HighVoice3 from '../../Audio/HighVoice4.mp3';
import LowVoice1 from '../../Audio/LowVoice1.mp3';
import LowVoice2 from '../../Audio/LowVoice2.mp3';
import ChromRun1 from '../../Audio/ChromRun1.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const {Accidental, StaveNote, Voice, TextNote} = Vex.Flow;
const green = 'rgb(28, 182, 48)';
let notes = [
  new StaveNote({clef: "treble", keys: ["a/3"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["b/3"], duration: "q"}).addAccidental(0, new Accidental("b")),
  new StaveNote({clef: "treble", keys: ["b/3"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["c/4"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["c/4"], duration: "q"}).addAccidental(0, new Accidental("#")),
  new StaveNote({clef: "treble", keys: ["d/4"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["e/4"], duration: "q"}).addAccidental(0, new Accidental("b")),
  new StaveNote({clef: "treble", keys: ["e/4"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["f/4"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["f/4"], duration: "q"}).addAccidental(0, new Accidental("#")),
  new StaveNote({clef: "treble", keys: ["g/4"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["g/4"], duration: "q"}).addAccidental(0, new Accidental("#")),
  new StaveNote({clef: "treble", keys: ["a/4"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["a/4"], duration: "q"}).addAccidental(0, new Accidental("#")),
  new StaveNote({clef: "treble", keys: ["b/4"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["c/5"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["d/5"], duration: "q"}).addAccidental(0, new Accidental("b")),
  new StaveNote({clef: "treble", keys: ["d/5"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["e/5"], duration: "q"}).addAccidental(0, new Accidental("b")),
  new StaveNote({clef: "treble", keys: ["e/5"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["f/5"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["g/5"], duration: "q"}).addAccidental(0, new Accidental("b")),
  new StaveNote({clef: "treble", keys: ["g/5"], duration: "q"}),
  new StaveNote({clef: "treble", keys: ["a/5"], duration: "q"}).addAccidental(0, new Accidental("b")),
  new StaveNote({clef: "treble", keys: ["a/5"], duration: "q"}),
]
class LessonNotes extends Component {
  constructor(props){
    super(props);
    this.sound = new Audio(Plonk1);
    this.childStave = React.createRef();
    this.state = {
      iterator: -1,
      auto: 0,
      panel: {opacity: 1, translate: [0,0,0], display: true, text: '', replies: [], replyOpacity: 0},
      reply: {animation: '', opacity: 1},
      object1: {opacity: 0, translate: [0,0,0], display: false, size: [(window.innerWidth/2-150),130],width: 0},
      object2: {opacity: 0, translate: [0,0,0], display: false, transition: 'all 1s',width:'100%', liTransition: ''},
      maintext: {opacity: 0, translate: [0,0,0], display: true, text: '', color: 'black', animation: ''},
      opacity: this.props.opacity,
      opacities: [],
      weights: [],
      bold: [],
      sources: {Plonk1:Plonk1,
                Notes1:Notes1,
                ChromRun1: ChromRun1,
                LowVoice1: LowVoice1,
                LowVoice2: LowVoice2,
                HighVoice1: HighVoice1,
                HighVoice3: HighVoice3},
      notelist: [],
      hoverstate: 0,
      interactable: true,
      progress: 0,
      notes: [notes[10]],
      noteOriginal: notes,
      states: States,
    }
  }

  // state: State object to be changed, par: Object's Paramater, value: Value to change it to;
  editState(state,par,value){
    let copy = {...this.state[state]};
    copy[par] = value;
    this.setState({[state]: copy});
  }
  componentDidMount(){
    setTimeout(() => this.handleClick(), 1000);
  }
  startIterator(max, reps, delay, remainder){
    let total = 0;
    this.setState({notes: [notes[10]]});
    for(let j = 0; j < reps; j++){
      for(let i = 0; i < max; i++){
        setTimeout(() => {
          this.setState({iterator: i});
          console.log('loop: ' + (i+(j*max)));
          this.setState({notes: [notes[total]]});
          setTimeout( () => this.childStave.current.componentDidMount(), 10);
          total++;
        }, (delay*i) + (delay*max*j));
      }
    }
    for(let x = 0; x < remainder; x++){
      setTimeout(() => {
        this.setState({iterator: x}, this.forceUpdate);
        this.setState({notes: [notes[total]]});
        setTimeout( () => this.childStave.current.componentDidMount(), 10);
      }, (delay*(max-1)) + delay*(max*(reps-1))+((x+1)*delay));
    }
  }
  autoclick(skipNum){
    this.setState({progress: this.state.progress + (skipNum)}, this.handleClick);
  }
  reply(number){
    this.autoclick(number+1);
    this.repliesOut();
  }
  repliesOut(){
    this.editState('panel','replyOpacity', 0);
    setTimeout(() => this.editState('panel','animation','grow ease 0.8s 1 reverse'), 50);
    setTimeout(() => this.editState('panel','replies',[]), 1000);
    setTimeout(() => this.editState('panel','animation',''), 900);
  }
  type(string,delay,addDelay){
    let chars = string.split("");
    let textArr = [];
    let texts = [];
    for(let i = 0; i < string.length; i++){
      for(let j = 0; j <= i; j++){
        textArr.push(chars[j]);
      }
      texts[i] = textArr.join("");
      setTimeout(() => this.editState('maintext','text',texts[i]),(delay*i)+addDelay);
      textArr = [];
    }
  }
  // Taking data from NotesStates, read and perform functions with data
  handleClick(){
    console.log('current progress = ' + this.state.progress);
    let current = this.state.states[this.state.progress];
    if(this.state.auto > 0){
      this.setState({auto: this.state.auto - 1});
    }
    for(let i = 0; i < current.length; i++){
      if(current[i][0] === 'state-i'){
        this.editState(current[i][1],current[i][2],current[i][3]);
      } else if(current[i][0] === 'state-d') {
        setTimeout( () => this.editState(current[i][1],current[i][2],current[i][3])
        , current[i][4]);
      } else if(current[i][0] === 'setState') {
        this.setState({[current[i][1]]: current[i][2]});
      } else if(current[i][0] === 'setState-d') {
        setTimeout(() =>
          {this.setState({[current[i][1]]: current[i][2]});}
          ,current[i][3]);
      } else if(current[i][0] === 'repliesIn') {
        setTimeout(() => this.editState('panel','animation','grow ease 0.8s 1'), 20);
        setTimeout(() => this.editState('panel','replyOpacity', 1), 50);
        setTimeout(() => this.editState('panel','animation',''), 1000);
      } else if(current[i][0] === 'repliesOut') {
        this.repliesOut();
      } else if(current[i][0] === 'type'){
        this.type(current[i][1],current[i][2],current[i][3]);
      } else if(current[i][0] === 'textpush') {
        setTimeout(() =>
          {this.state.notelist.push(current[i][1]);
          this.forceUpdate();}
        ,current[i][2]);
      } else if(current[i][0] === 'text-clear') {
        this.state.notelist = [];
      } else if(current[i][0] === 'sound'){
        this.sound.currentTime = 0;
        this.sound.play();
      } else if(current[i][0] === 'sound-vol'){
        this.sound.volume = current[i][1];
      } else if(current[i][0] === 'sound-d'){
        setTimeout(() => {this.sound.currentTime = 0;
        this.sound.play();},current[i][1]);
      } else if(current[i][0] === 'sound-change') {
        this.sound.src = this.state.sources[current[i][1]];
      } else if(current[i][0] === 'note-i') {
        this.state.notes.push(new StaveNote({auto_stem: true, clef: "treble", keys:[current[i][2]] ,duration: 'q'}));
        this.childStave.current.componentDidMount();
      } else if(current[i][0] === 'note-d'){
        setTimeout( () => this.state.notes.push(new StaveNote({auto_stem: true, clef: "treble", keys: [current[i][2]], duration: "q"})), current[i][1]);
        setTimeout( () => this.childStave.current.componentDidMount(), current[i][1]);
      } else if(current[i][0] === 'note-clear'){
        this.setState({notes: []});
      } else if(current[i][0] === 'note-test'){
        this.state.notes.push(new StaveNote({auto_stem: true, clef:"treble", keys:['c/4'], duration: 'q'}).addAccidental(0, new Accidental("##")));
        this.childStave.current.componentDidMount();
      } else if(current[i][0] === 'next'){
        this.next();
      } else if(current[i][0] === 'autonext'){
        //console.log('autonext called');
        this.setState({auto: this.state.auto + 1});
        setTimeout(() => this.autoclick(current[i][1]), current[i][2]);
      } else if(current[i][0] === 'startIterator'){
        this.startIterator(current[i][1],current[i][2],current[i][3],current[i][4]);
      }
    }
  }

  render(){
    //console.log(this.state.notes);
    let textlist = [];
    for(let i = 0; i< this.state.notelist.length; i++) {
      if(this.state.iterator === i){
        this.state.weights[i] = 600;
      } else {
        this.state.weights[i] = 300;
      }
      textlist.push(<li key={'text'+i} style={{opacity: this.state.opacities[11-i], transition: this.state.object2.liTransition}}><p style={{fontWeight: this.state.weights[11-i],padding:0, margin:0}}>{this.state.notelist[i]}</p></li>);
    }
    let panelDisplay;
    if(!this.state.panel.text){
      panelDisplay = <FontAwesomeIcon icon="caret-square-right" size="4x"/>;
    } else {
      panelDisplay = <h3 style={{padding:0, margin:0,lineHeight: '64px', fontSize: '30px',
        transition: 'all 0.5s'}}>{this.state.panel.text}</h3>;
    }
    let panel = [];
    for(let i = 0; i < this.state.panel.replies.length; i++){
      panel.push(<div style={{opacity: this.state.panel.replyOpacity, animation: this.state.panel.animation}} key={'reply'+i} onClick={this.reply.bind(this,i)} className="reply"><h2>{this.state.panel.replies[i]}</h2></div>);
    }
    return(
      <div style={{opacity: this.props.opacity}} className="NotesContainer">
        { this.state.maintext.display &&
          <h3 style={{opacity: this.state.maintext.opacity, color: this.state.maintext.color, animation: this.state.maintext.animation}} className="mainText">{this.state.maintext.text}</h3>
        }
        { this.state.object2.display &&
          <div style={{transform: 'translate3d('+this.state.object2.translate+')', transition: 'all 1s', display: 'inline-block', padding: 0, margin:0, display: 'flex'}}>
            <ul style={{transition: this.state.object2.transition, flex: 1, opacity: this.state.object2.opacity}} className="textContainer">
              {textlist}
            </ul>
            <div id="boo" style={{opacity: this.state.object1.opacity, transition: 'all 0.4s', width: this.state.object1.width, verticalAlign: 'middle'}}>
                {this.state.object1.display && <Music size={this.state.object1.size} ref={this.childStave} notes={this.state.notes} clef={"treble"}/>}
            </div>
          </div>
        }
        { this.state.panel.display &&
          <div className="NotesPanel" style={{opacity: this.state.panel.opacity}}>
            {panel}
          </div>
        }
      </div>
    );
  }
}
export default LessonNotes;
