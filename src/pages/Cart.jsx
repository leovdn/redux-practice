import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartContainer from "../components/CartContainer"
import Modal from "../components/Modal"
import Navbar from "../components/Navbar"
import { calculateTotals, getCartItems } from "../features/cart/cartSlice"

export const Cart = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  useEffect(() => {
    dispatch(getCartItems("random"))
  }, [dispatch])

  return (
    <main>
      <Navbar />
      {isOpen && <Modal />}
      {isLoading ? <h2>Loading...</h2> : <CartContainer />}
    </main>
  )
}
