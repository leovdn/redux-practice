import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"

import { store } from "./store"

import "./index.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from "./App"
import { fetchPosts } from "./features/posts/postsSlice"
import { fetchUsers } from "./features/users/usersSlice"

const container = document.getElementById("root")
const root = createRoot(container)

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
)
