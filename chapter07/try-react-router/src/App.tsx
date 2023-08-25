import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ScreenA />} />
      <Route path="/b" element={<ScreenB />} />
      <Route path="/c/:userid" element={<ScreenC message="To jest Ekran C" />} />
    </Routes>
  );
}

export default App;
