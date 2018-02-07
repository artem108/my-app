import React, { Component } from 'react'
import Dictaphone from "./Speech"
import { getRandom } from '../../helpers.js'

class Brain extends Component {
  constructor(props) {
    super(props)
     this.state = {value: 1, vinner: 'false' }
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const res = getRandom(this.state.value)
    console.log(res);
    this.setState({vinner: res})
    event.preventDefault();
  }
  render() {

    const numbers = []
    let showResult = ''

    if (this.state.vinnner) {
      showResult = 'You win'
    }

    for (var i = 0; i < 11; i++) {
      numbers.push(
        <button style={{marginLeft: '10px', width: '20px'}} onClick={this.chooseNumber}>{i}</button>
      )
    }

    const first = (one) => {
      return (two) => {
        return (three) => {
          return one + two + three
        }
      }
    }
    const firstcall = first(1)
    const trwocall = firstcall(1)

    const obj = {
      fun: (str) => { return str},
      name: 'dfcf'
    }
    console.log(obj.fun('hi'), obj.name);
    return (
      <section>
        <h1>Choose your chance</h1>
        <form onSubmit={this.handleSubmit}>
         <input type="number" max={10} value={this.state.value} onChange={this.handleChange} style={{marginLeft: '10px', width: '40px'}} />
       <input type="submit" value="Choose" style={{marginLeft: '10px',}}/>
       <h1>rfevc{this.state.vinnner}</h1>
     </form>
     <section className="flex-container">
       <section className="flex-box">

       </section>
       <section className="flex-box">

       </section>
       <section className="flex-box">

       </section>
     </section>
      </section>

    );
  }
}

export default Brain
