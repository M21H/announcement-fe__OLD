import TokenService from '../../services/storage.service'
import { authActions } from './auth'
import { decodedUser } from '../../utils/decode'
import { INIT_APP_SUCCESS, INIT_APP_UNSUCCESS } from '../types'

const appActions = {
	initAppSuccess: () => ({ type: INIT_APP_SUCCESS }),
	initAppUnsuccess: () => ({ type: INIT_APP_UNSUCCESS }),
}

export const initApp = () => (dispatch) => {
	const token = TokenService.getAuthToken()
	if (token) {
		const user = decodedUser(token)
		dispatch(authActions.setAuthData(user.id, user.username, user.createdAt, true))
		dispatch(appActions.initAppSuccess())
	} else {
		dispatch(authActions.setAuthData(null, null, null, false))
		dispatch(appActions.initAppUnsuccess())
	}
}
