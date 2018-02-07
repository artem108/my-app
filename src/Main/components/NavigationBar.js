import React, { Component } from 'react'
import '../../css/NavigationBar.css'
import { NavigationContainer }  from './../../styled/NavigationBar.style'

import { Link } from 'react-router'

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer  className='navigation-container'>
        <Link to='/'>Home</Link>
        <Link to='/skills'>My skills</Link>
        <Link to='/aboutMe'>Aboute me</Link>
        <Link to='/brain'>Brain</Link>
        <Link to='/movies'>Movies</Link>
          {/* <Link to='/news'>News</Link> */}
        </NavigationContainer>
    );
  }
}

export default NavigationBar
