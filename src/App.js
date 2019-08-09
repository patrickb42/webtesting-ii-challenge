import React, { useState } from 'react';

import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App({ testState }) {
  const [balls, setBalls] = useState((testState && testState.balls)
    || {
      label: 'Balls',
      data: 0,
    }
  );
  const [strikes, setStrikes] = useState((testState && testState.strikes)
    || {
      label: 'Strikes',
      data: 0,
    }
  );

  const metrics = [balls, strikes];

  return (
    <div data-testid="App" className="App">
      <Display metrics={metrics} />
      <Dashboard setBalls={setBalls} setStrikes={setStrikes} />
    </div>
  );
}

export default App;
