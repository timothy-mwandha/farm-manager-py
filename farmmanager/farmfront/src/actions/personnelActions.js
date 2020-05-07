import axios from "axios";
import {
  GET_PERSONNEL,
  DETAIL_PERSONNEL,
  DELETE_PERSONNEL,
  ADD_PERSONNEL,
  UPDATE_PERSONNEL;
} from "./types";

//FETCH PERSONNEL
export const getPersons = () => dispatch => {
  axios
    .get("http://localhost:8000/api/personnel/")
    .then(res => {
      dispatch({
        type: GET_PERSONNEL,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch persons", err));
};

//DELETE ADVANCE
export const deletePerson = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/personnel/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_PERSONNEL,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete person", err));
};

// GET DETAILS OF PERSONNEL
export const detailPerson = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/personnel/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_PERSONNEL,
        payload: res.data
      });
    })
    .catch(err => console.log("Axios not able to fetch single person", err));
};


//ADD_PERSONNEL

// export const createAdvance = (advanceData) => dispatch => {
//   console.log('creating advance')
//     fetch("http://127.0.0.1:8000/api/advance/", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(advanceData)
//     })
//       .then(response => response.json())
//       .then(advance => 
//       dispatch({
//         type: ADD_PERSONNEL,
//           payload: advance
//       })
//       // alert(advance)
//       )
//       .catch(error => {
//         console.error("Failed to add advance", error);
//       });
//   };


// //UPDATE PERSONNEL

