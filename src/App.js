import React, { useState } from 'react';

import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App({ testState }) {
  const newMetric = ({ label, data }) => {
    return { label, data };
  };
  const metrics = [];
  const [balls, setBalls] = useState((testState && testState.balls.data) || 0);
  metrics.push(newMetric({ label: 'Balls', data: balls }));
  const [strikes, setStrikes] = useState((testState && testState.strikes.data) || 0);
  metrics.push(newMetric({ label: 'Strikes', data: strikes }));

  return (
    <div data-testid="App" className="App">
      <Display metrics={metrics} />
      <Dashboard setBalls={setBalls} setStrikes={setStrikes} />
    </div>
  );
}

export default App;
