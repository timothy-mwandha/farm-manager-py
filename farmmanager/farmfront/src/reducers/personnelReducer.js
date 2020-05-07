import {
  GET_PERSONNEL,
  DETAIL_PERSONNEL,
  DELETE_PERSONNEL,
  ADD_PERSONNEL,
  UPDATE_PERSONNEL
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PERSONNEL:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_PERSONNEL:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_PERSONNEL:
      return {
        ...state,
        item: action.payload
      };
    case ADD_PERSONNEL:
      return {
        ...state,
        item: action.payload
      };

    // case UPDATE_PERSONNEL:{
    //             let { PERSONNEL } = action.data;

    //             //clone the current state
    //             let clone = JSON.parse(JSON.stringify(state.PERSONNELs));

    //             //check if bookmark already exist
    //             const index = clone.findIndex((obj) => obj.id === PERSONNEL.id);

    //             //if the PERSONNEL is in the array, update the PERSONNEL
    //             if (index !== -1) clone[index] = PERSONNEL;

    //             return {...state, PERSONNELs: clone};
    //         };

    default:
      return state;
  }
}
