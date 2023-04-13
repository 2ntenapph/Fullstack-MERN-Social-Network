import { createSlice } from "@reduxjs/toolkit"; // toolkit has built-in library immer

const initialState = {      // regular state
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {     // function to modify regular state
        setMode : (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";  // immer let you write simpler immutable update logic using "mutating" syntax.
        },
        setLogin: (state, action ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state ) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user){
                state.user.friends = action.payload.friends;
            } else {
                console.log("user friends non-existent :(")
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        },
    },
})


export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;