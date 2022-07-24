import React from "react"
import { Provider } from "react-redux"
import { Routes, Route } from "react-router-dom"

import { store } from "./store"
import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Provider>
  )
}

export default App
