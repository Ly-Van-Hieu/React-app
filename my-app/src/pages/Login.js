import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setUser } from './../redux/state/user'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChangePassword = event => {
    setPassword(event.target.value)
  }

  const submit = () => {
    // lấy username và password

    const id = userName
    if (!id) {
      return
    }

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        console.log('---response:', response)
        const user = response.data;

        dispatch(
          setUser(user)
        )

        history.push('/')
      })
      .catch(error => {
        alert('hãy nhập lại')
      })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={event => setUserName(event.target.value)}
            />
          </div>

          <div className="col-6">
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>

          <div className="col-6 mt-5">
            <button className="btn btn-success" onClick={submit}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
