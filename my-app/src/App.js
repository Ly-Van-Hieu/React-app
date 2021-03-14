import React, { Component } from 'react'
import ContextUser from './context/ContextUser'
import Form from './components/Form'

class App extends Component {
  state = {
    user: {
      name: 'Lý Văn Hiếu',
      age: 23
    }
  }

  increment = () => {
    this.setState({
      user: {
        ...this.state.user,
        age: this.state.user.age + 1
      }
    })
  }
  
  render() {
    return (
      <ContextUser.Provider value={{...this.state.user, increment: this.increment}}>
        <Form />
      </ContextUser.Provider>
    )
  }
}

export default App
