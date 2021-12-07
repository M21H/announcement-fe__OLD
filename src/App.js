import AppRoutes from './components/AppRoutes'
import TokenService from './services/storage.service'
import { Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Posts from './pages/Posts/Posts'
import Home from './pages/Home/Home'
import NavBar from './components/Navbar/Navbar'
import PrivateRoute from './components/PrivateRoute'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initApp } from './redux/actions/app'

function App() {
	// const dispatch = useDispatch()
	// // const { isAuth } = useSelector(({ auth }) => auth)

	// useEffect(() => {
	// 	dispatch(initApp())
	// }, [dispatch])
	return (
		<>
			<AppRoutes />
			{/* <PrivateRoute component={Home} path='/' exact />
			<PrivateRoute component={Posts} path='/posts' exact />
			<Route path='/auth/login' component={Login} exact />
			<Route path='/auth/register' component={Register} exact /> */}
		</>
	)
}

export default App
