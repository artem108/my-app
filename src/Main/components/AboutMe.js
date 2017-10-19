import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2';
import '../../css/AbouteMe.css'
import { RevealPRight, RevealPLeft }  from './Home.style'
import WheninView from './WheninView'

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
    const style = {
      color: 'red',
      fontSize: '3em'
    }
    const p ={
      fontSize: '2em'
    }
    const styleText= {
      fontSize: '2em',
      textAlign: 'left'
    }
    const radarStyle = {
      width:'50%',
      float:'left'
    }
    return (
      <section>
        <h2 style={style}>My skills</h2>
      <section style={radarStyle}>
        <Radar data={data} />
        </section>

        <WheninView style={radarStyle}>
          {
              ({isInView}) =>
              <RevealPLeft hide={!isInView}>
              </RevealPLeft>
            }
              </WheninView>
              <p style={styleText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
