import React from 'react'
import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs'
import { getChartData } from '../helpers'

const InfoModal = ({ toggleModal, item, info }) => {
  return (
    <section className="info-modal">
      <header>
        <h1>{item.name}</h1>
        <Link to='/' onClick={this.toggleModal}>X</Link>
      </header>
      <Line data={getChartData(info)} height="400" width='1000' />
    </section>
  )
}

export default InfoModal
