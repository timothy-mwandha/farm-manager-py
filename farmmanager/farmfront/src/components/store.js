import { createStore, applyMiddleware } from 'redux';
// import { composeWith }
import thunk from 'redux-thunk';
import UserReducer from '../reducers/UserReducer';

const initialState = {};
const middleware = [thunk];
const store = createStore(
    UserReducer,
    initialState
);

export default store;