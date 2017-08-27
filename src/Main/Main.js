import React, { Component } from 'react'
import './Main.css'
import Home from './Menu/Home/Home'
import News from './Menu/News/News'
import AboutMe from './Menu/AboutMe/AboutMe'
import TalkMe from './Menu/TalkMe/TalkMe'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showHome: true,
      showAboutMe: false,
      showNews: false,
      showTalkMe: false
    }
    this.showHome = this.showHome.bind(this)
    this.showAboutMe= this.showAboutMe.bind(this)
    this.showNews= this.showNews.bind(this)
    this.showTalkMe= this.showTalkMe.bind(this)
  }

  showHome() {
         this.setState({
           showHome: true,
           showNews: false,
           showAboutMe: false,
           showTalkMe: false
            })
     }
   showAboutMe() {
        this.setState({
          showAboutMe: true,
          showHome: false,
          showNews: false,
          showTalkMe: false
        })
    }
    showNews() {
      this.setState({
        showNews: true,
        showHome: false,
        showAboutMe: false,
        showTalkMe: false
      })
    }

    showTalkMe() {
      this.setState({
        showTalkMe: true,
        showNews: false,
        showHome: false,
        showAboutMe: false
      })
    }

  render() {

    let menuContent

    if (this.state.showHome) {
      menuContent = <Home />
    }
    if (this.state.showAboutMe) {
      menuContent = <AboutMe />
    }
    if (this.state.showNews) {
      menuContent = <News />
    }
    if (this.state.showTalkMe) {
      menuContent = <TalkMe />
    }
    return (
      <div>
        <div className='main-menu-container'>
          <div onClick={this.showHome.bind(this)}>
            Home
          </div>
          <div onClick={this.showNews.bind(this)}>
            <p>News</p>
            </div>
            <div onClick={this.showAboutMe.bind(this)}>
              <p>Aboute me</p>
              </div>
              <div onClick={this.showTalkMe.bind(this)}>
                <p>TalkMe</p>
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
