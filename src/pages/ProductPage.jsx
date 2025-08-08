import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProductCard from "../components/ProductCard";
import "../styles/ProductPage.css";

const ProductPage = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        const data = res.data.content || [];
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const safeSearchTerm = searchTerm ? searchTerm.toLowerCase() : "";
    const filtered = products.filter(
      (product) => product?.name && product.name.toLowerCase().includes(safeSearchTerm)
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="product-page">
      <h2 className="product-page-title">Products</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;