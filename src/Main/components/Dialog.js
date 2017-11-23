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
    // this.state.dialog.push('Answer')
    // this.state.dialog.push('Question?')
    // console.log(this.state.dialog);
    this.setState({dialog: this.state.dialog})
  }

  render() {
    const {
      title,
      texts
    } = this.props

    const arrDialog = this.state.dialog

    const listAnswers = arrDialog.map((item, index) => {
      let arrItem = texts[index]

        if (item === 'Answer' || item === 'Hello, my name Artem'
            || item === 'Tehnical skills it good, but let me show some info aboye me'
            || item === 'Yes song1, song2, song3'
            || item === 'This') {

              // console.log(texts[index][texts[index].length-1]);
              this.state.dialog.push(texts[index])
            return (
              <li key={index} style={{textAlign: 'left', color: 'black', width: '100%'}} onClick={this.addItem.bind(this)}><H2>{arrDialog[arrDialog.length-1]}</H2></li>
            )
        } else {
            this.state.dialog.push(texts[index])
            return (
                <li key={index} style={{textAlign: 'right', color: 'black', width: '100%', cursor: 'pointer'}}
                    onClick={this.addItem.bind(this)}>
                    <H2>{index}{arrDialog[arrDialog.length-1]}</H2></li>
        )
      }
    })

    const lastQuestion = listAnswers[listAnswers.length - 1].props
    const lastQuestStyle = lastQuestion.style

    lastQuestStyle.color = 'red'

    return (
      <section style={{width: '80%'}}>
           <Title>{title}</Title>
          <ReactCSSTransitionGroup
              component="ul"
              transitionName={'answer'}
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
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
