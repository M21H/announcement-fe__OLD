import Api from '../../api'
import { SET_ERROR, SET_LOADING, SET_POSTS } from '../types'

const actions = {
  setLoading: (payload) => ({ type: SET_LOADING, payload }),
  setPost: (posts) => ({ type: SET_POSTS, payload: posts }),
  setError: (payload) => ({ type: SET_ERROR, payload })
}

export const getPosts = () => async (dispatch) => {
  dispatch(actions.setLoading(true))
  try {
    const posts = await Api.fetchPosts()
    dispatch(actions.setPost(posts))
  } catch (e) {
    dispatch(actions.setError(e))
  }
}