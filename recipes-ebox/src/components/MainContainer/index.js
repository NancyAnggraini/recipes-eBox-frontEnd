import React from 'react';
import './index.css';
import Footer from '../Footer';

export default ({ children }) => (
  <div className="Main-Container">
    { children }
    <Footer />
  </div>
);
