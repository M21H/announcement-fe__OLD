import { Route, Switch } from 'react-router-dom'

import Posts from './pages/Posts/Posts'
import Home from './pages/Home/Home'
import PrivateRoute from './components/PrivateRoute'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initApp } from './redux/actions/app'
import NotFound from './pages/NotFound/NotFound'
import Post from './redux/reduces/posts'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initApp())
	}, [dispatch])

	return (
		<>
			<Switch>
				{/* <PrivateRoute path='/' exact component={Home} /> */}
				<PrivateRoute path='/posts' exact component={Posts} />
				{/* <PrivateRoute path='/posts/:id' exact component={Post} /> */}
				<Route path='/auth/login' exact component={Login} />
				<Route path='/auth/register' exact component={Register} />
				{/* <Route path='*' component={NotFound} /> */}
			</Switch>
		</>
	)
}

export default App
