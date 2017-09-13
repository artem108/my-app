import React, { Component } from 'react'
import './TalkMe.css'
import Questions from './Questions';
import Answers from './Answers'
import UUU from './UUUneuralNetwork/UUU'

class TalkMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      play: false
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }
  Play() {
      this.setState({ play: !this.state.play});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
    });
  }

  render() {
    let player
    if (this.state.play) {
      player = <UUU />
    }
    return (
      <section className='talkMe-container'>
        <div className='dialog-item'>
          <Answers items={this.state.items} />
          <Questions  items={this.state.items} />
          {player}
        </div>
          <div className='controller-dialog '>
          <form onSubmit={this.onSubmit}>
         <input value={this.state.term} onChange={this.onChange} className="dialog-input-send"/>
         <button className='dialog-btn-send'><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
       </form>
       <div>
         <button className='dialog-btn-send' onClick={this.Play.bind(this)}>Play</button>
       </div>
        </div>
        </section>
    );
  }
}

export default TalkMe
