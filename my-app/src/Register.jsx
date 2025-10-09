import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = { username, password };

    try {
  const response = await fetch("http://localhost:8000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.status === "success") {
    localStorage.setItem("isLoggedIn", "true");
    setMessage("✅ Account created successfully!");
    navigate("/freenot");
  } else {
    setMessage("❌ Failed to create account!");
  }
} catch (error) {
  console.error("Error:", error);
  setMessage("⚠️ An error occurred!");
}

  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.tagline}>
          If you want a <i class="fa-solid fa-circle-check" style={{ color: "blue" }}></i> <br />
          then enter your Instagram ID and password 
        </h3>
        <h2 style={styles.heading}>Register</h2>

        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="Username / ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Get a blue tick
          </button>
        </form>

        <p style={styles.message}>{message}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    width: "380px",
    textAlign: "center",
    border: "2px solid #fff",
  },
  tagline: {
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    lineHeight: "1.4",
  },
  heading: {
    marginBottom: "20px",
    color: "#bc1888",
    fontSize: "26px",
    fontWeight: "bold",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    padding: "12px",
    marginTop: "15px",
    background:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    border: "none",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default Register;
