import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Entrance from '../components/Entrance'
import * as loginUser from '../../actions/index'
import  { userLoged } from '../../App'

class EntranceComponent extends Component {
  constructor(props) {
    super(props)
    this.logined = this.logined.bind(this)
  }

componentWillMount() {
    localStorage.setItem('login', false)
}

logined() {
  localStorage.setItem('login', true)

  const  { loginUser } = this.props.loginUser
  const logined = this.props.login
  // const { userLog } = this.props

  loginUser(logined)
  console.log(this.props.userLog);

  this.props.userLog()
}

  render() {
      const { userLog } = this.props
    return (
      <Entrance
        logined={this.logined}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login:state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  loginUser: bindActionCreators(loginUser, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(EntranceComponent)
