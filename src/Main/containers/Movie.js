import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MovieComponent from '../components/Movie'
import * as selectAbouteMe from '../../actions/index'

class Movie extends Component {
  render() {
    return (
    <MovieComponent />
    );
  }
}
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Movie)
