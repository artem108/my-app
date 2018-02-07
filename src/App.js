import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import NavigationBar from './Main/components/NavigationBar'
import EntranceComponent from './Entrance/containers/Entrance'
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
  constructor(props) {
    super(props)
    this.state = {
      login: false
    }
    this.userLoged = this.userLoged.bind(this)
  }
  componentWillMount() {
    const { login } = this.props.login
  }

  userLoged() {
    this.setState({login: true})
  }
  render() {
      const { login } = this.props.login
      let entrance  = <h1 style={{color: 'red'}}>404 Page not found ¯\_(ツ)_/¯ </h1>
      if (this.state.login || login) {

        entrance =
        <section>
        <SocialLinks>
          <SocialDiv>
            <a target="_blank" href='https://www.facebook.com/profile.php?id=100005119098321' style={linkStyle}><i className="fa fa-facebook"></i></a>
            <a target="_blank" href='https://www.linkedin.com/in/artem-arshanyi-452106132/' style={linkStyle}><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href='https://github.com/artem108' style={linkStyle}><i className="fa fa-github"></i></a>
          </SocialDiv>
        </SocialLinks>
     <NavigationBar />
     {this.props.children}
   </section>
   } else  {

     entrance = <EntranceComponent
                   userLoged={this.userLog}
                />
   }

    return (
      <div className="App">
       {entrance}
       </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login:state.login
  }
}

export default connect (mapStateToProps)(App)
