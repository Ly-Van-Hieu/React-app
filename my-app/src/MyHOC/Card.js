import React from 'react'

const Card = (props) => {
  return(
    <div style={{border: '1px solid violet', padding: '10px'}}>
      {props.children}
    </div>
  )
}

export default Card
