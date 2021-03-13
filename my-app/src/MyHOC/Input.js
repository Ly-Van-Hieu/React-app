import React, {useState} from 'react'
import Card from './Card.js'

const Input = props => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const validate = value => {
    const {type, condition} = props
    setError('')

    if (type === "text" && value.length > condition) {
      setError('không được vượt quá 10 ký tự')
    }

    if (type === "number" && value > condition) {
      setError('không được vượt quá 20')
    }
  }

  const onChange = e => {
    const {value} = e.target

    validate(value)

    setValue(value)
  }

  return(
    <div>
      <label htmlFor={props.label}>{props.label}:</label>
      <input id={props.label} type={props.type} onChange={onChange} value={value} />
      { error &&
        <p style={{color:'red'}}>{error}</p>
      }
    </div>
  )
}

const merge = Component => {
  return class InputCard extends React.Component {
    render() {
      return(
        <Card>
          <Component {...this.props}/> {/* this.props để lấy tất cả các props truyền xuống */}
        </Card>
      )
    }
  }
}

export default Input //chỉ đc export default 1 cái
export const InputCard = merge(Input)
