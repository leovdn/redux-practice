import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../services/api"

const initialState = {
  products: [],
  isLoading: true,
}

export const getProductItems = createAsyncThunk(
  "productsList/getProductItem",
  async (name, thunkApi) => {
    try {
      const res = await api.get("products")
      return res.data.products
    } catch (error) {
      console.log(error)
    }
  }
)

const productSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductItems.pending]: (state) => {
      state.isLoading = true
    },
    [getProductItems.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    [getProductItems.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

// console.log(cartSlice)

export const {} = productSlice.actions

export default productSlice.reducer
