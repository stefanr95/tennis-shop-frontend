import { useEffect, useState } from "react";
import axios from "../api/axios";
import "../styles/AddProductPage.css";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    price: "",
  });
  const [editingProductId, setEditingProductId] = useState(null);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(response.data.content);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      if (editingProductId) {
        await axios.put(`/products/${editingProductId}`, form, { headers });
        setMessage("Product updated successfully.");
      } else {
        await axios.post("/products", form, { headers });
        setMessage("Product added successfully.");
      }

      setForm({
        name: "",
        description: "",
        imageUrl: "",
        category: "",
        price: "",
      });
      setEditingProductId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error adding/updating product:", error);
      setMessage("An error occurred while processing the request.");
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingProductId(product.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Product deleted successfully.");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      setMessage("An error occurred while deleting the product.");
    }
  };

  return (
    <div className="admin-products-container">
      <h2>Admin Panel - Add / Edit Products</h2>

      {message && <p className="status-message">{message}</p>}

      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          step="0.01"
          required
        />
        <button type="submit">
          {editingProductId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h3>Product List</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    width="50"
                    height="50"
                  />
                )}
              </td>
              <td>{product.category}</td>
              <td>{product.price} RSD</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;