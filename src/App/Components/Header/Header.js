import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className = "header">
      <div className = "logo">
        <span>N/<b className = "brand">B</b></span>
        <span className="brand-tail">rands</span>
      </div>
      <div className = "menu">
        <span>Home /</span>
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