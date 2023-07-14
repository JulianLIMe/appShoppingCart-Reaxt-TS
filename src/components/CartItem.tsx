import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItem from "../data/items.json";
import "../styles/CartItem.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const item = storeItem.find((i) => i.id === id);

  const { removeFromCart } = useShoppingCart();

  if (item == null) return null;

  return (
    <div className="cartItem">
      <div className="left">
        <img src={item.imgUrl} style={{ width: "125px", height: "75px" }} />
        <div className="info-left">
          <span className="name" style={{ fontSize: "18px" }}>
            {item.name}
          </span>
          <span className="price" style={{ opacity: 0.7 }}>
            {formatCurrency(item.price)}
          </span>
          <span className="quantity">x{quantity}</span>
        </div>
      </div>
      <div className="right">
        <span className="subTotal" style={{ opacity: 0.7 }}>
          {formatCurrency(item.price * quantity)}
        </span>
        <button onClick={() => removeFromCart(id)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
