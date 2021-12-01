import { DELETE_POST, SET_LOADING, SET_POSTS, CREATE_POST } from "../types"

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
        items: action.payload.data,
        isLoading: false
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case CREATE_POST:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default: return state
  }
}

export default Post