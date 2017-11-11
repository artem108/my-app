import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectHome } from '../../actions/index'
import Home from '../components/Home'

class HomeContainers extends Component {

  render() {
    const styleTextHome = {
      borderLeft:'5px solid black'
    }
    
    return (
    <Home
      text={this.props.home.map((text) => text.text)}
      title={this.props.home.map((title) => title.title)}
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

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({selectHome: selectHome}, dispatch)
}
export default connect (mapStateToProps, matchDispatchToProps)(HomeContainers)
