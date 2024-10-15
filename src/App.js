import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [ cartItems, setCartItems] = useState([])
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  }
  const handleCheckout = () => {
    setCartItems([])
  }
  return (
    <BrowserRouter >
      <Header cartItems={cartItems}/>
      <Routes>
          <Route path='/' element={<Products handleAddToCart={handleAddToCart} />}/>
          <Route path='/detail/:id' element={<ProductDetails handleAddToCart={handleAddToCart}/>}/>
          <Route path='/cart' element={<Cart cartItems={cartItems} handleCheckout={handleCheckout}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
