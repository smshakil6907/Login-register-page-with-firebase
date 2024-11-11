import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

export default function PrivetRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
}
