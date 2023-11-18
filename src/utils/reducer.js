const initalState = {
  posts: [],
  refresh: false,
  error: null
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    case 'FETCH_POSTS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: 
    return state
  }
};

export default reducer