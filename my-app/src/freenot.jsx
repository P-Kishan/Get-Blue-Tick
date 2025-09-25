import React from "react";
import { useNavigate } from "react-router-dom";

function FreeNot() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // logout
    navigate("/"); // back to Register page
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.text}>💡 Beta, muft kuch nahi milta! 💡</h1>
        <p style={styles.subText}>Mehnat karo, Fir Fal milega 🍎</p>
        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
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
    background: "linear-gradient(135deg, #ff6a00, #ee0979)", // beautiful gradient
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "center",
    border: "2px solid #fff",
    minWidth: "300px",
  },
  text: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ff3c00",
    marginBottom: "20px",
  },
  subText: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 25px",
    background: "linear-gradient(45deg, #ff6a00, #ee0979)",
    border: "none",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default FreeNot;
