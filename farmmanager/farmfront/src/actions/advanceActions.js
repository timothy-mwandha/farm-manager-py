import {
  FETCH_ADVANCES,
  ADD_ADVANCE,
  DELETE_ADVANCE,
  UPDATE_ADVANCE
} from "./types";

//FETCH ADVANCES

export const fetchAdvances = () => dispatch => {
  fetch("http://127.0.0.1:8000/api/advance/")
    .then(res => res.json())
    .then(advances =>
      dispatch({
        type: FETCH_ADVANCES,
        payload: advances
        // advances:advances//you could also call the payload as advances
      })
    );
};

//ADD_ADVANCE

export const addAdvance = advanceData => dispatch => {
  console.log("add advance");
  fetch("http://127.0.0.1:8000/api/advance/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(advanceData)
  })
    .then(res => res.json())
    .then(
      advance =>
        dispatch({
          type: ADD_ADVANCE,
          payload: advance
        })
      // alert("Advance added");
      // Alert.alert(responseJson);
      // this.props.navigation.navigate("advanceLand");
    );
  //   .catch(error => {
  //     console.error(error);
  //   });
};
