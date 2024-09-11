import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">기민천</h1>
        <nav className="nav">
          <a href="#about">소개</a>
          <a href="#services">기술</a>
          <a href="#contact">문의</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;