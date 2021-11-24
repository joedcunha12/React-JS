import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Customer from './Customer'
import Product from './Product'
import Notfound from './Notfound'

const routing = (  
  <Router> 
    <div>
      <ul>
      <button type="button" >
      <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        </button>
        <button type="button">
        <li>
          <NavLink exact activeClassName="active" to="/Customer">
            Customer
          </NavLink>
        </li>
        </button>
        <button type="button">
        <li>
          <NavLink exact activeClassName="active" to="/Product">
            Product
          </NavLink>
        </li>
        </button>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Customer" component={Customer} />
        <Route path="/Product" component={Product} />
        <Route component={Notfound} />
        </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))




