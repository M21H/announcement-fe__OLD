import { Redirect, Route, Switch } from 'react-router-dom'

import Posts from './pages/Posts/Posts'
import PrivateRoute from './components/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initApp } from './redux/actions/app'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'
import AboutPost from './components/AboutPost/AboutPost'
// import { getPosts } from './redux/actions/posts'

const App = () => {
	const dispatch = useDispatch()
	// const { isAuth } = useSelector(({ auth }) => auth)

	useEffect(() => {
		dispatch(initApp())
	}, [dispatch])



	return (
		<>
			<Switch>
				<PrivateRoute path='/posts' exact component={Posts} />
				<PrivateRoute path='/posts/:id' exact component={AboutPost} />
				<Route path='/auth/login' exact component={Login} />
				<Route path='/auth/register' exact component={Register} />
				{/* <Route path='*' component={NotFound} /> */}
				<Redirect to='/auth/login' />
			</Switch>
		</>
	)
}

export default App
