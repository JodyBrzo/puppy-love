import React, { createContext, useReducer, useEffect } from 'react';
import puppiesReducer, { PUPPIES_INITIAL_STATE } from './puppies.reducer';
import puppiesTypes from './puppies.types';

export const PuppiesContext = createContext(PUPPIES_INITIAL_STATE);

const PuppiesProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(puppiesReducer, PUPPIES_INITIAL_STATE);
  const { puppies } = state;

  const getPuppies = puppies => {
    dispatch ({ 
      type: puppiesTypes.GET_PUPPIES,
      payload: puppies
    });
  };

  const createPuppy = puppy => {
    dispatch ({ 
      type: puppiesTypes.CREATE_PUPPY,
      payload: puppy
    });
  };

  return (
    <PuppiesContext.Provider value={(
      puppies, 
      createPuppy,
      getPuppies
    )} />
  );
}

export default PuppiesProvider;