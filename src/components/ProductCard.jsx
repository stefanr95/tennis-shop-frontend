import { useState } from "react";
import axios from "../api/axios";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to add products to your cart.");
      return;
    }

    const cartItem = {
      productId: product.id,
      quantity: 1,
    };

    try {
      setLoading(true);

      await axios.post("/cart", cartItem, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);

      if (error.response?.status === 403) {
        alert("You are not authorized to perform this action.");
      } else if (error.response?.status === 401) {
        alert("Your session has expired. Please log in again.");
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-card">
      <img
        src={product.imageUrl || "/placeholder.png"}
        alt={product.name}
        className="product-image"
      />

      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">
        <strong>{product.price} RSD</strong>
      </p>

      <button
        onClick={handleAddToCart}
        disabled={loading}
        className="add-to-cart-btn"
      >
        {loading ? "Adding..." : " Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
