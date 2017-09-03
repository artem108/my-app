import React, { Component } from 'react'
import { createStore } from 'redux'
import './App.css'
import Main from './Main/Main'
import Entrance from './Entrance/Entrance'
 import TalkMe from './Main/Menu/TalkMe/TalkMe'


class App extends Component {



  render() {
    return (
      <div className="App">
          <TalkMe />
        </div>
    );
  }
}

export default App
