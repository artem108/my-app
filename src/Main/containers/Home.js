import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectHome } from '../../actions/index'

class HomeContainers extends Component {

  showText() {
    return this.props.text.map((tex) => {
      return (
        <h2 onClick={() => this.props.selectHome(tex)}key={tex.id}>{tex.id}</h2>
      )
    })
  }
  render() {
    return (
      <div>{this.showText()}</div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    text:state.text
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({selectHome: selectHome}, dispatch)
}
export default connect (mapStateToProps, matchDispatchToProps)(HomeContainers)
