import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2';



class GraphSckills extends Component {

  render() {
    const data = {
      labels: ['JS', 'HTML5', 'CSS3', 'REACT.JS', 'NODE.JS' ],
      datasets: [
        {
          label: 'max',
          data: [100, 100, 100, 100, 100],
          backgroundColor: 'rgba(26, 179, 148, 1)',
          borderColor: 'rgba(26, 179, 148, 1))',
          pointBackgroundColor: 'rgba(26, 179, 148, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(26, 179, 148, 1)',
        },
        {
          label: 'min',
          data:  [60, 90, 80, 45, 10],
          backgroundColor: 'rgba(26, 179, 148, 1)',
          borderColor: 'rgba(26, 179, 148, 1)',
          pointBackgroundColor: 'rgba(26, 179, 148, 1)',
          pointBorderColor: 'rgba(26, 179, 148, 1)',
          pointHoverBackgroundColor: 'rgba(26, 179, 148, 1)',
          pointHoverBorderColor: 'rgba(26, 179, 148, 1)',
        }
      ]
    }
    return (
      <div className='radar-graph'>
        <Radar data={data}  />
        </div>
    );
  }
}

export default GraphSckills
