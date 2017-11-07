import React, { Component } from 'react'
import styled from 'styled-components'
import '../../css/Home.css'
import { RevealPRight, RevealPLeft, Title, HomeImg, ImageText, StyleText }  from './../../styled/Home.style'
import WheninView from './WheninView'

class Home extends Component {
  render() {
    const styleTextHome = {
      borderLeft:'5px solid black'
    }
    return (
      <section>
          <Title>Home</Title>
        <HomeImg className='home-img'>
          <h1>Artem Arshaniy</h1>
          <ImageText>Front-end Developer</ImageText>
        </HomeImg>
        <div style={styleTextHome}>
        <WheninView>
        {
            ({isInView}) =>
            <RevealPRight hide={!isInView}>
            </RevealPRight>
          }
            </WheninView>
            <StyleText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </StyleText>
            <WheninView>
          {
              ({isInView}) =>
              <RevealPLeft hide={!isInView}>
              </RevealPLeft>
            }
        </WheninView>
      </div>
        </section>
    );
  }
}

export default Home
