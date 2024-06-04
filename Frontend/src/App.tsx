import React from 'react';
import './App.css';
import Navbar from './components/layouts/header-footer/Navbar';
import HomePage from './components/layouts/homepage/HomePage';
import Footer from './components/layouts/header-footer/Footer';
function App() {
  const [keySearch, setKeySearch] = React.useState('');

  return (
    <div className='App'>
      <Navbar keySearch={keySearch} setKeySearch={setKeySearch}/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;