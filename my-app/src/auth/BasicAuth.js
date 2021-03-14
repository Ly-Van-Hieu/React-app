import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

const BasicAuth = ({Component, ...otherProps}) => {
  const user = useSelector(store => store.user.currentUser)

  useEffect(() => {
    console.log('---useEffect--user:', user)
  }, [user])

  return (
    <>
      {
        user ? <Component {...otherProps} /> : <Redirect to="/login" />
      }
    </>
  )
}

export default BasicAuth
