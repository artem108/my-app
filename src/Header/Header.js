import React, { Component } from 'react'
import './Header.css'
import  RadarGraph from '../Menu/AboutMe/GraphSckills.js'

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <div>
          <RadarGraph />
        </div>
        <div className='header-img'></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
  }
}

export default Header
