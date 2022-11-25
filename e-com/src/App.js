import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import { GlobalStyle } from './pages/GlobalStyle';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

function App() {
  const theme = {
    colors:{
      text: "rgba(29,29,29,.8)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg: "#F6F*FA",
      footer_bg: "#0a1435",
      btn:"rgba(98 84 243)",
      border:"rgba(98, 84, 243, 0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      heading: "black"
    },
    media:{
      mobile: "768px",
      tab: "998px"
    }
  }
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/about" element = {<About />} />
          <Route path ="/contact" element = {<Contact />} />
          <Route path ="/products" element = {<Products />} />
          <Route path ="/singleproduct/:id" element = {<SingleProduct />} />
          <Route path = "/cart" element ={<Cart />} />
          <Route path = "*" element ={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
