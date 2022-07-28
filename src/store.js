import { configureStore } from "@reduxjs/toolkit"
import postsSlice from "./features/posts/postsSlice"

// import cartReducer from "./features/cart/cartSlice"
// import modalReducer from "./features/modal/modalSlice"

export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    // modal: modalReducer,
    posts: postsSlice,
  },
})
