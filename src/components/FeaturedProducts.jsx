import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";

const FeaturedProducts = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products")
      .then(res => setProducts(res.data.content || []))
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = products.filter(product =>
    product && 
    product.name && 
    searchTerm && 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;