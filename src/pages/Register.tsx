import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
