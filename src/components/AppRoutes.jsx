import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import { authRoutes, publicRoutes } from '../routes'

const AppRoutes = () => {
	const { isAuth } = useSelector(({ auth }) => auth)
	return (
		<>
			{isAuth ? (
				<Switch>
					{authRoutes.map((route) => (
						<Route key={route.path} {...route} />
					))}
				</Switch>
			) : (
				<Switch>
					{publicRoutes.map((route) => (
						<Route key={route.path} {...route} />
					))}
					<Redirect to='/auth/login' />
				</Switch>
			)}
		</>
	)
}

export default AppRoutes
