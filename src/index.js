import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import { fetchUsers } from "./features/users/usersSlice"
import { store } from "./store"

import "./index.css"

const container = document.getElementById("root")
const root = createRoot(container)

store.dispatch(fetchUsers())

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
