import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import AccountsPage from "../../AccountsPage"
import NotFound from "./NotFound"

const Routing = () => (
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component={ AccountsPage }/>
            <Route component={ NotFound }/>
        </Switch>
    </Router>
)

export default Routing