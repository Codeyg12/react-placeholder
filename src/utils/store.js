import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import reducer from "./reducer";
import reducer from "./slice";

export default configureStore({
  reducer: {
    posts: reducer
  }
});
