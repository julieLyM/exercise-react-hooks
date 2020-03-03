import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [Time, setTime] = useState()

  useEffect(() => {
    console.log('hellooo');
  });

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>{counter}</button>
    </div>
  );
};
