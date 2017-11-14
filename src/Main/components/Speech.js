import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import { VoicePlayer } from 'react-voice-components'
import '../../css/Talk.css'

let options = {
  autoStart: true
}


class Dictaphone extends Component {
  constructor(props) {
    super(props)
     this.state = {
       texts: 'Hello my name artem, i am create this web page and this HA HA HA HA'
     }
  }

componentDidUpdate() {
    if (this.props.transcript === "Hello") {
    this.state.texts = "hello artem nice day"
    this.setState({texts: this.state.texts})
    console.log(this.state.texts);
    return (
      <VoicePlayer
        play
        text={this.state.texts}
      />
    )
  }

}
  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition
        } = this.props

    options.autoStart = true

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    if (transcript) {

    }
    return (
      <div>
        it will be cool soon ...
        <button onClick={resetTranscript}>Reset</button>
        <section className='face'>
        </section>
        <span style={{fontSize: '2em'}}>{transcript}</span>
        <VoicePlayer
          play
          text={this.state.texts}
        />
      </div>
    )
  }
}

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}
Dictaphone.propTypes = propTypes

export default SpeechRecognition (options)(Dictaphone)
