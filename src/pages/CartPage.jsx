import { useEffect, useState } from "react";
import axios from "../api/axios";
import CartItem from "../components/CartItem";
import "../styles/CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Fetch all cart items
  const fetchCartItems = async () => {
    try {
      const { data } = await axios.get("/cart");
      setCartItems(data);
    } catch (err) {
      console.error("Error fetching cart items:", err);
    }
  };

  // Remove item from cart
  const handleRemove = async (productId) => {
    try {
      await axios.delete(`/cart/${productId}`);
      fetchCartItems();
    } catch (err) {
      console.error("Error removing item from cart:", err);
    }
  };

  // Update quantity
  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await axios.put(`/cart/${productId}`, { quantity: newQuantity });
      fetchCartItems();
    } catch (err) {
      console.error("Error updating item quantity:", err);
    }
  };

  // Total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
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
            <h3>Total: {total} RSD</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
