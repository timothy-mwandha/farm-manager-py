import {
  GET_NEWCONSUMABLE,
  DELETE_NEWCONSUMABLE,
  DETAIL_NEWCONSUMABLE,
  ADD_NEWCONSUMABLE,
  UPDATE_NEWCONSUMABLE
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEWCONSUMABLE:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_NEWCONSUMABLE:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_NEWCONSUMABLE:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
