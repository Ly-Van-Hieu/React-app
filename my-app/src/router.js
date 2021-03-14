import Home from './pages/Home'
import Login from './pages/Login'
import PostDetail from './pages/PostDetail'
import BasicAuth from './auth/BasicAuth'

export const router = [
  {
    path: '/login',
    exact: false,
    Component: <Login routeName="Login" />
  },
  {
    path: '/',
    exact: true,
    Component: <BasicAuth Component={Home} routeName="Home" />
  },
  {
    path: '/posts/:id',
    exact: true,
    Component: <BasicAuth Component={PostDetail} routeName="PostDetail" />
  }
]
