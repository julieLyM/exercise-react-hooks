import React, { useState, useEffect(() => {
    effect
    return () => {
        cleanup
    };
}, [input]) } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>{counter}</button>
    </div>
  );
};
