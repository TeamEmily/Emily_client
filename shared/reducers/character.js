import * as types from '../actions/actionTypes';

const initialState = {
  name: ''
};

const character = (state = initialState, action) => {
  switch (action.type) {
    case types.setCharacter:
      return {
        name: action.name
      }
    default:
      return state;
  }
};

export default character;
