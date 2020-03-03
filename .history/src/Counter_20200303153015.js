import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [pause, setPause] = useState(true);

  useEffect(() => {
    const newTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 100);
    console.log(time);

    const pauseTime = setInterval(() => {}, 5000);
    console.log('pause');
  });

  const increment = () => {
    setCounter(counter + 1);
  };

  const onPause = () => {
    setPause(pause === false);
  };

  return (
    <div>
      <button onClick={increment}>{counter}</button>
      <p>{time}</p>
      <button onClick={break}>Pause</button>
    </div>
  );
};
