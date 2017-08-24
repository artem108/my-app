import React, { Component } from 'react'
import './Main.css'
import Home from './Menu/Home/Home'
import News from './Menu/News/News'
import AboutMe from './Menu/AboutMe/AboutMe'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showHome: true,
      showAboutMe: false,
      showNews: false
    }
    this.showHome = this.showHome.bind(this)
    this.showAboutMe= this.showAboutMe.bind(this)
    this.showNews= this.showNews.bind(this)
  }

  showHome() {
         this.setState({
           showHome: true,
           showNews: false,
           showAboutMe: false,
            })
     }
   showAboutMe() {
        this.setState({
          showAboutMe: true,
          showHome: false,
          showNews: false
        })
    }
    showNews() {
      this.setState({
        showNews: true,
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
