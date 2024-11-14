import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Hero';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import About from './About';
import Layout423 from './Service';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <About />
    <Layout423 />


    {/* Footer */}
    <Footer /> 
  </React.StrictMode>
);

reportWebVitals();


