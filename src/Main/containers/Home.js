import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'
import * as selectHome from '../../actions/index'

class HomeContainers extends Component {

  componentWillMount() {
    const {selectHome} = this.props.selectHome
    const home = this.props.home
    selectHome(home)
  }
  render() {
    const {
      text,
      title
    } = this.props.home

    const { selectHome } = this.props.selectHome

    const styleTextHome = {
      borderLeft:'5px solid black'
    }

    return (
    <Home
      text={text}
      title={title}
      styleTextHome={styleTextHome}
    />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    home:state.home
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  selectHome: bindActionCreators(selectHome, dispatch)
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(HomeContainers)
