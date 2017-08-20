import React, { Component } from 'react'
import './Main.css'
import Home from './Menu/Home/Home'
import AboutMe from './Menu/AboutMe/AboutMe'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showHome: true,
      showAboutMe: false
    }
    this.showHome = this.showHome.bind(this)
    this.showAboutMe= this.showAboutMe.bind(this)
  }

  showHome() {
         this.setState({showHome: true,
                        showAboutMe: !this.state.showAboutMe})
     }
     showAboutMe() {
            this.setState({showAboutMe: true,
                            showHome: !this.state.showHome})
        }

  render() {

    let menuContent

    if (this.state.showHome) {
      menuContent = <Home />
    }
    if (this.state.showAboutMe) {
      menuContent = <AboutMe />
    }
    return (
      <div>
        <div className='main-menu-container'>
          <div onClick={this.showHome.bind(this)}>
            Home
          </div>
          <div className=''>
            <p>News</p>
            </div>
            <div onClick={this.showAboutMe.bind(this)}>
              <p>Aboute me</p>
              </div>
              <div className=''>
                <p>Text</p>
                </div>
                <div className=''>
                  <p>Anything</p>
                  </div>
          </div>
          <div>
          {menuContent}
          </div>
        </div>
    );
  }
}

export default Main
