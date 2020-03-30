import { GET_USERS } from "../actions/types.js";

const initialState = {
    Users: []
};

 export default function(state = initialState, action) {

    switch (action.type) {
        case GET_USERS:
            // console.log(action.payload)
            return {
                ...state,
                Users:[...action.payload]//action.payload
            };

        default:
            return state;
    }
}

// const ServiceReducer = (
//     state = { isLoading: false, error: undefined, data: {} },
//     action
// ) => {
//     switch (action.type) {
//         case Actions.SERVICE_PENDING:
//             return Object.assign({}, state, { isLoading: true });
//         case Actions.SERVICE_ERROR:
//             return Object.assign({}, state, {
//                 isLoading: false,
//                 error: action.error
//             });
//         case Actions.SERVICE_SUCCESS:
//             return Object.assign({}, state, {
//                 isLoading: false,
//                 data: action.data
//             });
//         default:
//             return state;
//     }
// };