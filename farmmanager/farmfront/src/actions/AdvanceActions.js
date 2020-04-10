import { GET_ADVANCE } from "./types";

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
