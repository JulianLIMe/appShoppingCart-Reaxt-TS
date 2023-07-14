import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../styles/StoreItem.css";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity: number = getItemQuantity(id);

  return (
    <div className="container-item">
      <div className="img-item">
        <img src={imgUrl} alt="" />
      </div>
      <div className="body-item">
        <span>{name}</span>
        <span style={{ opacity: 0.7 }}>{formatCurrency(price)}</span>
      </div>
      <div className="state-item">
        {quantity === 0 ? (
          <button onClick={() => increaseCartQuantity(id)}>Add to cart</button>
        ) : (
          <div className="options-item">
            <button onClick={() => decreaseCartQuantity(id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => increaseCartQuantity(id)}>+</button>
            <button onClick={() => removeFromCart(id)} className="rm">
              remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
