import * as types from './actionTypes';
import RESTManager from '../service/messageService';
export const sendMessage = (msg) => {
  return (dispatch) => {
      return RESTManager.sendMessage(msg)
        .then(json => dispatch(getResponse(json, msg)))
  };
}

export const getResponse = (json, msg) => {
  console.log(json);
  return {
    type: types.getResponse,
    json: json,
    usrMsg: msg
  };
}
