import React, { Component } from 'react'

class User extends Component {
  state = {
    editingUser: { ...this.props.user }
  }

  get display() {
    const { user } = this.props

    return (
      <tr>
        <td>
          <input type="checkbox" onChange={() => this.props.checked(user.id)} checked={user.checked? 'checked': null}/>
        </td>
        <td>{user.id}</td>
        <td>{user.fullName}</td>
        <td>{user.gender === 'male' ? 'Nam' : 'Nữ'}</td>
        <td>{user.age}</td>
        <td>
          <button className="btn btn-primary btn-sm" onClick={() => this.props.edit(user.id, true)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={() => this.props.delete(user.id)}>Delete</button>
        </td>
      </tr>
    )
  }

  changeName = event => {
    const value = event.target.value
    this.setState({
      editingUser: {
        ...this.state.editingUser,
        fullName: value
      }
    })
  }

  changeGender = event => {
    const value = event.target.value
    this.setState({
      editingUser: {
        ...this.state.editingUser,
        gender: value
      }
    })
  }

  changeAge = event => {
    const value = event.target.value
    this.setState({
      editingUser: {
        ...this.state.editingUser,
        age: value
      }
    })
  }

  changeChecked = event => {
    const value = event.target.checked
    this.setState({
      editingUser: {
        ...this.state.editingUser,
        checked: value
      }
    })
  }

  get editingRow() {
    const user = this.state.editingUser

    return (
      <tr>
        <td>
          <input type="checkbox" onChange={() => this.props.checked(user.id)} checked={user.checked? 'checked': ''}/>
        </td>

        <td>{user.id}</td>

        <td><input type="text" onChange={this.changeName} value={user.fullName} /></td>

        <td>
          <select value={user.gender} onChange={this.changeGender}>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
          </select>
        </td>

        <td><input type="number" onChange={this.changeAge} value={user.age} /></td>

        <td>
          <button className="btn btn-success btn-sm" onClick={(event) => this.props.save(user.id, event)}>Save</button>
          <button className="btn btn-warning btn-sm" onClick={() => this.props.edit(user.id, false)}>Cancel</button>
          <button className="btn btn-danger btn-sm" onClick={() => this.props.delete(user.id)}>Delete</button>
        </td>
      </tr>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState ({
      editingUser: {
        ...this.state.editingUser,
        ...nextProps.user
      }
    })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount---start')
    console.log(this.props.user)
    console.log('componentWillUnmount---end')
  }

  render() {
    const {user} = this.props
    return (
      <>
        {user.isEdit ? this.editingRow : this.display}
      </>
    )
  }
}

export default User