import puppyTypes from './puppies.types';

export const PUPPIES_INITIAL_STATE = {
 puppies: []
};

const puppiesReducer = (state, action) => {
  switch(action.type) {
    case puppyTypes.GET_PUPPIES:
      return{
        ...state,
        puppies: action.payload
        
      };

    case puppyTypes.CREATE_PUPPY:
      console.log("action.payload: ", action.payload);
      console.log("state.puppies: ", state.puppies);
      return{
        ...state,
        puppies: [
          action.payload,
          ...state.puppies
        ]
      };
      default:
        return state;
  }
};

export default puppiesReducer;