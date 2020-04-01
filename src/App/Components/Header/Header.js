import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className = "header">
      <div className = "logo">
        <a href = "#">
          <span>N/<b className = "brand">B</b></span>
          <span className="brand-tail">rands</span>
        </a>
      </div>
      <div className = "menu">
        <div className = "dropdown">
          <button class = "dropdown-content">
            <a href = "#">Link1</a>
            <a href = "#">Link2</a>
            <a href = "#">Link3</a>
          </button>
        </div>
      </div>
      <div className = "group">
        <span>How it work</span>
      </div>
      <div className = "en">
        <span>/ En</span>
      </div>
      <div className = "auth">
        <div className = "login">
          <span>Login / </span>
        </div>
        <div className = "register">
          <span> Register</span>
        </div>
      </div>
    </div>
  );
}

export default Header;