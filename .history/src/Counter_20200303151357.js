import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const newTime = setInterval(() => {
        setTime(new Date().to)
    }, interval);
  },100);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>{counter}</button>
    </div>
  );
};
