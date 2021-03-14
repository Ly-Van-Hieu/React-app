import React from 'react'

import store from './redux/store'
import { Provider } from 'react-redux'

import { router } from './router'

import BackgroundApp from './components/BackgroundApp'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/">go to home</Link>
        <Link to="/login">go to login</Link>

        <Switch>
          {
            router.map((CurrentRoute, index) => {
              return (
                <Route path={CurrentRoute.path} exact={CurrentRoute.exact} key={index}>
                  {CurrentRoute.Component}
                </Route>
              )
            })
          }
        </Switch>

        <BackgroundApp />
      </BrowserRouter>

    </Provider>
  )
}

export default App
