import React, { Component } from 'react'
import styled from 'styled-components'
import '../../css/Home.css'
import ReactTimeout from 'react-timeout'

class Home extends Component {
  render() {
    return (
      <section>
        <section className='home-img'>
          <h1>Artem Arshaniy</h1>
          <h2>Front-end Developer</h2>
        </section>

        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <h3>You can hover this text, if you want or still dont wo this.</h3>
        </p>
        </section>
    );
  }
}

export default Home
