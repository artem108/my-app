import React, { Component } from 'react'
import '../../css/Talk.css'
import { ChillImg, Text, H2 }   from './../../styled/Talk.style'
import { Title }  from './../../styled/Home.style'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';


class Dialog extends Component {
  constructor(props) {
    super(props)
	   this.state = {
       answers: ['Answer'],
       questions: ['Question?']
     }
  }
  addItem() {
    this.state.answers.push('Answer')
    this.setState({answers: this.state.answers})
    this.state.questions.push('Question')
    this.setState({questions: this.state.questions})
  }

  render() {
    const listAnswers = this.state.answers.map((item, index) => {
          return <li key={index} style={{float:'left', paddingTop: '5px', width: '100%', textAlign: 'left'}}>{item}</li>;
        })
    const listQuestions = this.state.questions.map((item, index) => {
          return <li key={index} onClick={this.addItem.bind(this)} style={{float: 'right', textAlign: 'right', paddingTop: '5px', width: '100%'}}>{item}</li>;
        })

    return (
      <section style={{width: '400px'}}>
       <h1>hello</h1>
          {listAnswers}
          {listQuestions}
      </section>
    );
  }
}

export default Dialog
