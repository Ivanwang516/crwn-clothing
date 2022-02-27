import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;