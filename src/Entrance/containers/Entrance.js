import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class List extends Component {

showList() {
  return this.props.entrance.map((example) => {
    return (
      <li key={example.id}>{example.cur}</li>
    )
  })
}

  render() {
    return (
      <div>
        <ul>
          {this.showList()}
        </ul>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {

    entrance:state.entrance
  }

}

export default connect (mapStateToProps)(List)
