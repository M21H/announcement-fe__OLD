import { SET_AUTH_USER_DATA } from '../types'

const initialState = {
	id: null,
	username: null,
	createdAt: null,
	isAuth: false,
}

const AuthReducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case SET_AUTH_USER_DATA: {
			const { id, username, createdAt, isAuth } = payload
			return { ...state, id, username, createdAt, isAuth }
		}
		default:
			return state
	}
}

export default AuthReducer
