import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import "../styles/Store.css";

const Store = () => {
  return (
    <div className="container-store">
      {storeItems.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Store;
