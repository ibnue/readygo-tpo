import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Main/Home'
import Login from './components/Appinit/Login';
import Location from './components/Main/Location';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/location' element={<Location />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
