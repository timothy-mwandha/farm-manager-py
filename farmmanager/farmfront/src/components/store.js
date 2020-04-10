// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import UserReducer from '../reducers/UserReducer';

// const initialState = {};
// const middleware = [thunk];
// const store = createStore(
//     UserReducer,
//     initialState,
//     applyMiddleware
// );

// export default store;

import {createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;