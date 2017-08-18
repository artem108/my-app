import React, { Component } from 'react'
import './Menu.css'
import GraphSckills from './AboutMe/GraphSckills'

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showContent1: false,
    }
    this.showContent1 = this.showContent1.bind(this)
  }

  showContent1() {
         this.setState({showContent1: true})
     }

  render() {

    let menuContent
    if (this.state.showContent1) {
      menuContent = <GraphSckills />
    }
    return (
      <div>
        <div className='main-menu-container'>
          <div className=''>
            <p>News</p>
            </div>
            <div onClick={this.showContent1.bind(this)}>
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

export default Menu
{/* <ul>
  <li>News</li>
    <li>Aboute me</li>
        <li>Text</li>
          <li>Anything</li>
        </ul> */}
