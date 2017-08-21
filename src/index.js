import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './resource/css/hexagons.css'
import './resource/css/style.css'

ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
