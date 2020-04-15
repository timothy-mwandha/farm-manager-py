// // postReducer.js

import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        items: action.payload
        //    items:action.users // the payload can be users if you used users in place of payload
      };
    case ADD_USER:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
