import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory/>}/>
        <Route path='/women' element={<ShopCategory/>}/>
        <Route path='/kids' element={<ShopCategory/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='/productId' element={<Product/>} />
        </Route>
        <Route path='/loginSignup' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      
      </BrowserRouter>
    
    
 
    </div>
  );
}

export default App;
