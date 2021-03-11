import Home from './pages/Home'
import Login from './pages/Login'
import PostDetail from './pages/PostDetail'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>

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
