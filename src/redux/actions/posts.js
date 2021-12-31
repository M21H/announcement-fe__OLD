import ApiPost from '../../api/post'
import {
	CREATE_POST,
	DELETE_POST,
	SET_CURRENT_PAGE,
	SET_ERROR,
	SET_LOADING,
	SET_POSTS,
	SET_TOTAL_PAGE_COUNT,
	UPDATE_POST,
} from '../reduces/posts'
// import { CREATE_POST, DELETE_POST, SET_ERROR, SET_LOADING, UPDATE_POST, SET_POSTS } from '../types'

export const postActions = {
	setLoading: (boolean) => ({ type: SET_LOADING, payload: boolean }),
	setPosts: (posts) => ({ type: SET_POSTS, payload: posts }),
	updatePost: (id, post) => ({ type: UPDATE_POST, payload: { id, post } }),
	createPost: (post) => ({ type: CREATE_POST, payload: post }),
	deletePost: (id) => ({ type: DELETE_POST, payload: id }),
	setError: (payload) => ({ type: SET_ERROR, payload }),

	setCurrentPage: (pageNumber) => ({ type: SET_CURRENT_PAGE, payload: pageNumber }),
	setTotalPostsCount: (count) => ({ type: SET_TOTAL_PAGE_COUNT, payload: count }),
}

export const getPosts = (currentPage, pageSize) => async (dispatch) => {
	dispatch(postActions.setLoading(true))
	try {
		const { data, total } = await ApiPost.fetchPosts(currentPage, pageSize)
		dispatch(postActions.setTotalPostsCount(total))
		dispatch(postActions.setPosts(data))
		
		dispatch(postActions.setLoading(false))
	} catch (e) {
		dispatch(postActions.setError(e))
	}
}

// export const getPost = (id) => async (dispatch) => {
// 	dispatch(postActions.setLoading(true))
// 	try {
// 		const post = await ApiPost.fetchPost(id)
// 		dispatch(postActions.setPosts(post))
// 		dispatch(postActions.setLoading(false))
// 	} catch (e) {
// 		dispatch(postActions.setError(e))
// 	}
// }

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

export const createPost = (postData) => async (dispatch) => {
	try {
		const post = await ApiPost.createPost(postData)
		dispatch(postActions.createPost(post))
	} catch (e) {
		dispatch(postActions.setError(e))
	}
}
