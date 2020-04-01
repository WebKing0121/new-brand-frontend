import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className = "footer">
      <div className = "logo-part">
        <div className = "logo">
          <a href = "#"><span>N/<b>Brands</b></span></a>
        </div>
        <div className = "social-link-icons">
          <div>
            <i className = "fa fa-twitter"></i>
          </div>
          <div>
            <i className = "fa fa-facebook-f"></i>
          </div>
          <div>
            <i className = "fa fa-instagram"></i>
          </div>
          <div className = "linkedin-icon">
            {/* <i class="fa fa-linkedin"></i> */}
            <span>in</span>
          </div>
        </div>
        <div className = "copyright">
          <i className = "fa fa-copyright"></i>
          <span>
            Copyright 2017-2020, NewBrands.fr, SAS and its partners
          </span>
        </div>
      </div>
      <div className = "social-link-group">
        <div className = "header">
          <span>SOCIAL</span>
        </div>
        <div className = "list-items">
          <div>
            <a href = "#"><span>Contact Us</span></a>
          </div>
          <div>
            <a href = "#"><span>Trade Partners</span></a>
          </div>
          <div>
            <a href = "#"><span>Press Releases</span></a>
          </div>
          <div>
            <a href = "#"><span>Media Coverage</span></a>
          </div>
        </div>
      </div>
      <div className = "social-link-group">
        <div className = "header">
          <span>INFO</span>
        </div>
        <div className = "list-items">
          <div>
            <a href = "#"><span>Social</span></a>
          </div>
          <div>
            <a href = "#"><span>Privacy Policy</span></a>
          </div>
          <div>
            <a href = "#"><span>Site Map</span></a>
          </div>
        </div>
      </div>
      <div className = "social-link-group">
        <div className = "header">
          <span>SERVICE</span>
        </div>
        <div className = "list-items">
          <div>
            <a href = "#"><span>Warranty</span></a>
          </div>
          <div>
            <a href = "#"><span>Returns</span></a>
          </div>
          <div>
            <a href = "#"><span>FAQ</span></a>
          </div>
        </div>
      </div>
      <div className = "choose-country">
      </div>
    </div>
  );
}

export default Footer;