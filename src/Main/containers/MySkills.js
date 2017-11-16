import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectHome } from '../../actions/index'
import MySkills from '../components/MySkills'

class MySkillsContainers extends Component {
  render() {
    const data = {
      labels: ['JS', 'HTML5', 'CSS3', 'REACT.JS', 'NODE.JS' ],
      datasets: [
        {
          label: 'max',
          data: [10, 10, 10, 10, 10],
          fillColor: 'rgba(250, 250, 250, 1)',
          strokeColor: 'rgba(200, 200, 200, 1)',
          pointBackgroundColor: 'rgb(255, 0, 0)',
          pointBorderColor: 'rgb(255, 0, 0)',
          pointHoverBackgroundColor: 'rgb(255, 0, 0)',
          pointHoverBorderColor: 'rgb(255, 0, 0)',


        },
        {
          label: 'min',
          data:  [6, 9, 8, 4, 1],
          fillColor: 'rgba(255,000,000, 1)',
          strokeColor: 'rgba(0, 0, 0, 1)',
          pointBackgroundColor: 'rgb(255, 0, 0)',
          pointBorderColor: 'rgb(255, 0, 0)',
          pointHoverBackgroundColor: 'rgb(255, 0, 0)',
          pointHoverBorderColor: 'rgb(255, 0, 0)',


        }
      ]
    }

    return (
    <MySkills
      text={this.props.mySkills.map((text) => text.text)}
      title={this.props.mySkills.map((title) => title.title)}
      data={data}
    />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mySkills:state.mySkillsReducer
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({selectHome: selectHome}, dispatch)
}
export default connect (mapStateToProps, matchDispatchToProps)(MySkillsContainers)
