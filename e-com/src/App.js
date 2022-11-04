import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/about" element = {<About />} />
          <Route path ="/contact" element = {<Contact />} />
          <Route path ="/products" element = {<Products />} />
          <Route path ="/singleproduct/:id" element = {<SingleProduct />} />
          <Route path = "/cart" element ={<Cart />} />
          <Route path = "error" element ={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
