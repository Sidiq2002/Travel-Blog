import { useState } from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/register.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (fullName === "" || email === "" || password === "") {
      alert("Input is empty.");
      return;
    }
    // Save user data to localStorage
    const userData = {
      fullName,
      email,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
    alert("Registration successful!");
    navigate("/"); // Redirect to home page
  };
  return (
    <div className="register">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-controls">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
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
          <div className="form-controls">
            <label htmlFor="name">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
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
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
