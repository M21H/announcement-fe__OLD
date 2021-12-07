import TokenService from '../../services/storage.service'
import jwtDecode from 'jwt-decode'
import { actions } from './auth'

export const initApp = () => (dispatch) => {
	const token = TokenService.getAuthToken()
	if (token) {
		const user = jwtDecode(token)
		dispatch(actions.setAuthData(user.id, user.username, user.createdAt, true))
	} else {
		dispatch(actions.setAuthData(null, null, null, false))
	}
}
