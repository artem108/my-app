import React, { Component } from 'react'
import './App.css'
 import Entrance from './Entrance/Entrance'
 import TalkMe from './Main/Menu/TalkMe/components/TalkMe'


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
