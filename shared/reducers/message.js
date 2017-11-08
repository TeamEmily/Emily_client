import * as types from '../actions/actionTypes';

const initialState = {
  logs: []
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return state;
    default:
      return state;
  }

};

export default message;
