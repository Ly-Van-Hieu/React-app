import React from 'react'
import Counter from './Counter'

class ExampleRef extends React.Component {
  refH1 = React.createRef()
  refCounter = React.createRef() // đang ở cha và muốn kiểm soát, thay đổi data của con thì sử dụng ref

  changeColor = () => {
    const h1 = this.refH1.current
    if(!h1.style.background || h1.style.background === 'red') {
      h1.style.background = 'green'
    } else {
      h1.style.background = 'red'
    }
  }

  change = () => {
    this.refCounter.current.change()
  }

  render() {
    return(
      <>
        <h1 ref={this.refH1}>đây là ref</h1>
        <button onClick={this.changeColor}>Đổi màu</button>
        <Counter ref={this.refCounter} />
        <button onClick={this.change}>Tăng ở cha</button>
      </>
    )
  }
}

export default ExampleRef
