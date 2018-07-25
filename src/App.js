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
      titleright: '',
      title: 'Intuitive Music',
      offx: 0,
      offy: 0,
      Progress: [],
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
  ReturntoMenu() {
    console.log('ReturntoMenu--App.js');
    this.ChangeTitle('Intuitive Music');
    setTimeout(() => {
      this.setState({titleleft: ''});
      this.setState({Item1isMenu: true});
    }, 1000);
  }
  updateProgress(percent) {
    this.setState({progressPercent: percent});
  }
  ChangeTitle(Choice) {
    this.setState({offy: '-200px', offx: '-200px'});
    setTimeout(() => {
      this.setState({title: Choice, offy: '0px', offx: '0px', titleleft: 'fa fa-home fa-2x'});
      this.setState({Item1isMenu: false});
    }, 1000);
  }
  render() {
    console.log(this.state.Item1isMenu);
    return (
      <div className="App">
        <Title progressPercent={this.state.progressPercent} ProgressBar={!this.state.Item1isMenu} goHome={this.ReturntoMenu.bind(this)} iconleft={this.state.titleleft} iconright ={this.state.titleright} offy={this.state.offy} offx={this.state.offx} title={this.state.title}/>
        <Item1 Progress={this.state.Progress} ref={this.child} updateProgress={this.updateProgress.bind(this)} ExitMenu={this.ChangeTitle.bind(this)} EnterMenu={this.ReturntoMenu.bind(this)}/>
      </div>
    );
  }
}

export default App;
