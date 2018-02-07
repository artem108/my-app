import React from 'react'
import {IndexRoute, Router, Route, hashHistory } from 'react-router'
import App from './App'
import HomeContainers from './Main/containers/Home'
import MySkillsContainers from './Main/containers/MySkills'
import DialogContainers from './Main/containers/Dialog'
import Movie from './Main/containers/Movie'
import Brain from './Main/components/Brain'
// import Talk from './Main/components/Talk'
// import News from './Main/components/News'


export default (
<Router history={hashHistory}>
<Route path='/' component={App}>
  <IndexRoute path='/'component={HomeContainers}/>
  <Route path='/skills' component={MySkillsContainers}></Route>
  <Route path='/aboutMe' component={DialogContainers}></Route>
  <Route path='/brain' component={Brain}></Route>
  <Route path='/movies' component={Movie}></Route>
</Route>
</Router>
);
