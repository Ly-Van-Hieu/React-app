import React, { Component } from 'react'
import Tags from './Tags'
import List from './ListWork'
import Task from './Task'



import { works } from '../../data/works'
import { tags } from '../../data/tags'
import { status } from '../../data/status'


// const task = {
//   id: 1,
//   name: 'Hoc tieng anh',
//   groupId: 1,
//   status: 'COMPLETED', // PENDING, DOING, ....
// }

class TodoApp extends Component {
  state = {
    tasks: works,
    filteredTasks: works,
    groupTags: tags,
    groupStatus: status,
    currentTags: 0,
    currentStatus: 0
  }

  setCurrentTags = id => {
    this.setFilterData({
      currentTags: id,
      currentStatus: this.state.currentStatus
    })
  }

  setCurrentStatus = id => {
    this.setFilterData({
      currentTags: this.state.currentTags,
      currentStatus: id
    })
  }

  setFilterData = ({currentTags, currentStatus}) => {
    const newData = this.state.tasks.filter(item => {
      if (currentStatus === 0 && currentTags === 0) {
        return true
      }
      if (currentStatus === 0 && currentTags !== 0) {
        return item.tag === currentTags
      }
      if (currentStatus !== 0 && currentTags === 0) {
        return item.status === currentStatus
      }
      if (currentStatus !== 0 && currentTags !== 0) {
        return item.status === currentStatus && item.tag === currentTags
      }
    })

    this.setState({
      currentTags,
      currentStatus,
      filteredTasks: newData
    })
  }

  // onChange = (e,id) => {
  //   // console.log(e.target.checked, id)
  //   const work = this.state.tasks.filter(item => item.id === id)
  //   // this.setState({

  //   // })
  // }

  addWork = (e) => {
    // console.log(e)
  }

  deleteWork = (id) => {
    const newData = this.state.tasks.filter(item => item.id !== id)
    this.setState({
      tasks: newData,
      filteredTasks: newData
    })
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>REACT TODO APP</h1>
          <div className="border"></div>
        </div>

        <div className="content">
          <div className="inputAdd">
            <input type="text" placeholder="What do you need to do?" />
            <i className="fas fa-plus" onClick={this.addWork}></i>
          </div>

          <div className="tag">
            <li className="item-tags">Tags</li>
            <Tags
              groupTags={this.state.groupTags}
              currentTags={this.state.currentTags}
              setCurrentTags={this.setCurrentTags}
            />
            <li className="item">Reset</li>
          </div>

          <div className="list-work">
            <List works={this.state.filteredTasks} deleteWork={this.deleteWork} />
          </div>

          <div className="task">
            <Task
              groupsStatus={this.state.groupStatus}
              currentStatus={this.state.currentStatus}
              setCurrentStatus={this.setCurrentStatus}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
