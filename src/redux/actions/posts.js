import ApiPost from '../../api/post'
import { CREATE_POST, DELETE_POST, SET_ERROR, SET_LOADING, SET_POSTS } from '../types'

const actions = {
	setLoading: (boolean) => ({ type: SET_LOADING, payload: boolean }),
	setPosts: (posts) => ({ type: SET_POSTS, payload: posts }),
	createPost: (post) => ({ type: CREATE_POST, payload: post }),
	deletePost: (id) => ({ type: DELETE_POST, payload: id }),
	setError: (payload) => ({ type: SET_ERROR, payload }),
}

export const getPosts = () => async (dispatch) => {
	dispatch(actions.setLoading(true))
	try {
		const posts = await ApiPost.fetchPosts()
		dispatch(actions.setPosts(posts))
	} catch (e) {
		dispatch(actions.setError(e))
	}
}

export const createPost = (postData) => async (dispatch) => {
	try {
		const post = await ApiPost.createPost(postData)
		dispatch(actions.createPost(post))
	} catch (e) {
		dispatch(actions.setError(e))
	}
}
