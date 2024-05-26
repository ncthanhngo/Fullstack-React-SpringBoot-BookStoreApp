import React from 'react';
import './App.css';
import Navbar from './components/layouts/header-footer/Navbar';
import HomePage from './components/layouts/homepage/HomePage';
import Footer from './components/layouts/header-footer/Footer';
import Products from './components/layouts/product/Products';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;