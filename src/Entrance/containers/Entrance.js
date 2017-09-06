import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class List extends Component {

showList() {
  return this.props.examples.map((example) => {
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

    examples:state.examples
  }

}

export default connect (mapStateToProps)(List)
