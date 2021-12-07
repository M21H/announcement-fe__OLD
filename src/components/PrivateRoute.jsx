import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
	const { isAuth } = useSelector(({ auth }) => auth)
	return <Route {...rest}>{isAuth ? children : <Redirect to='/auth/login' />}</Route>
}

export default PrivateRoute