import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2';

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
      <div className='radar-graph'>
        <Radar data={data} />
        </div>
    );
  }
}

export default AboutMe
