import axios from "axios";
import {
  GET_ADVANCES,
  GET_ADVANCE,
  ADD_ADVANCE,
  DELETE_ADVANCE,
  UPDATE_ADVANCE
} from "./types";

//FETCH ADVANCES

export const getAdvances = () => dispatch => {
  axios
    .get("http://localhost:8000/api/advance/")
    .then(res => {
      dispatch({
        type: GET_ADVANCES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// FETCH SINGLE ADVANCE RECORD

export const getAdvance = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/advance/${id}/`)
    .then(res => {
      dispatch({
        type: GET_ADVANCE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD_ADVANCE

// export const addAdvance = advanceData => dispatch => {
//   console.log("add advance");
//   fetch("http://127.0.0.1:8000/api/advance/", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(advanceData)
//   })
//     .then(res => res.json())
//     .then(
//       advance =>
//         dispatch({
//           type: ADD_ADVANCE,
//           payload: advance
//         })
//       // alert("Advance added");
//       // Alert.alert(responseJson);
//       // this.props.navigation.navigate("advanceLand");
//     );
//   //   .catch(error => {
//   //     console.error(error);
//   //   });
// };

//DELETE ADVANCE
export const deleteAdvance = id => dispatch => {
  axios.delete(`http://localhost:8000/api/advance/${id}/`).then(res => {
    // .then((advances) =>
    dispatch({
      type: DELETE_ADVANCE,
      payload: id
    });
  });
};

//UPDATE ADVANCE
