import { SET_AUTH_USER_DATA } from '../types'
import ApiAuth from '../../api/auth'
import TokenService from '../../services/storage.service'
import { decodedUser } from '../../utils/decode'

export const actions = {
	setAuthData: (id, username, createdAt, isAuth) => ({
		type: SET_AUTH_USER_DATA,
		payload: { id, username, createdAt, isAuth },
	}),
}

const _loginRegister = async (dispatch, data, api) => {
	try {
		const { token } = await api(data)
		const user = decodedUser(token)
		dispatch(actions.setAuthData(user.id, user.username, user.createdAt, true))
	} catch (e) {
		console.log(e)
	}
}

export const login = (loginData) => async (dispatch) => {
	await _loginRegister(dispatch, loginData, ApiAuth.login)
}

export const register = (registerData) => async (dispatch) => {
	await _loginRegister(dispatch, registerData, ApiAuth.register)
}

export const logout = () => (dispatch) => {
	TokenService.removeAuthToken()
	dispatch(actions.setAuthData(null, null, null, false))
}
