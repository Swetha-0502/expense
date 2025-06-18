import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div style={{ textAlign: "center" }}>
    <h1>Welcome to Expense Tracker</h1>
    <Link to="/login">
      <button>Login</button>
    </Link>
    <Link to="/register">
      <button>Register</button>
    </Link>
  </div>
);

export default Home;
