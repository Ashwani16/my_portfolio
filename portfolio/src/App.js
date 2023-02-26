import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/navbar';
import { Home } from './components/Home';
function App() {

  
  return (
    <div  className={`App`}>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
