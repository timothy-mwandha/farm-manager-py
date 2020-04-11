import { GET_ADVANCE, DELETE_ADVANCE } from "./types";
import axios from "axios"
export const getAdvances = () => (dispatch) => {
    
    fetch("http://localhost:8000/api/advance/")
        .then((res) => res.json())
        .then((advances) =>
            dispatch({
                type: GET_ADVANCE,
                payload: advances,
            })
        );
};

export const deleteAdvance = (id) => (dispatch) => {
    axios
    fetch(`http://localhost:8000/api/advance/${id}/`)
        .then((res) => res.json())
        // .then((advances) =>
            dispatch({
                type: DELETE_ADVANCE,
                payload: id,
            })
        // );
};
