import axios from "../api/axios";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      quantity: 1, 
    };

    axios.post("/cart", cartItem)
      .then(() => {
        alert("Proizvod dodat u korpu!");
      })
      .catch((err) => {
        console.error("Greška pri dodavanju u korpu:", err);
        alert("Greška pri dodavanju u korpu.");
      });
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price} RSD</strong></p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;