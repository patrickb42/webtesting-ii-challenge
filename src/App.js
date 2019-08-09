import React, { useState } from 'react';

import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App({ testState }) {
  const [balls, setBalls] = useState((testState && testState.balls.data) || 0);
  const [strikes, setStrikes] = useState((testState && testState.strikes.data) || 0);
  
  const newMetric = ({ label, data }) => {
    return { label, data };
  };
  const metrics = [];
  metrics.push(newMetric({ label: 'Balls', data: balls }));
  metrics.push(newMetric({ label: 'Strikes', data: strikes }));
  
  const newButton = ({ label, onClick }) => {
    return { label, onClick };
  }
  const buttons = [];

  const resetMetrics = () => {
    setBalls(0);
    setStrikes(0);
  }
  buttons.push(newButton({ label: 'Ball', onClick: () => {
    setBalls((prevState) => {
      const updatedState = prevState + 1;
      
      if (updatedState > 3) {
        resetMetrics();
      } else {
        return updatedState;
      }
    });
  }}));
  buttons.push(newButton({ label: 'Strike', onClick: () => {
    setStrikes((prevState) => {
      const updatedState = prevState + 1;
      
      if (updatedState > 2) {
        resetMetrics();
      } else {
        return updatedState;
      }
    });
  }}));
  buttons.push(newButton({ label: 'Foul', onClick: () => {
    setStrikes((prevState) => {
      if (prevState > 1) {
        return (prevState);
      } else {
        return prevState + 1;
      }
    });
  }}));
  buttons.push(newButton({ label: 'Hit', onClick: () => {
    setStrikes((prevState) => {
      resetMetrics();
    });
  }}));

  return (
    <div data-testid="App" className="App">
      <Display metrics={metrics} />
      <Dashboard buttons={buttons} />
    </div>
  );
}

export default App;
