import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ExpensePage from "./pages/ExpensePage";

const App: React.FC = () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/expenses" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/expenses"
          element={isLoggedIn ? <ExpensePage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
