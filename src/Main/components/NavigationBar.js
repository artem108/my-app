import React, { Component } from 'react'
import '../../css/NavigationBar.css'
import { Link } from 'react-router'

class NavigationBar extends Component {
  render() {
    return (
      <section className='navigation-container'>
        <Link to='/'>Home</Link>
        <Link to='/aboute'>Aboute me</Link>
        <Link to='/talk'>Talk</Link>
          {/* <Link to='/news'>News</Link> */}
        </section>
    );
  }
}

export default NavigationBar
