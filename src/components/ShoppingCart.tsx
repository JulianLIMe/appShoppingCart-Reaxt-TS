import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import storeItem from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import "../styles/ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, isOpen, cartOpenClose } = useShoppingCart();

  const BODY = document.body;
  if (isOpen === true) {
    BODY.style.overflow = "hidden";
  } else {
    BODY.style.overflow = "visible";
  }

  return (
    <>
      <div
        className={isOpen ? "shadown" : ""}
        onClick={() => cartOpenClose()}
      ></div>
      <div className={`slider ${isOpen && "opened"}`}>
        <div className="header">
          <span>Cart</span>
          <button onClick={() => cartOpenClose()}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <span className="total">
          Total:{" "}
          {formatCurrency(
            cartItems.reduce((total, currentItem) => {
              const item = storeItem.find((i) => i.id === currentItem.id);
              return total + (item?.price || 0) * currentItem.quantity;
            }, 0)
          )}
        </span>
      </div>
    </>
  );
};

export default ShoppingCart;
