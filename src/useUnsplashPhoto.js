import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { auth } from './auth.js';

const DEFAULT_STATE = {
  isLoading: false,
  images: [],
  error: null,
};

const ACTIONS_TYPES = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.LOADING:
      return { ...DEFAULT_STATE, isLoading: true };

    case ACTIONS_TYPES.SUCCESS:
      return { isLoading: false, images: action.payload };
    case ACTIONS_TYPES.FAILURE:
      return { isLoading: false, error: { ...DEFAULT_STATE } };
    default:
      return state;
  }
};

export const useUnsplashPhoto = query => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    dispatch({ type: ACTIONS_TYPES.LOADING });
    try {
      const fetchData = async () => {
        const {
          data: { results: data },
        } = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${auth.api_key}&query=${query}`
        );
        dispatch({ type: ACTIONS_TYPES.SUCCESS, payload: data });
      };
      fetchData();
    } catch (e) {
      dispatch({ type: ACTIONS_TYPES.FAILURE, payload: e });
    }
  }, [query]);
  return state;
};
