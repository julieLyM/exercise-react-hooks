import React, { useState } from 'react';

export const useArray = initialState => {
  const [state, setState] = useState(initialState);

  const clear = () => {
    setState([]);
  };

  const add = value => {
    setState([...state, value]);
  };

  const pop = () => {
    setState(state.slice(0, state.length - 1));
  };

  const insertAtIndex = (value, i) => {
    setState([...state.slice(0, i), value, state.slice(i)]);
  };

  return { clear, add, pop, value: state, insertAtIndex };
};
