import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <center><h2>NOT FOUND</h2></center>
      <Link to='/'>go to home page</Link>
    </div>
  )
}

export default NotFound