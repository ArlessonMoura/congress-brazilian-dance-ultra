import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
