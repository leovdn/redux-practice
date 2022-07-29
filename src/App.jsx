import React from "react"
import { Routes, Route } from "react-router-dom"
import { store } from "./store"

import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"
import Layout from "./components/Layout"

import AddPostForm from "./components/blog/AddPostForm"
import SinglePostPage from "./pages/SinglePostPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />

      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePostPage />} />
      </Route>

      {/* <Route path="/cart" element={<Cart />}></Route> */}
    </Routes>
  )
}

export default App
