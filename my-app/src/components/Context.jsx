import React, { Component } from 'react'
import ContextUser from '../context/ContextUser'
import { ContextStudent } from '../context/ContextStudent'

class User extends Component {
  state = {
    user: {
      name: 'Lý Văn Hiếu',
      age: 23
    }
  }
  render() {
    return (
      <>
        <ContextUser.Consumer>
          {contextUser => (
            <div>
              <p style={{color: 'red'}}>{contextUser.name}, {contextUser.age} tuổi</p>
              <button onClick={contextUser.increment}>Tăng tuổi user ở context (ở children)</button>
            </div>
          )}
        </ContextUser.Consumer>
        <ContextStudent.Consumer>
          {ContextStudent => (
            <div>
              <p style={{color: 'green'}}>{ContextStudent.name}, {ContextStudent.age} tuổi</p>
            </div>
          )}
        </ContextStudent.Consumer>
      </>
    )
  }
}

export default User
