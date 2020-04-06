import React from 'react';
import './Footer.css';
import chooseLaImg from "../../Assets/images/choose-country.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo-part">
        <div className="footer-logo-part-logo">
          <a href="/"><span>N/<b>Brands</b></span></a>
        </div>
        <div className="footer-logo-part-social-links">
          <div>
            <a href="https://twitter.com"><i className="fa fa-twitter" /></a>
          </div>
          <div>
            <a href="https://facebook.com"><i className="fa fa-facebook-f" /></a>
          </div>
          <div>
            <a href="https://instagram.com"><i className="fa fa-instagram" /></a>
          </div>
          <div>
            <a href="https://linkedin.com"><i className="fa fa-linkedin" /></a>
          </div>
        </div>
        <div className="footer-logo-part-copyright">
          <i className="fa fa-copyright"></i>
          <span>
            Copyright 2017-2020, NewBrands.fr, SAS and its partners
          </span>
        </div>
      </div>
      <div className="footer-social-link-group">
        <div className="footer-social-link-group-header">
          <span>SOCIAL</span>
        </div>
        <div className="footer-social-link-group-links">
          <div>
            <a href="/"><span>Contact Us</span></a>
          </div>
          <div>
            <a href="/"><span>Trade Partners</span></a>
          </div>
          <div>
            <a href="/"><span>Press Releases</span></a>
          </div>
          <div>
            <a href="/"><span>Media Coverage</span></a>
          </div>
        </div>
      </div>
      <div className="footer-social-link-group">
        <div className="footer-social-link-group-header">
          <span>INFO</span>
        </div>
        <div className="footer-social-link-group-links">
          <div>
            <a href="/"><span>Social</span></a>
          </div>
          <div>
            <a href="/"><span>Privacy Policy</span></a>
          </div>
          <div>
            <a href="/"><span>Site Map</span></a>
          </div>
        </div>
      </div>
      <div className="footer-social-link-group">
        <div className="footer-social-link-group-header">
          <span>SERVICE</span>
        </div>
        <div className="footer-social-link-group-links">
          <div>
            <a href="/"><span>Warranty</span></a>
          </div>
          <div>
            <a href="/"><span>Returns</span></a>
          </div>
          <div>
            <a href="/"><span>FAQ</span></a>
          </div>
        </div>
      </div>
      <div className="footer-choose-country">
        <img src={chooseLaImg} alt="Choose Country" />
      </div>
    </div>
  );
}

export default Footer;