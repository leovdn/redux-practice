import { createSlice } from "@reduxjs/toolkit"

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
  reducers: {},
})

export default postsSlice.reducer
