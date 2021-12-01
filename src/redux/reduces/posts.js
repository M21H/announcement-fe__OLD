import { SET_LOADING, SET_POSTS } from "../types"

const initState = {
  items: null,
  isLoading: false,
  error: null
}

const Post = (state = initState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      }
    default: return state
  }
}

export default Post