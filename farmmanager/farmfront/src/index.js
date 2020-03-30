// index.js

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from "../App";
import rootReducer from "./reducers";
import { getAllUsers } from "./actions/index";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getAllUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

// import App from "../App";
