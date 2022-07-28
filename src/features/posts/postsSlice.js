import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "The easiest way to apply Redux in your project",
  },
  {
    id: "2",
    title: "Creating Slices",
    content: "Showing how to implement slices for the reducers",
  },
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        }
      },
    },
  },
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
