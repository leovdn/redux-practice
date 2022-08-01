import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CartIcon } from "../icons"

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart)
  console.log(amount)

  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <h3>Redux Toolkit</h3>
        </Link>
        <div className="nav-container">
          <Link to="/cart">
            <CartIcon />
          </Link>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
