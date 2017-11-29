import * as types from '../actions/actionTypes';

const initialState = {
  logs: []
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.getResponse:
      return {
        ...state,
        logs: [...state.logs, { intent: "user", data: action.usrMsg}, action.json]
      }
      break;
    case types.newUser:
      const character = {
        'androssi': '안드로시',
        'khun': '쿤',
        'bam': '밤'
      };
      var userMsg = character[action.name] + "님이 입장하셨습니다.";
      var initialLog = [{ intent: "user", data: userMsg}, {intent: "initial", data: "안녕하세요. " + character[action.name] + "님!"}];
      return {
        ...state,
        logs: initialLog
      }
      break;
    default:
      return state;
  }
};

export default message;
