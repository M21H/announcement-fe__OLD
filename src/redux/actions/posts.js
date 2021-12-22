import ApiPost from '../../api/post'
import { CREATE_POST, DELETE_POST, SET_ERROR, SET_LOADING, UPDATE_POST, SET_POSTS } from '../types'

const postActions = {
	setLoading: (boolean) => ({ type: SET_LOADING, payload: boolean }),
	setPosts: (posts) => ({ type: SET_POSTS, payload: posts }),
	updatePost: (id, post) => ({ type: UPDATE_POST, payload: { id, post } }),
	createPost: (post) => ({ type: CREATE_POST, payload: post }),
	deletePost: (id) => ({ type: DELETE_POST, payload: id }),
	setError: (payload) => ({ type: SET_ERROR, payload }),
}

export const getPosts = (title) => async (dispatch) => {
	dispatch(postActions.setLoading(true))
	try {
		const posts = await ApiPost.fetchPosts(title)
		dispatch(postActions.setPosts(posts))
		dispatch(postActions.setLoading(false))
	} catch (e) {
		dispatch(postActions.setError(e))
	}
}

export const updatePost = (id, postData) => async (dispatch) => {
	try {
		const post = await ApiPost.updatePost(id, postData)
		dispatch(postActions.updatePost(id, post))
	} catch (e) {
		console.log(e)
	}
}

export const deletePost = (id) => async (dispatch) => {
	try {
		const deletedPostId = await ApiPost.deletePost(id)
		dispatch(postActions.deletePost(deletedPostId))
	} catch (e) {
		console.log(e)
	}
}

// export const getPost = (id) => async (dispatch) => {
// 	dispatch(postActions.setLoading(true))
// 	try {
// 		const post = await ApiPost.fetchPost(id)
// 		dispatch(postActions.setPost(post))
// 	} catch (e) {
// 		dispatch(postActions.setError(e))
// 	}
// }

export const createPost = (postData) => async (dispatch) => {
	try {
		const post = await ApiPost.createPost(postData)
		dispatch(postActions.createPost(post))
	} catch (e) {
		dispatch(postActions.setError(e))
	}
}
