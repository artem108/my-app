import React, { Component } from 'react'
import './App.css'
import NavigationBar from './Main/components/NavigationBar'
class App extends Component {

  render() {

    return (
      <div className="App">
        <NavigationBar />

        {this.props.children}
        </div>
    );
  }
}

export default App
