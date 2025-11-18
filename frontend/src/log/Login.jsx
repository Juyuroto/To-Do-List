import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password.");
      return;
    }

    if (username === "a" && password === "b") {
      onLogin();
      navigate("/"); // redirige vers ToDoList
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}

        <label>
          Username:
          <input className="saisi" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username"/>
        </label>

        <label>
          Password:
          <input className="saisi" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
        </label>

        <button type="submit">Log In</button>

        {/* Nouveau bouton Sign Up */}
        <button
          type="button" onClick={() => navigate("/signup")}
          style={{
            marginTop: "10px",
            backgroundColor: "transparent",
            color: "black",
            border: "none",
            textDecoration: "underline",
            cursor: "pointer",
          }}>
          Create an account
        </button>
      </form>
    </div>
  );
}
