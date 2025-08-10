import React from "react";
import "./register.css";

export default function Register() {
  const handleGoogleSignUp = () => {
    alert("Google sign-up coming soon!");
  };

  const handleFacebookSignUp = () => {
    alert("Facebook sign-up coming soon!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
  };

  const handleInstagram = () => {
    alert("Instagram sign-up coming soon!");
  };


  return (
    <div className="register-container">
      <h1>Create Your Account</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>

      <div className="divider">
        <span></span>
      </div>

      <div className="social-buttons">
        <button onClick={handleGoogleSignUp} className="btn-google">
          Continue with Google
        </button>
        <button onClick={handleFacebookSignUp} className="btn-facebook">
          Continue with Facebook
        </button>
        <button onClick={handleInstagram} className="btn-instagram">
          Continue with Instagram
        </button>
      </div>
    </div>
  );
}