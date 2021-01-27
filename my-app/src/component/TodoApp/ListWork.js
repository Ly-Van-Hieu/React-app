import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <>
        {this.props.works.map((work, index) => (
          <li key={index}>
            <div className="work">
              <input type="checkbox" id={index} />
              <label htmlFor={index} className={work.status === 3 ? "completed" : null}>{work.name}</label>
            </div>
            <div className="delete-work" onClick={() => this.props.deleteWork(work.id)}>
              <i className="fas fa-times"></i>
            </div>
          </li>
        ))}
      </>
    )
  }
}

export default List
