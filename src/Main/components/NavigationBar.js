import React, { Component } from 'react'
import '../../css/NavigationBar.css'
import { Link } from 'react-router'

class NavigationBar extends Component {
  render() {
    return (
      <section className='navigation-container'>
        <Link to='/'>Home</Link>
        <Link to='/skills'>My skills</Link>
        <Link to='/aboutMe'>Aboute me</Link>
          {/* <Link to='/news'>News</Link> */}
        </section>
    );
  }
}

export default NavigationBar