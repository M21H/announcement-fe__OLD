import { SET_AUTH_USER_DATA } from '../types'
import ApiAuth from '../../api/auth'

const actions = {
	setAuthData: (id, username, createdAt, isAuth) => ({
		type: SET_AUTH_USER_DATA,
		payload: { id, username, createdAt, isAuth },
	}),
}

export const login = (loginData) => async (dispatch) => {
	try {
		const { user, token } = await ApiAuth.login(loginData)
		dispatch(actions.setAuthData(user._id, user.username, user.createdAt, true))
	} catch (e) {
		console.log(e)
	}
}

export const register = (registerData) => async (dispatch) => {
	try {
		const { user, token } = await ApiAuth.register(registerData)
		localStorage.setItem('token', token)
		dispatch(actions.setAuthData(user._id, user.username, user.createdAt, true))
	} catch (e) {
		console.log(e)
	}
}

export const logout = () => async (dispatch) => {
	try {
		const data = await ApiAuth.logout()
		dispatch(actions.setAuthData(null, null, null, false))
	} catch (e) {
		console.log(e)
	}
}
