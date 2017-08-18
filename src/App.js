import React, { Component } from 'react'
import {  Switch, Route } from 'react-router-dom'
import Menu from './pages/Menu'
import Preperso from './pages/Preperso'
import Infocard from './pages/Infocard'
import Keymanage from './pages/Keymanage'
import Managepin from './pages/Managepin'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/Managepin" component={Managepin} />
          <Route path="/Keymanage" component={Keymanage} />
          <Route path="/Infocard" component={Infocard} />
          <Route path="/Preperso" component={Preperso} />
        </Switch>
      </div>
    )
  }
}

export default App
