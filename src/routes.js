import React from 'react'
import {IndexRoute, Router, Route, hashHistory } from 'react-router'
import App from './App'
import Home from './Main/components/Home'
import AboutMe from './Main/components/AboutMe'
import TalkMe from './Main/components/TalkMe'
import News from './Main/components/News'



export default (
<Router history={hashHistory}>
<Route path='/' component={App}>
  <IndexRoute component={Home}/>
  <Route path='/aboute' component={AboutMe}></Route>
  <Route path='/talk' component={TalkMe}></Route>
  <Route path='/news' component={News}></Route>
</Route>
</Router>
);
