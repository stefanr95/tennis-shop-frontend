import { useEffect, useState } from "react";
import axios from "../api/axios";
import "../styles/AdminProducts.css";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    price: "",
  });
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data.content);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      if (form.id) {
        await axios.put(`/products/${form.id}`, form, { headers });
        setMessage("Product updated successfully.");
      } else {
        await axios.post("/products", form, { headers });
        setMessage("Product added successfully.");
      }

      resetForm();
      fetchProducts();
    } catch (err) {
      console.error("Error saving product:", err);
      setMessage("An error occurred while processing the request.");
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setForm(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      await axios.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Product deleted successfully.");
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
      setMessage("Failed to delete product.");
    }
  };

  // Reset form
  const resetForm = () =>
    setForm({
      id: null,
      name: "",
      description: "",
      imageUrl: "",
      category: "",
      price: "",
    });

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

        <div className="form-buttons">
          <button type="submit">
            {form.id ? "Update Product" : "Add Product"}
          </button>
          {form.id && (
            <button type="button" className="cancel-btn" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>
      <h3>Product List</h3>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
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
            {products.map(
              ({ id, name, description, imageUrl, category, price }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>
                    {imageUrl && (
                      <img src={imageUrl} alt={name} width="50" height="50" />
                    )}
                  </td>
                  <td>{category}</td>
                  <td>{price} RSD</td>
                  <td>
                    <button
                      onClick={() =>
                        handleEdit({
                          id,
                          name,
                          description,
                          imageUrl,
                          category,
                          price,
                        })
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminProducts;
