import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Audio from './components/audio';
import Face from './components/face';
import Text from './components/text';
import Landing from './components/Landing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/audio" element={<Audio/>}/>
      <Route path="/face" element={<Face/>}/>
      <Route path="/text" element={<Text/>}/>
      <Route path="/text" element={<Text/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
