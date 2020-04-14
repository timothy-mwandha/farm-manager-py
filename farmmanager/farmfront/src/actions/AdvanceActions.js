import axios from "axios";

import { GET_ADVANCE, DELETE_ADVANCE } from "./types";

export const getAdvances = () => (dispatch) => {
    axios.get("http://localhost:8000/api/advance/").then((res) =>
        // .then((advances) =>
        dispatch({
            type: GET_ADVANCE,
            payload: advances,
        })
    );
};

export const deleteAdvance = (id) => (dispatch) => {
    axios.delete(`http://localhost:8000/api/advance/${id}/`).then((res) => {
        // .then((advances) =>
        dispatch({
            type: DELETE_ADVANCE,
            payload: id,
        });
    });
};
