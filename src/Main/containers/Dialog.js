import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dialog from '../components/Dialog'
import * as selectAbouteMe from '../../actions/index'

class DialogContainers extends Component {

  componentWillMount() {
    const { selectAbouteMe } = this.props.selectAbouteMe
    // const home = this.props.home
    selectAbouteMe(this.props.aboute)
  }
  render() {
    const {
      title,
      answer_question
    } = this.props.aboute

    return (
    <Dialog
      title={title}
      texts={answer_question}
    />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    aboute:state.aboute
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  selectAbouteMe: bindActionCreators(selectAbouteMe, dispatch)
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(DialogContainers)
