import { SET_AUTH_USER_DATA } from '../types'
import ApiAuth from '../../api/auth'
import TokenService from '../../services/storage.service'
import jwtDecode from 'jwt-decode'
import { useHistory } from 'react-router'


export const actions = {
	setAuthData: (id, username, createdAt, isAuth) => ({
		type: SET_AUTH_USER_DATA,
		payload: { id, username, createdAt, isAuth },
	}),
}

export const login = (loginData) => async (dispatch) => {
	try {
		const { token } = await ApiAuth.login(loginData)
		const user = jwtDecode(token)
		dispatch(actions.setAuthData(user.id, user.username, user.createdAt, true))
	} catch (e) {
		console.log(e)
	}
}

export const register = (registerData) => async (dispatch) => {
	try {
		const { user } = await ApiAuth.register(registerData)
		dispatch(actions.setAuthData(user._id, user.username, user.createdAt, true))
	} catch (e) {
		console.log(e)
	}
}

export const logout = () => async (dispatch) => {
	try {
		TokenService.removeAuthToken()
		dispatch(actions.setAuthData(null, null, null, false))
	} catch (e) {
		console.log(e)
	}
}
