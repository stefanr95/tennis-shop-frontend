import "../styles/CartItem.css";

const CartItem = ({ item, onRemove }) => {
  const { product, quantity, id } = item;

  return (
    <div className="cart-item">
      <img src={product.imageUrl} alt={product.name} width={100} />
      <div className="cart-details">
        <h3>{product.name}</h3>
        <p>Cena: {product.price} RSD</p>
        <p>Količina: {quantity}</p>
        <button onClick={() => onRemove(product.id)}>Ukloni</button>
      </div>
    </div>
  );
};

export default CartItem;