import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // const greeting = 'I am a string!';
    return (
      <div className="App">

        <div>
          {/* <h1>{ greeting }</h1> */}
          <Container />

        </div>
      </div>
    );
  }
}

function PlayButton(props) {
  const className = props.isMusicPlaying ? 'play active' : 'play';
  return <button onClick={props.onClick} className={className}>{className}</button>;
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { isMusicPlaying: false };
  }

  handleClick() {
    if (this.state.isMusicPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }

    this.setState(prevState => {
      return { 
        isMusicPlaying: !prevState.isMusicPlaying   
      };
    });
  };

  
  render() {
    const status = this.state.isMusicPlaying ? 'Playing' : 'Not playing';
    return (
      <div>
        {/* <h1 onClick={this.handleClick.bind(this)}>{ status }</h1> */}
        
        <PlayButton onClick={this.handleClick.bind(this)} isMusicPlaying={this.state.isMusicPlaying} />
        <audio controls id="audio" ref={(audioTag) => { this.audio = audioTag }}>
        <source src="horse.mp3" type="audio/mpeg"></source>
        </audio>
      </div>
    );
  }
}


export default App;
