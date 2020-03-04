import React, { useState } from 'react';

export const useToggle = initialState => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(oldState => !oldState);
  };

  const toggleValue = value => setState(value);

  return { state, toggle, toggleValue };
};
