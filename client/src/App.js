import React from 'react';

import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components//Login/Login';

function App(){
  return <div> 
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/today" element={<Home />} />
        {/* <Route path="/colors" element={<Home />} /> */}
        {/* <Route path="/settings" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
