import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TokenService from '../services/storage.service'

const PrivateRoute = ({ children, ...rest }) => {
	const { isAuth } = useSelector(({ auth }) => auth)
	const token = TokenService.getAuthToken()

	const authenticated = isAuth || token

	return <Route {...rest}>{authenticated ? children : <Redirect to='/auth/login' />}</Route>
}

export default PrivateRoute
