import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "./features/posts/postsSlice"
import usersReducer from "./features/users/usersSlice"

// import cartReducer from "./features/cart/cartSlice"
// import modalReducer from "./features/modal/modalSlice"

export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    // modal: modalReducer,
    posts: postsReducer,
    users: usersReducer,
  },
})
