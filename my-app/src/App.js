import React from 'react'

import Home from './pages/Home'
import Login from './pages/Login'
import PostDetail from './pages/PostDetail'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Link to="/">go to home</Link>
        <Link to="/login">go to login</Link>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/posts/:id">
            <PostDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
