import axios from "axios";
import {
  GET_EXPENDITURE,
  DETAIL_EXPENDITURE,
  DELETE_EXPENDITURE,
  ADD_EXPENDITURE,
  UPDATE_EXPENDITURE
} from "./types";

//FETCH ADVANCES

export const getExpenditure = () => dispatch => {
  axios
    .get("http://localhost:8000/api/expenditure/")
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_EXPENDITURE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
// GET ONE ADVANCE
export const detailExpenditure = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/expenditure/${id}/`)
    .then(res => {
      // console.log(res.data);
      // .then((advances) =>
      dispatch({
        type: DETAIL_EXPENDITURE,
        payload: res.data
      });
    })
    .catch(err =>
      console.log("Axios not able to fetch single Expenditure", err)
    );
};

//DELETE ADVANCE
export const deleteExpenditure = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/expenditure/${id}/`)
    .then(res => {
      // console.log(res.id);
      dispatch({
        type: DELETE_EXPENDITURE,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete Expenditure", err));
};

// //ADD_ADVANCE

export const addAdvance = expenseData => dispatch => {
  console.log("add expenditure");
  fetch("http://127.0.0.1:8000/api/expenditure/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expenseData)
  })
    .then(res => res.json())
    .then(expense =>
      dispatch({
        type: ADD_EXPENDITURE,
        payload: expense
      })
    )
    .catch(error => {
      console.error("Failed to add expense", error);
    });
};

// //UPDATE ADVANCE
