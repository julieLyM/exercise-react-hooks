import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };

  return <div>{counter}</div>;
};
