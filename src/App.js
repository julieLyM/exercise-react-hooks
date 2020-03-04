import React, { useReducer } from 'react';
import { Counter } from './Counter';
import { useUnsplashPhoto } from './useUnsplashPhoto';
import './App.css';

function App() {
  const state = useUnsplashPhoto('flower');
  const { isLoading, images, error } = state;
  const loader = isLoading && <div>WAIT LOADING</div>;
  const errors = error && <div>ERROR</div>;
  return (
    loader ||
    errors || (
      <div>
        <Counter />
        <div>
          {images.map(({ urls: { small: image } }) => (
            <img src={image} />
          ))}
        </div>
      </div>
    )
  );
}

export default App;
