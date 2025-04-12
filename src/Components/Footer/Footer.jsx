import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="rotating-blocks">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>

      <div className="social-icons">
        <a href="https://github.com/Hareesh061" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/hareesh-naik" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:hareeshnaik836@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <p className="footer-text">© 2025 Hareesh Naik. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
