import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // on réutilise le même style

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulation d'inscription (stockage local)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((u) => u.username === username);

    if (userExists) {
      setError("Username already exists.");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully!");
    setTimeout(() => navigate("/"), 1500); // redirige après 1,5s
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign Up</h1>
        {error && <p className="error-message">{error}</p>}
        {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Choose a username"/>
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Choose a password"/>
        </label>

        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password"/>
        </label>

        <button type="submit">Sign Up</button>

        <button
          type="button" onClick={() => navigate("/login")} 
          style={{ 
            marginTop: "10px", 
            backgroundColor: "transparent", 
            color: "black", border: "none", 
            textDecoration: "underline", 
            cursor: "pointer",
          }}>
          Already have an account? Log in
        </button>
      </form>
    </div>
  );
}
