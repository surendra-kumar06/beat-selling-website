import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Artist from './components/artist/Artist';
import Login from './components/loginsignup/Login';
import Signup from './components/loginsignup/Signup';
import Cart from './components/cart/Cart'; 
import Checkout from './components/cart/Checkout';
import PageNotFound from './pages/PageNotFound'
import FAQPage from './pages/Faqpage';
import LicenseInfoPage from './pages/LicenseInfo';


const App = () => {
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/beat-selling-website" element={<Home />}>
        </Route>
        <Route path='/artist/:id' element={<Artist />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/faq' element={<FAQPage />}></Route>
        <Route path="/licenseinfo" element={<LicenseInfoPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App