import React from 'react'
import {IndexRoute, Router, Route, hashHistory } from 'react-router'
import App from './App'
import Home from './Main/components/Home'
import AboutMe from './Main/components/AboutMe'
import Talk from './Main/components/Talk'
import News from './Main/components/News'



export default (
<Router history={hashHistory}>
<Route path='/' component={App}>
  <IndexRoute path='/'component={Home}/>
  <Route path='/skills' component={AboutMe}></Route>
  <Route path='/aboutME' component={Talk}></Route>
  <Route path='/news' component={News}></Route>
</Route>
</Router>
);