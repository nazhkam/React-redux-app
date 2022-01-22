import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import { Header } from './components'

import './scss/app.scss';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
