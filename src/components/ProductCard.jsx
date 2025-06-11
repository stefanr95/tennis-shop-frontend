import "../styles/ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price} RSD</strong></p>
      <button>Dodaj u korpu</button>
    </div>
  );
};

export default ProductCard;