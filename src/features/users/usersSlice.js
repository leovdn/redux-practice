const { createSlice } = require("@reduxjs/toolkit")

const initialState = [
  { id: "0", name: "Nope Nothing" },
  { id: "1", name: "Yes Everything" },
  { id: "2", name: "What Ever" },
  { id: "3", name: "Could Be" },
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer
