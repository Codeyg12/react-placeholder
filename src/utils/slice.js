import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        fetchPostsRequest: (state) => {
            state.loading = true,
            state.error = null
        },
        fetchPostsSuccess: (state, action) => {
            state.loading = false,
            state.data = action.payload
        },
        fetchPostsFail: (state, action) => {
            state.loading = false,
            state.error = action.payload
        }
    }
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFail } = postsSlice.actions

export default postsSlice.reducers