import { configureStore } from "@reduxjs/toolkit"

import productsReducer from "./features/products/productSlice"
import cartReducer from "./features/cart/cartSlice"
import modalReducer from "./features/modal/modalSlice"

export const store = configureStore({
  reducer: {
    productsList: productsReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
})
