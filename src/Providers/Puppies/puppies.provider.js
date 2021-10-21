import React, { createContext, useReducer, useContext } from 'react';
import puppiesReducer, { PUPPIES_INITIAL_STATE } from './puppies.reducer';
import puppiesTypes from './puppies.types';

export const PuppiesContext = createContext(PUPPIES_INITIAL_STATE);

const PuppiesProvider = (props) => {
  const [state, dispatch] = useReducer(puppiesReducer, PUPPIES_INITIAL_STATE);
  const { puppies } = state;

  const getAllPuppies = puppies => {
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
    <PuppiesContext.Provider value={[
      state,
      dispatch, 
      createPuppy,
      getAllPuppies
    ]}>
      {props.children}
    </PuppiesContext.Provider>
  );
}

const usePuppiesContext = () => {
  return useContext(PuppiesContext);
};

export { PuppiesProvider, usePuppiesContext };
// export default PuppiesProvider;