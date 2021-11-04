import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Players from './components/Players';
import Teams from './components/Teams';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/players/" element={<Players />} />
          <Route path="/teams/" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
