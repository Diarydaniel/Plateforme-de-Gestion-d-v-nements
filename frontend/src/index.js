import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import Header from './components/section/header';
import Hero from './components/section/hero';
import Footer from './components/section/footer';
import About from './components/about';
import Events from './components/events';
import Brands from './components/brands';
import Temoins from './components/temoins';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />

    <About />
    <Events />
    <Brands />
    <Temoins />
    <Contact />


    <Footer />
  </React.StrictMode>
);

reportWebVitals();


