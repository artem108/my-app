import React, { Component } from 'react'
import styled from 'styled-components'
import '../../css/Home.css'
import { RevealP }  from './Home.style'
import WheninView from './WheninView'


class Home extends Component {
  render() {
    const style = {
      color: 'red',
      fontSize: '3em'
    }
    return (
      <section>
          <h2 style={style}>Home</h2>
        <section className='home-img'>
          <h1>Artem Arshaniy</h1>
          <h2>Front-end Developer</h2>
        </section>
        <WheninView>
        {
            ({isInView}) =>
            <RevealP hide={!isInView}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </RevealP>
          }
        </WheninView>
        </section>
    );
  }
}

export default Home
