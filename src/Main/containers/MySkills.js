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
