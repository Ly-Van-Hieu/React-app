import React, { Component } from 'react'

class Task extends Component {

  render() {
    return (
      <>
        {this.props.groupsStatus.map((task, index) => (
          <li key={index} onClick={() => this.props.setCurrentStatus(task.id)}>
            <button className={this.props.currentStatus === task.id ? "btn-task focus" : "btn-task"}>{task.name}</button>
          </li>
        ))}
      </>
    )
  }
}

export default Task
