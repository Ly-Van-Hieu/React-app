import React, { Component } from 'react'
import { ContextStudent } from '../context/ContextStudent'
import Context from './Context'

class Form extends Component {
  state = {
    student: {
      name: 'Nguyễn Văn A',
      age: 15
    }
  }

  increment = () => {
    this.setState({
      student: {
        ...this.state.student,
        age: this.state.student.age + 1
      }
    })
  }

  render() {
    return (
      <ContextStudent.Provider value={this.state.student}>
        <Context />
        <button onClick={this.increment}>Tăng tuổi student ở Form (ở parent)</button>
      </ContextStudent.Provider>
    )
  }
}

export default Form
