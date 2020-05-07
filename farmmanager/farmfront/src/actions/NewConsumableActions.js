import axios from "axios";
import {
  GET_NEWCONSUMABLE,
  DELETE_NEWCONSUMABLE,
  DETAIL_NEWCONSUMABLE,
  ADD_NEWCONSUMABLE,
  UPDATE_NEWCONSUMABLE
} from "./types";

//FETCH CONSUMABLES
export const getNewConsumables = () => dispatch => {
  axios
    .get("http://localhost:8000/api/newconsumable/")
    .then(res => {
      dispatch({
        type: GET_NEWCONSUMABLE,
        payload: res.data
      });
    })
    .catch(err => console.log("Not able to fetch new consumables", err));
};

//DELETE CONSUMABLE
export const deleteNewConsumable = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/newconsumable/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_NEWCONSUMABLE,
        payload: id
      });
    })
    .catch(err => console.log("Axios not able to delete new consumable", err));
};

// GET DETAILS OF CONSUMABLE
export const detailNewConsumable = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/newconsumable/${id}/`)
    .then(res => {
      dispatch({
        type: DETAIL_NEWCONSUMABLE,
        payload: res.data
      });
    })
    .catch(err =>
      console.log("Axios not able to fetch single newconsumable", err)
    );
};
