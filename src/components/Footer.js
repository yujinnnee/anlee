import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} 회사 이름. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;