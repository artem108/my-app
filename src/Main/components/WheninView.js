import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

class WheninView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isInView: false
    }
    this.onEnter = this.onEnter.bind(this)
  }
  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({isInView: true})
    }
  }

  render() {
    return (
      <section>
        <Waypoint onEnter={this.onEnter}></Waypoint>
        {this.props.children({ isInView: this.state.isInView })}
        </section>
    );
  }
}

export default WheninView
