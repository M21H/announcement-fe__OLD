import TokenService from '../../services/storage.service'
import { actions } from './auth'
import { decodedUser } from '../../utils/decode'

export const initApp = () => (dispatch) => {
	const token = TokenService.getAuthToken()
	if (token) {
		const user =  decodedUser(token)
		dispatch(actions.setAuthData(user.id, user.username, user.createdAt, true))
	} else {
		dispatch(actions.setAuthData(null, null, null, false))
	}
}
