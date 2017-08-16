import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Entrance.css'

class Entrance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent1: false,
      showContent2: false,
      showContent3: false
    }
    this.showContent1 = this.showContent1.bind(this)
    this.showContent2= this.showContent2.bind(this)
    this.showContent3 = this.showContent3.bind(this)
  }

  showContent1() {
         this.setState({showContent1: true})
     }
  showContent2() {
        this.setState({showContent2: true})
        }
  showContent3() {
        this.setState({showContent3: true})
           }

  render() {

    let content
    let entrance
    let btnEntrance = <button onClick={this.showContent1.bind(this)}>btn1</button>

    if (this.state.showContent1) {
      btnEntrance =
      <div className='btnEntrance2'>
        <p>on this</p>
      <button onClick={this.showContent2.bind(this)}>btn2</button>
    </div>
    }
    if (this.state.showContent2) {
      btnEntrance =
      <div className='btnEntrance3'>
        <p>and on this</p>
      <button onClick={this.showContent3.bind(this)}>btn3</button>
    </div>
    }

    if (this.state.showContent3) {
      // content = <Header />
    } else  {
      entrance = <div className='entrance-container'>
        <p>Hello! My name Artem, I'm Frontend developer(I think so). And in this site/web page/web application (call it what you want),
        I will very rarely and very lazily add/show (not sure) what I'm learning\can (nothing).
      </p>
        {btnEntrance}
      </div>

    }
    return (
      <div>
       {entrance}
        {content}
        </div>
    );
  }
}

export default Entrance
