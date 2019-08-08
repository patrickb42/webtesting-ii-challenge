import React, { useState } from 'react';

import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div data-testid="App" className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard setBalls={setBalls} setStrikes={setStrikes} />
    </div>
  );
}

export default App;
