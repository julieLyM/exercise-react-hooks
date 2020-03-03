import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [pause, setPause] = useState(true);

  useEffect(() => {
    const newTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 100);
    return () => clearInterval();
  });

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>{counter}</button>
      <p>{time}</p>
      <button onClick={setPause}>Pause</button>
    </div>
  );
};
