import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Notes.min.css'
import Vex from 'vexflow';
import Music from '../Vex';
import Maintext from '../Maintext.js';
import ListObject from '../ListObject.js';
import Stave from '../Stave.js';
import Panel from '../Panel.js';
import {States, notes} from './NotesStates';
import Notes1 from '../../Audio/Notes 1.mp3';
import Plonk1 from '../../Audio/Plonk1.mp3';
import HighVoice1 from '../../Audio/HighVoice1.mp3';
import HighVoice3 from '../../Audio/HighVoice4.mp3';
import LowVoice1 from '../../Audio/LowVoice1.mp3';
import LowVoice2 from '../../Audio/LowVoice2.mp3';
import ChromRun1 from '../../Audio/ChromRun1.mp3';
import Tadaa from '../../Audio/Tadaa.mp3';
import Wrong from '../../Audio/Wrong.mp3';
import Right from '../../Audio/Right.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const {Accidental, StaveNote, Voice, TextNote} = Vex.Flow;
const green = 'rgb(28, 182, 48)';

class LessonNotes extends Component {
  constructor(props){
    super(props);
    this.sound = new Audio(Plonk1);
    //this.staveContainer = React.createRef();
    this.editState = this.editState.bind(this);
    this.state = {
      TotalProgress: this.props.TotalProgress,
      iterator: -1,
      auto: 0,
      panel: {opacity: 1, translate: [0,0,0], display: true, text: '', replies: [], replyOpacity: 0, replyColor: []},
      reply: {animation: '', opacity: 1},
      object1: {opacity: 0, translate: ['-50px',0,0], display: false, size: [(window.innerWidth/3-60),130],width: '50vw'},
      listObject: {opacity: 1, translate: [0,0,0], display: false, transition: 'all 1s',width:'50vw', liTransition: ''},
      maintext: {opacity: 0, translate: [0,0,0], display: true, text: '', color: '', animation: ''},
      pointer: {opacity: 0, translate: [0,0,0], color: 'black', size: '2x'},
      content1: {transition: 'all 1s',display: true, translate: ['25vw',0,0]},
      reset: [
        ['maintext','opacity',0],
        ['object1','opacity',0],
        ['listObject','opacity',0],
        ['pointer','opacity',0],
        ['listObject','translate',[0,0,0]],
        ['object1','translate',[0,0,0]],
      ],
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
                HighVoice3: HighVoice3,
                Tadaa: Tadaa,
                Wrong: Wrong,
                Right: Right},
      notelist: [],
      hoverstate: 0,
      interactable: true,
      progress: 0,
      notes: null,
      noteOriginal: notes,
      states: States,
    }
  }
  updateJSON(){
    if(this.state.TotalProgress[0] < this.props.listId) {
      let newProgress = this.state.TotalProgress[0]+1;
      let progress = [newProgress: "Progress", 0: "CurrentProgress"];
      localStorage.setItem('save', JSON.stringify(progress));
    }
      this.props.EnterMenu();
  }
  reset(){
    let reset = this.state.reset;
    for(let i = 0; i < this.state.reset.length; i++){
        setTimeout(() => this.editState(reset[i][0],reset[i][1],reset[i][2]), i*10);
    }
  }
  // state: State object to be changed, par: Object's Paramater, value: Value to change it to;
  editState(state,par,value,callback){
    console.log('editState');
    let copy = {...this.state[state]};
    copy[par] = value;
    this.setState({[state]: copy},callback);
  }
  componentDidMount(){
    setTimeout(() => this.handleClick(), 1000);
    window.addEventListener("resize", this.forceUpdate);
  }
  startIterator(max, reps, delay, remainder){
    let total = 0;
    this.setState({notes: [notes[10]]});
    for(let j = 0; j < reps; j++){
      for(let i = 0; i < max; i++){
        setTimeout(() => {
          this.setState({iterator: i});
          this.setState({notes: [notes[total]]});
          setTimeout( () => this.child.childStave.componentDidMount(), 10);
          total++;
        }, (delay*i) + (delay*max*j));
      }
    }
    for(let x = 0; x < remainder; x++){
      setTimeout(() => {
        this.setState({iterator: x}, this.forceUpdate);
        this.setState({notes: [notes[total]]});
        setTimeout( () => this.child.childStave.componentDidMount(), 10);
      }, (delay*(max-1)) + delay*(max*(reps-1))+((x+1)*delay));
    }
  }
  autoclick(skipNum){
    this.setState({progress: this.state.progress + (skipNum)}, this.handleClick);
  }
  quiz(question,answers){
    let colors = [];
    this.changeMainText(question);
    setTimeout(() => this.editState('panel','replies',answers),20);
    this.editState('panel','animation','grow 0.8s ease 1s 1 both');
  }
  repliesIn(){
    this.editState('panel','animation','grow ease 0.8s 1 both');
  }
  changeMainText(string, color){
    let addition = 0;
    if(this.state.maintext.opacity === 1){
      this.editState('maintext','opacity',0);
      addition = 600;
    }
    setTimeout(() => this.editState('maintext','text',string), addition);
    setTimeout(() => this.editState('maintext','color',color),addition);
    setTimeout(() => this.editState('maintext','opacity',1), addition+5);
  }
  //Triggered when user chooses a reply, simply plays the grow animation in reverse and removes replies
  reply(number){
    this.editState('panel','animation','hide ease 1s 1 both');
    this.autoclick(number+1);
    setTimeout(() => this.editState('panel','replies',[]), 2000);
  }
  // A simple imitation of typing a string adds one character to the string every interval
  type(string,duration,delay){
    let chars = string.split("");
    let interval = duration/chars.length;
    let textArr = [];
    let texts = [];
    let addition = 0;
    if(this.state.maintext.opacity === 1){
      this.editState('maintext','opacity',0);
      addition = 600;
    }
    setTimeout(() => this.editState('maintext','text',''),addition);
    setTimeout(() => this.editState('maintext','opacity',1),addition+5);
    for(let i = 0; i < string.length; i++){
      for(let j = 0; j <= i; j++){
        textArr.push(chars[j]);
      }
      texts[i] = textArr.join("");
      setTimeout(() => this.editState('maintext','text',texts[i]),(interval*i)+delay+addition);
      textArr = [];
    }
  }
  // This atrocity takes the data from NotesStates.js and does a variety of stuff. Needs to sort the data better!
  handleClick(){
    console.log('current progress = ' + this.state.progress);
    let current;
    if(this.state.states[this.state.progress]){
      current = this.state.states[this.state.progress];
    } else {
      this.updateJSON();
      return;
    }
    if(this.state.auto > 0){
      this.setState({auto: this.state.auto - 1});
    }
    this.props.updateProgress(this.state.progress/(this.state.states.length-1));
    for(let i = 0; i < current.length; i++){
      switch(current[i][0]){
        case('maintext'):
          if(current[i].length === 3){
            setTimeout(() => this.changeMainText(current[i][1]),current[i][2]);
          } else {
            setTimeout(() => this.changeMainText(current[i][1],current[i][2]),current[i][3]);
          }
          break;
        case('state-i'):
          this.editState(current[i][1],current[i][2],current[i][3]);
          break;
        case('state-d'):
          setTimeout( () => this.editState(current[i][1],current[i][2],current[i][3])
          , current[i][4]);
          break;
        case('setState'):
          this.setState({[current[i][1]]: current[i][2]});
          break;
        case('setState-d'):
          setTimeout(() =>
            {this.setState({[current[i][1]]: current[i][2]});}
            ,current[i][3]);
          break;
        case('repliesIn'):
            this.repliesIn();
          break;
        case('type'):
          this.type(current[i][1],current[i][2],current[i][3]);
          break;
        case('textpush'):
          setTimeout(() =>
            {this.state.notelist.push(current[i][1]);
            this.forceUpdate();}
          ,current[i][2]);
          break;
        case('text-clear'):
          this.state.notelist = [];
          break;
        case('sound'):
          this.sound.currentTime = 0;
          this.sound.play();
          break;
        case('sound-vol'):
          this.sound.volume = current[i][1];
          break;
        case('sound-d'):
          setTimeout(() => {this.sound.currentTime = 0;
          this.sound.play();},current[i][1]);
          break;
        case('sound-change'):
          this.sound.src = this.state.sources[current[i][1]];
          break;
        case('note-i'):
          this.state.notes.push(new StaveNote({auto_stem: true, clef: "treble", keys:[current[i][2]] ,duration: 'q'}));
          this.child.childStave.componentDidMount();
          break;
        case('note-d'):
          setTimeout( () => this.state.notes.push(new StaveNote({auto_stem: true, clef: "treble", keys: [current[i][2]], duration: "q"})), current[i][1]);
          setTimeout( () => this.child.childStave.componentDidMount(), current[i][1]);
          break;
        case('note-clear'):
          this.setState({notes: null});
          setTimeout( () => this.child.childStave.componentDidMount(), 10);
          break;
        case('note-test'):
          this.state.notes.push(new StaveNote({auto_stem: true, clef:"treble", keys:['c/4'], duration: 'q'}).addAccidental(0, new Accidental("##")));
          this.child.childStave.componentDidMount();
          break;
        case('next'):
          this.next();
          break;
        case('autonext'):
          //console.log('autonext called');
          this.setState({auto: this.state.auto + 1});
          setTimeout(() => this.autoclick(current[i][1]), current[i][2]);
          break;
        case('startIterator'):
          this.startIterator(current[i][1],current[i][2],current[i][3],current[i][4]);
          break;
        case('reset'):
          this.reset();
          break;
        case('quiz'):
          this.quiz(current[i][1],current[i][2]);
          break;
      }
    }
  }

  render(){
    //console.log(this.state.notes);
    return(
      <div  style={{opacity: this.props.opacity}}
            className="NotesContainer">
        { this.state.maintext.display &&
          <Maintext maintext={this.state.maintext}/>
        }
        { this.state.content1.display &&
          <div>
            <div style={{transition: this.state.content1.transition, justifyContent: 'center', width: '100vw', transform: 'translate3d('+this.state.content1.translate+')'}}>

              <ListObject iterator={this.state.iterator}
                          opacities={this.state.opacities}
                          listObject={this.state.listObject}
                          notelist={this.state.notelist}
                          weights={this.state.weights}/>

              <Stave      object1={this.state.object1}
                          notes={this.state.notes}
                          ref={(node) => {this.child = node;}} />
            </div>
            <div className="pointerContainer" style={{opacity: this.state.pointer.opacity, transform: 'translate3d('+this.state.pointer.translate+')'}}>
              <FontAwesomeIcon icon="arrow-up" size={this.state.pointer.size} color={this.state.pointer.color}/>
            </div>
          </div>
        }
        { this.state.panel.display &&
          <Panel reply={this.reply.bind(this)} panel={this.state.panel} />
        }
      </div>
    );
  }
}
export default LessonNotes;
