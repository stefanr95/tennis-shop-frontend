import "../styles/AuthForm.css";
import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/auth/login", {
        usernameOrEmail: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/"); // Redirect na home
    } catch (err) {
      setError("Neispravan email ili lozinka");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Prijavi se</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <label>Email adresa:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Lozinka:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Prijavi se</button>
      </form>
    </div>
  );
};

export default LoginPage;