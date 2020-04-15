// // postReducer.js

import {
  GET_ADVANCES,
  GET_ADVANCE,
  ADD_ADVANCE,
  DELETE_ADVANCE,
  UPDATE_ADVANCE
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADVANCES:
      return {
        ...state,
        items: action.payload
        //    items:action.advances // the payload can be advances if you used advances in place of payload
      };
    case GET_ADVANCE:
      return {
        ...state,
        item: action.payload
      };
    case ADD_ADVANCE:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_ADVANCE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
