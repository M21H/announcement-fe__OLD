export const SET_POSTS = 'SET_POSTS'

export const UPDATE_POST = 'UPDATE_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'

const initState = {
	items: [],
	isLoading: false,
	error: null,
	selectedItem: null,
}

const Post = (state = initState, action) => {
	const { type, payload } = action
	switch (type) {
		case SET_POSTS:
			// debugger
			return {
				...state,
				items: payload,
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
