import React, { Fragment } from 'react'
import Header from './header'
import Favorites from './favorites'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {
  return (
    <div className="content">
      <Header />
      <Favorites />
    </div>
  )
}

export default App
