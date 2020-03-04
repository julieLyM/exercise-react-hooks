import React, { useState, useEffect } from 'react';
import { useToggle } from './useToggle';
import { useArray } from './useArray';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [pause, setPause] = useState(true);

  const { state, toggle, toggleValue } = useToggle(true);

  const { value, clear, add, pop, insertAtIndex } = useArray([1, 2, 3, 4, 5]);

  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(1);
  const [val3, setVal3] = useState(1);
  const [val4, setVal4] = useState(1);

  // const [value, setValue] = useState({ val1, val2, val3, val4 });

  useEffect(() => {
    if (pause) {
      const newTime = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 100);
      return () => clearInterval(newTime);
    }
  }, [pause]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const onPause = () => {
    setPause(oldPause => !oldPause);
  };

  // const onValue = () => {
  //   setValue({
  //     val1: val1 + Math.floor(Math.random() * 100),
  //     val2: val2 + Math.floor(Math.random() * 100),
  //     val3: val3 + Math.floor(Math.random() * 100),
  //     val4: val4 + Math.floor(Math.random() * 100),
  //   });
  // };

  return (
    <div>
      <button onClick={increment}>{counter}</button>
      <p>{time}</p>
      <button onClick={onPause}>Pause</button>
      <div>
        <p>{val1}</p>
        <p>{val2}</p>
        <p>{val3}</p>
        <p>{val4}</p>
        {/* <button onClick={onValue}>update</button> */}
      </div>
      <div>
        <button onClick={toggle}>{state.toString()}</button>
        <button onClick={toggleValue.bind(null, true)}>true</button>
        <button onClick={toggleValue.bind(null, false)}>false</button>
      </div>
      <div>
        {value.map(element => element)}
        <button onClick={clear}>clear</button>
        <button onClick={add.bind(null, 18)}>add</button>
        <button onClick={pop}>pop</button>
        <button onClick={insertAtIndex.bind(null, 42, 3)}>insertAtIndex</button>
      </div>


    </div>
  );
};
