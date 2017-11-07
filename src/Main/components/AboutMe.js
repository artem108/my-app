import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2';
import { RevealPRight, RevealPLeft, MainText, Title }  from './../../styled/Home.style'
import WheninView from './WheninView'
import { Text, RadarStyle }  from './../../styled/AbouteMe.style'

class AboutMe extends Component {

  render() {
    const data = {
      labels: ['JS', 'HTML5', 'CSS3', 'REACT.JS', 'NODE.JS' ],
      datasets: [
        {
          label: 'max',
          data: [10, 10, 10, 10, 10]
        },
        {
          label: 'min',
          data:  [6, 9, 8, 4, 1],
          backgroundColor: 'rgba(104,104,104,1)',
          borderColor: 'rgba(104,104,104,1)',
          pointBackgroundColor: 'rgba(104,104,104,1)',
          pointBorderColor: 'rgba(104,104,104,1)',
          pointHoverBackgroundColor: 'rgba(104,104,104,1)',
          pointHoverBorderColor: 'rgba(104,104,104,1)',
        }
      ]
    }
    return (
      <section>
        <Title>My skills</Title>
      <RadarStyle>
        <Radar data={data} />
        </RadarStyle>
        <WheninView>
          {
              ({isInView}) =>
              <RevealPLeft hide={!isInView}>
              </RevealPLeft>
            }
              </WheninView>
              <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

export default AboutMe
