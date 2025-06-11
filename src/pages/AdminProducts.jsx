import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminProducts = () => {
    
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    imageUrl: '',
    category: '',
    price: '',
  });
  const [editingProductId, setEditingProductId] = useState(null);
  const token = localStorage.getItem('token'); // Preuzimanje tokena

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/products');
      setProducts(res.data.content);
    } catch (error) {
      console.error('❌ Greška prilikom dohvatanja proizvoda:', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      if (editingProductId) {
        // Update (PUT)
        await axios.put(`http://localhost:8080/api/products/update/${editingProductId}`, form, { headers });
        console.log('✅ Proizvod izmenjen');
      } else {
        // Add (POST)
        await axios.post('http://localhost:8080/api/products/add', form, { headers });
        console.log('✅ Proizvod dodat');
      }

      setForm({
        name: '',
        description: '',
        imageUrl: '',
        category: '',
        price: '',
      });
      setEditingProductId(null);
      fetchProducts();
    } catch (error) {
      console.error('❌ Greška prilikom dodavanja/izmene proizvoda:', error);
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingProductId(product.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('🗑️ Proizvod obrisan');
      fetchProducts();
    } catch (error) {
      console.error('❌ Greška prilikom brisanja proizvoda:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛠️ Admin Panel - Dodavanje / Izmena proizvoda</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <input
          type="text"
          name="name"
          placeholder="Naziv"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Opis"
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
          placeholder="Kategorija"
          value={form.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Cena"
          value={form.price}
          onChange={handleChange}
          step="0.01"
          required
        />
        <button type="submit">
          {editingProductId ? 'Izmeni proizvod' : 'Dodaj proizvod'}
        </button>
      </form>

      <h3>📦 Lista proizvoda</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv</th>
            <th>Opis</th>
            <th>Slika</th>
            <th>Kategorija</th>
            <th>Cena</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td><img src={p.imageUrl} alt={p.name} width="50" /></td>
              <td>{p.category}</td>
              <td>{p.price} RSD</td>
              <td>
                <button onClick={() => handleEdit(p)}>✏️ Izmeni</button>
                <button onClick={() => handleDelete(p.id)}>🗑️ Obriši</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;