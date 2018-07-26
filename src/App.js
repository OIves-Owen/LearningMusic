import React from 'react';
import Title from './Components/Title';
import Item1 from './Components/Item1';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCaretSquareRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'
let startingConditions = [0: "Progress", 0: "CurrentProgress"];

library.add(faHome, faCaretSquareRight, faArrowUp);
class App extends React.Component {
  constructor(){
    super();
    this.child = React.createRef();
    this.state = {
      progressPercent: 0,
      Item1isMenu: true,
      titleleft: '',
      titleright: 'fa fa-cog fa-2x',
      titleRightAnim: '',
      title: 'Intuitive Music',
      offx: 0,
      offy: 0,
      Progress: [],
      backgrounds: ['linear-gradient(to top right, #60cda9, #2e8eac)','linear-gradient(to top right,#BE93FD, #845EC2)','linear-gradient(to bottom right, #434343, #000000)','linear-gradient(to top right,#667eea, #764ba2)','radial-gradient(#ff758c, #ff7eb3)'],
      currentBackground: [0,1],
      topBackground: true,
      backgroundOpacities: [1,0],
      interactable: true
    }
  }
  componentWillMount() {
    //localStorage.setItem('save', JSON.stringify(startingConditions));
    if(localStorage.getItem('save') == null) {
      var progress = [0: "Progress", 0: "CurrentProgress"];
      localStorage.setItem('save', JSON.stringify(progress));
    } else {
      var progress = JSON.parse(localStorage.getItem('save'));
    }
    this.setState({
      Progress: JSON.parse(localStorage.getItem('save'))
    });
  }
  settings(){
    if(this.state.interactable){
      this.setState({interactable: false});
      if(this.state.topBackground){
        setTimeout(() => this.setState({currentBackground: [(this.state.currentBackground[0]+2)%this.state.backgrounds.length,this.state.currentBackground[1]]}),2000);
        this.setState({backgroundOpacities: [0,1]});
      } else {
        setTimeout(() => this.setState({currentBackground: [this.state.currentBackground[0],(this.state.currentBackground[1]+2)%this.state.backgrounds.length]}),2000);
        this.setState({backgroundOpacities: [1,0]});
      }
      this.setState({topBackground: !this.state.topBackground});
      this.setState({titleRightAnim: 'App-logo-spin ease 1s 2 alternate'});
      setTimeout(() => this.setState({titleRightAnim: ''}),1000);
      setTimeout(() => this.setState({interactable: true}),2000);
    }
  }
  BackHome(){
    this.child.current.EnterMenu();
  }
  ReturntoMenu() {
    this.setState({offy: '-200px', offx: '-200px'});
    setTimeout(() => {
      this.setState({title: 'Intuitive Music',offy: '0px', offx: '0px', titleleft: '', titleright: 'fa fa-cog fa-2x'});
      this.setState({Item1isMenu: true});
    }, 1000);
  }
  updateProgress(percent) {
    this.setState({progressPercent: percent});
  }
  ChangeTitle(Choice) {
    this.setState({offy: '-200px', offx: '-200px'});
    setTimeout(() => {
      this.setState({title: Choice, offy: '0px', offx: '0px', titleleft: 'fa fa-home fa-2x', titleright: ''});
      this.setState({Item1isMenu: false});
    }, 1000);
  }
  render() {
    console.log(this.state.currentBackground);
    return (
      <div>
      <div className="App">
        <Title settings={this.settings.bind(this)} progressPercent={this.state.progressPercent} ProgressBar={!this.state.Item1isMenu} goHome={this.BackHome.bind(this)} titleRightAnim={this.state.titleRightAnim}
        iconleft={this.state.titleleft} iconright ={this.state.titleright} offy={this.state.offy} offx={this.state.offx} title={this.state.title}/>
        <Item1 Progress={this.state.Progress} ref={this.child} updateProgress={this.updateProgress.bind(this)} ExitMenu={this.ChangeTitle.bind(this)} EnterMenu={this.ReturntoMenu.bind(this)}/>
      </div>
      <div className="Appback0" style={{opacity: this.state.backgroundOpacities[0], background: this.state.backgrounds[this.state.currentBackground[0]]}}></div>
      <div className="Appback1" style={{opacity: this.state.backgroundOpacities[1], background: this.state.backgrounds[this.state.currentBackground[1]]}}></div>
    </div>
    );
  }
}

export default App;
