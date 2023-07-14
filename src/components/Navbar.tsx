import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../styles/Navbar.css";

const NavBar = () => {
  const { cartQuantity, cartOpenClose } = useShoppingCart();

  return (
    <nav className="container-navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/store" className="link">
        Store
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <button onClick={() => cartOpenClose()}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      {cartQuantity > 0 && <div className="circle-store">{cartQuantity}</div>}
    </nav>
  );
};

export default NavBar;
