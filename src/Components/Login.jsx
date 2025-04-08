import { useState } from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/login.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login logic
    if (email && password) {
      // Save user data to localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");
      window.location.href = "/"; // Redirect to home page
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-controls">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-controls">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="social-container">
          <div className="social-media">
            <h4>or register with</h4>
            <div className="media-icons">
              <div>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <p>
            Already have an account? <Link to="/register">Register</Link>
          </p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
