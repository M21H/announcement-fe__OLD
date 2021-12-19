import TokenService from '../../services/storage.service'
import { authActions } from './auth'
import { decodedUser } from '../../utils/decode'

export const initApp = () => (dispatch) => {
	const token = TokenService.getAuthToken()
	if (token) {
		const user =  decodedUser(token)
		dispatch(authActions.setAuthData(user.id, user.username, user.createdAt, true))
	} else {
		dispatch(authActions.setAuthData(null, null, null, false))
	}
}
