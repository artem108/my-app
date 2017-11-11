import React, { Component } from 'react'
import styled from 'styled-components'
import '../../css/Home.css'
import { RevealPRight, RevealPLeft, Title, HomeImg, ImageText, StyleText, SocialLinks, SocialDiv }  from './../../styled/Home.style'
import WheninView from './WheninView'

class Home extends Component {
  render() {
    const {
      text,
      title,
      styleTextHome
    } = this.props
    console.log('title',title);
    return (
      <section>
          <Title>{title}</Title>
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
          {text}
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
