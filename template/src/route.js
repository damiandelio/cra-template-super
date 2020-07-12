import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
// Pages
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const router = (
   <Router>
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route component={NotFoundPage} />
      </Switch>
   </Router>
)

export default router
