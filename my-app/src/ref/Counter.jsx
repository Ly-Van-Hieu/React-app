import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0
  }

  change = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <>
        <p>Count:{this.state.count}</p>
        <button onClick={this.change}>Tăng</button>
        
      </>
    )
  }
}

export default Counter
