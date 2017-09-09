import React, { Component } from 'react'

class NameUser extends Component {

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
      <div className='btnEntrance2'>
         <p>Enter your name</p>
        <form onSubmit={this.onSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button></button>
     </form>
     <p>on this</p>
      <button onClick={this.showContent2.bind(this)}>btn2</button>
    </div>
    );
  }
}

export default NameUser
