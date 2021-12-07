import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
// import { private, public } from '../routes'
import { privateRoutes, publicRoutes } from '../routes/index'
import TokenService from '../services/storage.service'
import jwtDecode from 'jwt-decode'

import { actions } from '../redux/actions/auth'
import { initApp } from '../redux/actions/app'

import NotFound from '../pages/NotFound/NotFound'

const AppRoutes = () => {
	const dispatch = useDispatch()
	const { isAuth } = useSelector(({ auth }) => auth)

	useEffect(() => {
		dispatch(initApp())
	}, [dispatch])

	return (
		<>
			<Switch>
				{console.log(isAuth)}
				{isAuth ? (
					<>
						{privateRoutes.map((route) => (
							<Route key={route.path} {...route} />
						))}
					</>
				) : (
					<>
						{publicRoutes.map((route) => (
							<Route key={route.path} {...route} />
						))}
					</>
				)}
			</Switch>
		</>
	)
}

export default AppRoutes
