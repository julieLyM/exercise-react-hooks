import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [pause, setPause] = useState(true);

  useEffect(() => {
    if (pause) {
      const newTime = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 100);
      console.log(time);
      console.log(pause);
      return () => clearInterval(newTime);
    }
  });

  const increment = () => {
    setCounter(counter + 1);
  };

  const onPause = () => {
    setPause(oldPause => !oldPause);
  };

  return (
    <div>
      <button onClick={increment}>{counter}</button>
      <p>{time}</p>
      <button onClick={onPause}>Pause</button>
    </div>
  );
};
