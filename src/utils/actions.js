import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_POSTS_REQUEST" });

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    dispatch({
      type: "FETCH_POST)SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_POSTS_FAIL",
      payload: err.message,
    });
  }
};
