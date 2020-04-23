import axios from "axios";
import {
  GET_ADVANCES,
  DETAIL_ADVANCE,
  DELETE_ADVANCE,
  ADD_ADVANCE,
  UPDATE_ADVANCE
} from "./types";

//FETCH ADVANCES

export const getAdvances = () => dispatch => {
  axios
    .get("http://localhost:8000/api/advance/")
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_ADVANCES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
// GET ONE ADVANCE
export const detailAdvance = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/advance/${id}/`)
    .then(res => {
      // console.log(res.data);
      // .then((advances) =>
      dispatch({
        type: DETAIL_ADVANCE,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single advance", err));
};

//DELETE ADVANCE
export const deleteAdvance = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/advance/${id}/`)
    .then(res => {
      // console.log(res.id);
      dispatch({
        type: DELETE_ADVANCE,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete advance", err));
};

// //ADD_ADVANCE

// // export const addAdvance = advanceData => dispatch => {
// //   console.log("add advance");
// //   fetch("http://127.0.0.1:8000/api/advance/", {
// //     method: "POST",
// //     headers: {
// //       Accept: "application/json",
// //       "Content-Type": "application/json"
// //     },
// //     body: JSON.stringify(advanceData)
// //   })
// //     .then(res => res.json())
// //     .then(
// //       advance =>
// //         dispatch({
// //           type: ADD_ADVANCE,
// //           payload: advance
// //         })
// //       // alert("Advance added");
// //       // Alert.alert(responseJson);
// //       // this.props.navigation.navigate("advanceLand");
// //     );
// //   //   .catch(error => {
// //   //     console.error(error);
// //   //   });
// // };

// //UPDATE ADVANCE
