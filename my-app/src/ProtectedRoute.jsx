import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    // User logged in nahi → Register page par redirect
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
