import { INIT_APP_SUCCESS, INIT_APP_UNSUCCESS } from '../types'

const initState = {
	isInitialized: false,
}

const appReducer = (state = initState, action) => {
	const { type } = action
	switch (type) {
		case INIT_APP_SUCCESS:
			return {
				...state,
				isInitialized: true,
			}
		case INIT_APP_UNSUCCESS:
			return {
				...state,
				isInitialized: false,
			}
		default:
			return state
	}
}

export default appReducer
