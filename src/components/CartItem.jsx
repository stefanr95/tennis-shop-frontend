import "../styles/CartItem.css";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const { product, quantity } = item;

  return (
    <div className="cart-item">
      <img src={product.imageUrl} alt={product.name} width={100} />

      <div className="cart-details">
        <h3>{product.name}</h3>
        <p>Cena: {product.price} RSD</p>

        <div className="quantity-control">
          <button 
  onClick={() => onQuantityChange(item.product.id, quantity - 1)}
  disabled={quantity <= 1}
>
  -
</button>
<span>{quantity}</span>
<button onClick={() => onQuantityChange(item.product.id, quantity + 1)}>+</button>
        </div>

        <p>Ukupno: {product.price * quantity} RSD</p>

       <button className="remove-btn" onClick={() => onRemove(item.product.id)}>
  Ukloni
</button>

      </div>
    </div>
  );
};

export default CartItem;