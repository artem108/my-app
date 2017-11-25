import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
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

  speak(voice) {
const synth = window.speechSynthesis;

const textForVoice = voice
const utterThis = new SpeechSynthesisUtterance(voice);

  synth.speak(utterThis)
  // this.props.resetTranscript()
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
    let btn = null
    if (transcript) {

      btn = <button onClick={resetTranscript} style={{marginTop: '15px'}}>Reset</button>

      if (transcript == "Hello" || transcript == "Привет") {
        this.speak("Hello my name Artem")
      } else if (transcript == "How are you" || transcript == "Как дела") {
        this.speak("Everything is fine")
      }
      else {
        this.speak("Sorry dont uderstand you")
      }
    }

    return (
      <div>
        It will be soon ...<br />
        But for now you can say "Hello" or ask "How are you"<br />
        {/* <section className='face'>
        </section> */}
        <div style={{fontSize: '2em'}} style={{marginTop: '30px'}}>{transcript}</div> <br/>
        {btn}
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
