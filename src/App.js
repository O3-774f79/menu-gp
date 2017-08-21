import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from './pages/menu/Menu'
import Preperso from './pages/Preperso'
import Infocard from './pages/Infocard'
import KeyManage from './pages/Keymanage'
import PinManage from './pages/ManageinWrapper'
import LifeCycle from './pages/LifeCycle'
import AppManage from './pages/AppManagement'
import CardControl from './pages/CardControl'
import Report from './pages/Report'
import CustomerSupport from './pages/CustomerSupport'
import Layout from './components/Layout'
class App extends Component {
  render() {
    return <div className="well">
        <Switch>
          <Route exact path="/" component={Menu} />
          <Layout>
            <Route path="/pin-management" component={PinManage} />
            <Route path="/key-management" component={KeyManage} />
            <Route path="/info-card" component={Infocard} />
            <Route path="/pre-perso" component={Preperso} />
            <Route path="life-cycle-management" component={LifeCycle} />
            <Route path="app-management" component={AppManage} />
            <Route path="card-system" component={CardControl} />
            <Route path="report-system" component={Report} />
            <Route path="customer-support" component={CustomerSupport} />
          </Layout>
        </Switch>
      </div>
  }
}

export default App
