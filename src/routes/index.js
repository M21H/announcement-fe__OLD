import Login from '../pages/Login/Login'
import Posts from '../pages/Posts/Posts'
import Register from '../pages/Register/Register'
import Root from '../pages/Root/Root'

export const authRoutes = [
	{
		path: '/',
		component: Root,
		exact: true,
	},
	{
		path: '/posts',
		component: Posts,
		exact: true,
	},
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
