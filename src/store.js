import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./features/users/usersSlice"
import { apiSlice } from "./features/api/apiSlice"

// import cartReducer from "./features/cart/cartSlice"
// import modalReducer from "./features/modal/modalSlice"

export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    // modal: modalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
