import Vex from 'vexflow';

import React, {Component} from 'react';

const {
    Accidental,
    Formatter,
    Stave,
    StaveNote,
    Renderer,
    Voice,
} = Vex.Flow;

let svgContainer,
    renderer,
    ctx,
    stave,
    voice,
    voice2,
    formatter;

export default class Music extends Component {
    constructor(props){
      super(props);
      this.state = {
        notes: '',
      }
    }
    render() {
        return <div ref="outer" style={{
            margin: 'auto 0',
            display: "inline-block",
        }}>
        </div>;
    }
    componentDidMount() {
        let notes = this.props.notes;
        let size = [(window.innerWidth/2-100), 150];
        if(this.props.size){
          size = this.props.size;
        }
        console.log(notes);
        this.state.notes = notes;
        let svgContainer = document.createElement("div");
        let renderer = new Renderer(svgContainer, Renderer.Backends.SVG);
        renderer.resize(size[0],size[1]);
        let ctx = renderer.getContext();
        let stave = new Stave(0, 0, size[0]);
        stave.addClef('treble');
        let voice = new Voice({num_beats: 1,  beat_value: 4});
        voice.addTickables(notes);
        let formatter = new Formatter().joinVoices([voice]).format([voice], 50 * notes.length);
        voice.draw(ctx, stave);
        stave.setContext(ctx).draw();
        this.refs.outer.innerHTML = "";
        this.refs.outer.appendChild(svgContainer);
    }
}
