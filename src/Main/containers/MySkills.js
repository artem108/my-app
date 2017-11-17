import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MySkills from '../components/MySkills'
import * as selectMySkills from '../../actions/index'

class MySkillsContainers extends Component {

  componentWillMount() {
    const {selectMySkills} = this.props.selectMySkills
    const skills = this.props.skills
    selectMySkills(skills)
  }
  render() {
    const {
      title,
      text
    } = this.props.skills

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
      text={text}
      title={title}
      data={data}
    />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    skills:state.skills
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  selectMySkills: bindActionCreators(selectMySkills, dispatch)
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(MySkillsContainers)
