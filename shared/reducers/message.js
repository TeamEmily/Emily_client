import * as types from '../actions/actionTypes';

const initialState = {
  logs: []
};

const message = (state = initialState, action) => {
  console.log("hi");
  console.log(action.type);
  switch (action.type) {
    case types.getResponse:
      return {
        ...state,
        logs: [...state.logs, { intent: "user", data: action.usrMsg}, action.json]
      }
    default:
      return state;
  }

};

export default message;
