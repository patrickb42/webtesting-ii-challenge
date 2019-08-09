import React, { useState } from 'react';

import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App({ testState }) {
  const [balls, setBalls] = useState((testState && testState.balls.data) || 0);
  const [strikes, setStrikes] = useState((testState && testState.strikes.data) || 0);
  
  const metrics = [];
  metrics.push({ label: 'Balls', data: balls });
  metrics.push({ label: 'Strikes', data: strikes });
  
  const resetMetrics = () => {
    setBalls(0);
    setStrikes(0);
  }
  
  const buttons = [];
  buttons.push({ label: 'Ball', onClick: () => {
    setBalls((prevState) => {
      const updatedState = prevState + 1;
      
      if (updatedState > 3) {
        resetMetrics();
      } else {
        return updatedState;
      }
    });
  }});
  buttons.push({ label: 'Strike', onClick: () => {
    setStrikes((prevState) => {
      const updatedState = prevState + 1;
      
      if (updatedState > 2) {
        resetMetrics();
      } else {
        return updatedState;
      }
    });
  }});
  buttons.push({ label: 'Foul', onClick: () => {
    setStrikes((prevState) => {
      if (prevState > 1) {
        return (prevState);
      } else {
        return prevState + 1;
      }
    });
  }});
  buttons.push({ label: 'Hit', onClick: () => {
    setStrikes((prevState) => {
      resetMetrics();
    });
  }});

  return (
    <div data-testid="App" className="App">
      <Display metrics={metrics} />
      <Dashboard buttons={buttons} />
    </div>
  );
}

export default App;
