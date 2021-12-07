import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Posts from '../pages/Posts/Posts'
import Register from '../pages/Register/Register'
import NotFound from '../pages/NotFound/NotFound' 


export const privateRoutes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/posts',
		component: Posts,
		exact: true,
	},
	// {
	// 	path: '*',
	// 	component: NotFound,
	// 	exact: false,
	// },
]

export const publicRoutes = [
	{
		path: '/auth/login',
		component: Login,
		exact: true,
	},
	{
		path: '/auth/register',
		component: Register,
		exact: true,
	},
]
