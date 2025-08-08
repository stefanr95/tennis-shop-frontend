import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProductCard from "../components/ProductCard";
import "../styles/FeaturedProducts.css";

const FeaturedProducts = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/products", {
          params: searchTerm ? { search: searchTerm } : {}
        });
        setProducts(res.data.content);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="product-grid">
      {loading && <p>Loading...</p>}
      {!loading && products.length === 0 && <p>No products found.</p>}
      {!loading && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;