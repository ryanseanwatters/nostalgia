import React from 'react';

import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App(){
  return <div> 
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/today" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
