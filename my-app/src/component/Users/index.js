import React, { Component } from 'react'
import { students } from './../../constants/students'
import User from './User'

class Users extends Component {
  state = {
    students
  }

  editRow = (id, isEdit) => {
    const index = this.state.students.findIndex(user => user.id === id)
    const user = {...this.state.students[index]}
    user.isEdit = isEdit
    const newStudents = this.state.students
    newStudents[index] = user

    this.setState({
      students: [...newStudents] // thay đổi ref của state thì mới render lại.
    })
  }

  save = (id, event) => {
    const user = this.state.students.find(row => row.id === id)

    const tr = event.target.closest('tr')
    const inputFullName = tr.querySelector('td:nth-child(3) input')
    const inputGender = tr.querySelector('td:nth-child(4) select')
    const inputAge = tr.querySelector('td:nth-child(5) input')

    user.fullName = inputFullName.value
    user.gender = inputGender.value
    user.age = inputAge.value
    user.isEdit = false
    this.setState({
      students: [...this.state.students] // thay đổi ref của state thì mới render lại.
    })
  }

  deleteItem = id => {
    this.setState({
      students: [...this.state.students.filter(item => item.id !== id)]
    })
  }

  checked = (id) => {
    const user = this.state.students.find(row => row.id === id)
    user.checked = !user.checked
  
    this.setState({
      students: [...this.state.students]
    })
  }

  // componentWillMount(a='abc') {
  //   console.log(a)
  //   // const add = document.getElementById('add')
  //   // console.log(add)
  //   // console.log('---componentWillMount---end')
  // }

  // componentDidMount() {
  //   console.log('---componentDidMount---start')
  //   const add = document.getElementById('add')
  //   console.log(add)
  //   console.log('---componentDidMount---end')
  // }

  render () {
    // console.log('---render-start')
    // const add = document.getElementById('add')
    // console.log(add)
    // console.log('---render---end')
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-right">
            <button className="btn btn-primary" id="add">Add</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>

        <div className="row mt-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>ID</th>
                <th>Full name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.students.map((user, index) => (
                <User
                  key={index}
                  user={user}
                  edit={this.editRow}
                  save={this.save}
                  delete={this.deleteItem}
                  checked={this.checked}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Users