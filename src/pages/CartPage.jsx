import { useEffect, useState } from "react";
import axios from "../api/axios";
import CartItem from "../components/CartItem";
import "../styles/CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = () => {
    axios.get("/cart")
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error("Greška prilikom dohvaćanja korpe:", err));
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleRemove = (cartItemId) => {
    axios.delete(`/cart/${cartItemId}`)
      .then(() => fetchCartItems())
      .catch((err) => console.error("Greška prilikom uklanjanja iz korpe:", err));
  };

  const handleQuantityChange = (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    axios.put(`/cart/${cartItemId}`, { quantity: newQuantity })
      .then(() => fetchCartItems())
      .catch((err) => console.error("Greška prilikom menjanja količine:", err));
  };

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Vaša korpa</h2>

      {cartItems.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={handleRemove} 
              onQuantityChange={handleQuantityChange} 
            />
          ))}

          <div className="total-section">
            <h3>Ukupno: {total} RSD</h3>
            <button className="checkout-btn">
              Nastavi na plaćanje
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;