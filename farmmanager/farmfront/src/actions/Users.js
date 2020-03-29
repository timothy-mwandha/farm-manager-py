import axios from "axios";

import { GET_USERS } from "./types";

//GET USERS

export const getUser = () => dispatch => {
    axios
        .get("/api/user/")
        .then(res => {
            console.log(res);
            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};
