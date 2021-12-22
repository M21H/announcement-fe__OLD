import { Route, Switch } from 'react-router-dom'

import Posts from './pages/Posts/Posts'
import PrivateRoute from './components/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initApp } from './redux/actions/app'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'
// import Preloader from './components/Preloader/Preloader'

function App() {
	const dispatch = useDispatch()
	// const { isInitialized } = useSelector(({ app }) => app)

	useEffect(() => {
		dispatch(initApp())
	}, [dispatch])

	return (
		<>
			<Switch>
				<PrivateRoute path='/posts' exact component={Posts} />
				<Route path='/auth/login' exact component={Login} />
				<Route path='/auth/register' exact component={Register} />
				{/* <Route path='*' component={NotFound} /> */}
			</Switch>
		</>
	)
}

export default App
