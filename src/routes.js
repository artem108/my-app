import React from 'react'
import {IndexRoute, Router, Route, hashHistory } from 'react-router'
import App from './App'
import HomeContainers from './Main/containers/Home'
import MySkillsContainers from './Main/containers/MySkills'
import Talk from './Main/components/Talk'
import News from './Main/components/News'
import Dialog from './Main/components/Dialog'


export default (
<Router history={hashHistory}>
<Route path='/' component={App}>
  <IndexRoute path='/'component={HomeContainers}/>
  <Route path='/skills' component={MySkillsContainers}></Route>
  <Route path='/aboutMe' component={Dialog}></Route>
  <Route path='/news' component={News}></Route>
</Route>
</Router>
);
