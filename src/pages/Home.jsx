import React from "react"
import AddPostForm from "../components/blog/AddPostForm"
import PostsList from "../components/blog/PostsList"
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { getProductItems } from "../features/products/productSlice"
import { calculateTotals, getCartItems } from "../features/cart/cartSlice"

export const Home = () => {
  return <PostsList />
}
