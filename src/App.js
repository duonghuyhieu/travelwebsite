import React from 'react';
import Navbar from './components/home/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/home/Footer';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import CentralRiver from './components/products/product/CentralRiver';
import PhuQuoc from './components/products/product/PhuQuoc';
import Hue from './components/products/product/Hue';
import Northwest from './components/products/product/Northwest';
import PhongNha from './components/products/product/PhongNha';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/products/CentralRiver' element={<CentralRiver/>} />
          <Route path='/products/PhuQuoc' element={<PhuQuoc/>} />
          <Route path='/products/Hue' element={<Hue/>} />
          <Route path='/products/Northwest' element={<Northwest/>} />
          <Route path='/products/PhongNha' element={<PhongNha/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;