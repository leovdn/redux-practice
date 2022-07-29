import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { getProductItems } from "../features/products/productSlice"
import { calculateTotals, getCartItems } from "../features/cart/cartSlice"

export const Home = () => {
  const { products, isLoading } = useSelector((store) => store.productsList)
  const { cartItems } = useSelector((store) => store.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  useEffect(() => {
    dispatch(getProductItems())
    dispatch(getCartItems())
  }, [])

  return (
    <main>
      <Navbar />

      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>
        })}
      </ul>
    </main>
  )
}
