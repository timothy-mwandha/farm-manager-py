import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
  // compose(
  //   applyMiddleware(...middleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  // )// This is used for the client side, 'chrome extension'
);
export default store;
