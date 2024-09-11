import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;