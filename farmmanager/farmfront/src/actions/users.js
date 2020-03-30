import axios from "axios";

import { GET_USER } from "./types";

//GET USERS

export const getUsers = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/user/")
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
