import React from 'react'
import ExampleRef from './ref'

class App extends React.Component {
  refExampleRef = React.createRef()

  changeCoLor = () => {
    this.refExampleRef.current.changeColor()
  }
  render() {
    return (
      <>
        <ExampleRef ref={this.refExampleRef} />
        <br />
        <button onClick={this.changeCoLor}>Đổi màu ở app</button>
      </>
    )
  }
}

export default App
