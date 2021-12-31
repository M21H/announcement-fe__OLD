import ApiAuth from '../../api/auth'
import TokenService from '../../services/storage.service'
import { decodedUser } from '../../utils/decode'
import { SET_AUTH_USER_DATA } from '../reduces/auth'

export const authActions = {
	setAuthData: (id, username, createdAt, isAuth) => ({
		type: SET_AUTH_USER_DATA,
		payload: { id, username, createdAt, isAuth },
	}),
}

const _loginRegister = async (dispatch, data, api) => {
	try {
		await api(data)
		const user = decodedUser(TokenService.getAuthToken())
		dispatch(authActions.setAuthData(user.id, user.username, user.createdAt, true))
	} catch (e) {
		console.log(e)
	}
}

export const login = (loginData) => async (dispatch) => {
	return await _loginRegister(dispatch, loginData, ApiAuth.login)
}

export const register = (registerData) => async (dispatch) => {
	return await _loginRegister(dispatch, registerData, ApiAuth.register)
}

export const logout = () => (dispatch) => {
	// TokenService.removeAuthToken()
	localStorage.clear()
	dispatch(authActions.setAuthData(null, null, null, false))
}
