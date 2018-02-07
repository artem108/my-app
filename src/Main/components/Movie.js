import React, { Component } from 'react'

class MovieComponent extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
componentWillMount(){
  const baseUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=[fcfe177a]&s=star&y=&r=json&plot=short'
  fetch(baseUrl)
    .then(response => {
      console.log(response.body);
    })
}
render() {

    return (
      <h1>Hello</h1>
    );
  }
}

export default MovieComponent
