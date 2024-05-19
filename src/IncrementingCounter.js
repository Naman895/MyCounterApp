import React, { useState, useEffect, useRef } from 'react';

function IncrementingCounter({ step = 1, delay = 500, max = Infinity }) {
  const [count, setCount] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isIncrementing) {
      timeoutRef.current = setTimeout(() => {
        setCount(prevCount => Math.min(prevCount + step, max));
        setIsIncrementing(false);
      }, delay);
    } else if (isDecrementing) {
      timeoutRef.current = setTimeout(() => {
        setCount(prevCount => Math.max(prevCount - step, 0));
        setIsDecrementing(false);
      }, delay);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isIncrementing, isDecrementing, step, delay, max]);

  const increment = () => {
    if (!isIncrementing) {
      setIsIncrementing(true);
    }
  };

  const decrement = () => {
    if (!isDecrementing) {
      setIsDecrementing(true);
    }
  };

  const reset = () => {
    setCount(0);
    setIsIncrementing(false);
    setIsDecrementing(false);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment} disabled={count >= max}>Increment</button>
      <button onClick={decrement} disabled={count <= 0}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default IncrementingCounter;