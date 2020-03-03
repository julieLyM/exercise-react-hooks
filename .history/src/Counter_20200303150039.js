import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter + 1;
  };

  return <div></div>;
};
