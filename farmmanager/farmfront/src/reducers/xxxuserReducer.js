// postReducer.js

import { ADD_USER, GET_USER, DELETE_USER } from "../actions/types";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case DELETE_USER:
      return state.filter(user => user._id !== action.payload.id);
    case GET_USER:
      return action.users;
    default:
      return state;
  }
}
