import React, { Component } from 'react'
import './App.css'
import NavigationBar from './Main/components/NavigationBar'
import { SocialLinks, SocialDiv }  from './styled/Home.style'

const linkStyle = {
  listStyle: 'none',
  textDecoration: 'none',
  color:'red',
  margin: '20px',
  transform: 'rotate(90deg)',
  transformOrigin: 'left top'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialLinks>
          <SocialDiv>
          {/* <p style={{}}>CONTACT ME</p> */}
          <a target="_blank" href='https://www.facebook.com/profile.php?id=100005119098321' style={linkStyle}><i className="fa fa-facebook"></i></a>
          <a target="_blank" href='https://www.linkedin.com/in/artem-arshanyi-452106132/' style={linkStyle}><i className="fa fa-linkedin"></i></a>
          <a target="_blank" href='https://github.com/artem108' style={linkStyle}><i className="fa fa-github"></i></a>
        </SocialDiv>
        </SocialLinks>
        <NavigationBar />
        {this.props.children}
        </div>
    );
  }
}

export default App
