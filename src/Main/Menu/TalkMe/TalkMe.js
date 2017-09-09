import React, { Component } from 'react'
import './TalkMe.css'
import Questions from './Questions';
import Answers from './Answers'

class TalkMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {

    return (
      <section className='talkMe-container'>
        <div className='dialog-item'>
          <Answers items={this.state.items} />
          <Questions  items={this.state.items} />
        </div>
          <div className='controller-dialog '>
          <form onSubmit={this.onSubmit}>
         <input value={this.state.term} onChange={this.onChange} className="dialog-input-send"/>
         <button className='dialog-btn-send'><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
       </form>
        </div>
        </section>
    );
  }
}

export default TalkMe
