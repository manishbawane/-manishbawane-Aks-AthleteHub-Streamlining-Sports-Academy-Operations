import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "../styles/LoginForm.css"; // Import the styles

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (email === "" || password === "") {
      setError("Both fields are required!");
    } else {
      setError(""); // Clear error if input is valid

      // Dummy role check (Replace with your API logic or more detailed checks)
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        // Store role in sessionStorage or localStorage
        sessionStorage.setItem("userRole", foundUser.role);

        // Redirect to the appropriate dashboard based on role
        if (foundUser.role === "Admin") {
          navigate("/admin-dashboard");
        } else if (foundUser.role === "User") {
          navigate("/user-dashboard");
        } else if (foundUser.role === "Trainer") {
          navigate("/trainer-dashboard");
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    }
  };

  const handleCreateAccount = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Login</button>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <div className="create-account">
          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={handleCreateAccount}
            >
              Create one
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
