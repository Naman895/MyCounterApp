import React from 'react';
import IncrementingCounter from './IncrementingCounter';

function CounterApp() {
  return (
    <div>
      <h1>Counter App</h1>
      <IncrementingCounter step={1} delay={500} max={10} />
      <IncrementingCounter step={2} delay={1000} max={20} />
      <IncrementingCounter step={5} delay={200} max={50} />
    </div>
  );
}

export default CounterApp;