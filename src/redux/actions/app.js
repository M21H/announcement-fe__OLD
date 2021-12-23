import TokenService from '../../services/storage.service'
import { authActions } from './auth'
import { decodedUser } from '../../utils/decode'
import { INIT_APP } from '../reduces/app'

export const appActions = {
	initApp: (boolean) => ({ type: INIT_APP, payload: boolean }),
}

export const initApp = () => (dispatch) => {
	const token = TokenService.getAuthToken()
	if (token) {
		const user = decodedUser(token)
		dispatch(authActions.setAuthData(user.id, user.username, user.createdAt, true))
		dispatch(appActions.initApp(true))
	} else {
		dispatch(authActions.setAuthData(null, null, null, false))
		dispatch(appActions.initApp(false))
	}
}
