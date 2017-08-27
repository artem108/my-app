import React, { Component } from 'react'
import './TalkMe.css'
import List from './List';

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

          <List items={this.state.items} />

        </div>
          <div className='controller-dialog '>
          <form className="App" onSubmit={this.onSubmit}>
         <input value={this.state.term} onChange={this.onChange} />
         <button>Submit</button>
       </form>
        </div>
        </section>
    );
  }
}

export default TalkMe
