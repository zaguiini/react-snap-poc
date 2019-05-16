import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './index.css'

import WeatherSearch from './WeatherSearch/WeatherSearch'
import About from './About/About'

function RoutesNavigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Weather search</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

function Main() {
  return (
    <Router>
      <RoutesNavigation />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={WeatherSearch} />
    </Router>
  )
}

export default Main
