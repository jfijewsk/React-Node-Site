import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import React, { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-face">
      <Navbar/>
    </div>
  );
}

export default App;
