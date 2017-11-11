import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2';
import { RevealPRight, RevealPLeft, MainText, Title }  from './../../styled/Home.style'
import WheninView from './WheninView'
import '../../css/Talk.css'
import { Text, RadarStyle }  from './../../styled/AbouteMe.style'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class MySkills extends Component {

  render() {
    const {
      data,
      text,
      title
    } = this.props
    return (
      <section>
        <Title>{title}</Title>
        <ReactCSSTransitionGroup
            component="section"
            transitionName={'answer'}
            transitionEnterTimeout={4000}
            transitionLeaveTimeout={4000}>
          <RadarStyle>
            <Radar data={data} />
            </RadarStyle>
          </ReactCSSTransitionGroup>
            <WheninView>
              {
                  ({isInView}) =>
                  <RevealPLeft hide={!isInView}>
                  </RevealPLeft>
                }
              </WheninView>
              <Text>
                {text}
              </Text>
              <WheninView>
            {
                ({isInView}) =>
                <RevealPRight hide={!isInView}>
                </RevealPRight>
              }
        </WheninView>
      </section>

    );
  }
}

export default MySkills
