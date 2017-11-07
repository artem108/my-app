import React from 'react'
import {IndexRoute, Router, Route, hashHistory } from 'react-router'
import App from './App'
import Home from './Main/components/Home'
import AboutMe from './Main/components/AboutMe'
import Talk from './Main/components/Talk'
import News from './Main/components/News'
import Dialog from './Main/components/Dialog'


export default (
<Router history={hashHistory}>
<Route path='/' component={App}>
  <IndexRoute path='/'component={Home}/>
  <Route path='/skills' component={AboutMe}></Route>
  <Route path='/aboutME' component={Dialog}></Route>
  <Route path='/news' component={News}></Route>
</Route>
</Router>
);
