export const INIT_APP = 'INIT_APP'

const initState = {
	isInitialized: false,
}

const appReducer = (state = initState, action) => {
	const { type, payload } = action
	switch (type) {
		case INIT_APP:
			return {
				...state,
				isInitialized: payload,
			}
		default:
			return state
	}
}

export default appReducer
