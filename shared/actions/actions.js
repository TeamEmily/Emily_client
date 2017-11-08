import * as types from './actionTypes';

export function sendMessage(msg) {
  return {
    type: types.SEND_MESSAGE
  };
}
