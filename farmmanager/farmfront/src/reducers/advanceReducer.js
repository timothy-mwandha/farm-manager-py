// // postReducer.js

import { FETCH_ADVANCES, ADD_ADVANCE, DELETE_ADVANCE, UPDATE_ADVANCE } from "../actions/types";

const initialState = {
    items: [],
    item:{}
}

export default function (state=initialState, action){
    switch(action.type){
      case FETCH_ADVANCES:
       return {
           ...state,
           items:action.payload
        //    items:action.advances // the payload can be advances if you used advances in place of payload 
       };
       case ADD_ADVANCE:
       return {
           ...state,
           item:action.payload
       };
       default:
        return state;
    }
}



