import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import '../css/Entrance.css'

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

           componentDidMount() {
             setTimeout(() =>
               <div>
                 <PreloaderIcon
                   type={ICON_TYPE.OVAL}
                   size={32}
                   strokeWidth={8} // min: 1, max: 50
                   strokeColor="#F0AD4E"
                   duration={800}
                 />
               </div>

             , 1500);
           }
  render() {

    let content
    let entrance
    let btnEntrance =

    <div className='btnEntrance1' style={{width: '300px'}}>
      <p>For login press on the button</p><br/>
    <button onClick={this.showContent1.bind(this)}>Button</button>
  </div>

    if (this.state.showContent1) {
      btnEntrance =
      <div className='btnEntrance2' style={{width: '50px', marginTop: '300px'}}>
        <p>On this</p>
      <button onClick={this.showContent2.bind(this)}>Button</button>
    </div>
    }
    if (this.state.showContent2) {
      btnEntrance =
      <div className='btnEntrance3' style={{width: '200px', marginLeft: '45%'}}>
        <p>And on this</p>
      <button onClick={this.showContent3.bind(this)}>Button</button>
    </div>
    }

    return (
      <section>
        {btnEntrance}
      </section>
    );
  }
}

export default Entrance
