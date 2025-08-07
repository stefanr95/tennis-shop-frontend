import { useState } from 'react';
import axios from 'axios';
import "../styles/RegisterPage.css"

const RegisterAdmin = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register-admin', form);
      alert('Admin successfully registered!');
    } catch (error) {
      console.error('Error registering admin:', error);
      alert('Failed to register admin.');
    }
  };

  return (
    <div>
      <h2>Register Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Register Admin</button>
      </form>
    </div>
  );
};

export default RegisterAdmin;