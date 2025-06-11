import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProductCard from "../components/ProductCard";
import "../styles/RegisterPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   axios.get("/products")
  .then(res => setProducts(res.data.content)) // ako se koristi Pageable
  .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-page">
      <h2>Svi proizvodi</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;