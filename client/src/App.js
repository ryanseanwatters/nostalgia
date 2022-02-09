import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components//Login/Login';
import ViewEntry from './components/Home/ViewEntry';

function App(){
  return <div> 
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/today" element={<Home />} />
        {/* <Route path="/view/:date" element={<ViewEntry />} /> */}
        {/* <Route path="/settings" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
