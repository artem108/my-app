import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2';
import { RevealPRight, RevealPLeft, MainText, Title }  from './../../styled/Home.style'
import WheninView from './WheninView'
import '../../css/Talk.css'
import { Texts, RadarStyle }  from './../../styled/AbouteMe.style'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class MySkills extends Component {

  render() {
    const {
      data,
      text,
      title
    } = this.props
    const skillsText = text[0].technologies

    const listAnswers = skillsText.map((item, index) => {
    return <li key={index} style={{marginBottom: '10px'}}> - {item}</li>;
  })
console.log(listAnswers);

    return (
      <section>
        <Title>{title}</Title>
        <section style={{display: 'flex'}}>
        <RadarStyle>
        <ReactCSSTransitionGroup
            component="section"
            transitionName={'answer'}
            transitionEnterTimeout={4000}
            transitionLeaveTimeout={4000}>
            <Radar data={data} width="600" height="550"/>
          </ReactCSSTransitionGroup>
        </RadarStyle>
            <WheninView>
              {
                  ({isInView}) =>
                  <RevealPLeft hide={!isInView}>
                  </RevealPLeft>
                }
              </WheninView>
              <Texts>
                <ul>
                  <h2 style={{color: 'red'}}>Technical skills:</h2>
                {listAnswers}
              </ul>
              </Texts>
              <WheninView>
            {
                ({isInView}) =>
                <RevealPRight hide={!isInView}>
                </RevealPRight>
              }
        </WheninView>
      </section>
    </section>
    );
  }
}

export default MySkills
