import React, { Component } from 'react'
import '../../css/Talk.css'
import { ChillImg, Text, H2 }   from './../../styled/Talk.style'
import { Title }  from './../../styled/Home.style'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Dialog extends Component {
  constructor(props) {
    super(props)
	   this.state = {
       dialog: ['Answer','Question?' ]
     }
  }
  addItem() {
    this.state.dialog.push('Answer')
    this.state.dialog.push('Question?')
    this.setState({dialog: this.state.dialog})
  }

  render() {
    const arrDialog = this.state.dialog

    const listAnswers = arrDialog.map((item, index) => {
        if (item === 'Answer') {
            return <li key={index} style={{textAlign: 'left', color: 'black', backgroundColor:'red' ,width: '100%'}} onClick={this.addItem.bind(this)}><H2>{item}</H2></li>;
        } else {
            return <li key={index} style={{textAlign: 'left', color: 'black', width: '100%', cursor: 'pointer'}}
                    onClick={this.addItem.bind(this)}>
                    <H2>{item}</H2></li>;
        }
    })

    let lastQuestion = listAnswers[listAnswers.length - 1].props
    const lastQuestStyle = lastQuestion.style
    console.log(lastQuestion.children);
    lastQuestStyle.color = 'red'

    return (
      <section style={{width: '80%'}}>
           <Title>About me</Title>
          <ReactCSSTransitionGroup
              component="ul"
              transitionName="slide"
              transitionEnterTimeout={5000}
              transitionLeaveTimeout={3000}>
              {listAnswers}
            </ReactCSSTransitionGroup>
          <PreloaderIcon
              type={ICON_TYPE.PUFF}
              size={50}
              strokeWidth={15} // min: 1, max: 50
              strokeColor="red"
              duration={800}
              style={{float: 'right'}}
          />
      </section>
    );
  }
}

export default Dialog
