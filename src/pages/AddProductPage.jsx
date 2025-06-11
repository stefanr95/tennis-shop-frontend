import { useState } from "react";
import axios from "../api/axios";
import "../styles/AddProductPage.css";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const token = localStorage.getItem("token");

      await axios.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setSuccessMessage("Proizvod uspešno dodat.");
      setFormData({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        category: ""
      });
    } catch (err) {
      console.error(err);
      setErrorMessage("Greška prilikom dodavanja proizvoda.");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Dodaj novi proizvod</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input type="text" name="name" placeholder="Naziv" value={formData.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Opis" value={formData.description} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Cena" value={formData.price} onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="URL slike" value={formData.imageUrl} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Kategorija" value={formData.category} onChange={handleChange} required />
        <button type="submit">Dodaj proizvod</button>
      </form>

      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default AddProductPage;