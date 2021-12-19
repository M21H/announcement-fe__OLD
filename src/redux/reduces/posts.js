import { CREATE_POST, DELETE_POST, SET_LOADING, SET_POSTS, UPDATE_POST } from '../types'

const initState = {
	items: null,
	isLoading: false,
	error: null,
}

const Post = (state = initState, action) => {
	const { type, payload } = action
	switch (type) {
		case SET_POSTS:
			return {
				...state,
				items: payload.data,
			}
		case UPDATE_POST:
			return {
				...state,
				items: state.items.map((item) => (item._id === payload.id ? payload.post : item)),
			}
		case SET_LOADING:
			return {
				...state,
				isLoading: payload,
			}
		case CREATE_POST:
			return {
				...state,
				items: [payload, ...state.items],
			}
		case DELETE_POST:
			return {
				...state,
				items: state.items.filter((item) => item._id !== payload),
			}
		default:
			return state
	}
}

export default Post
