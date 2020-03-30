import { ADD_USER, GET_USER, DELETE_USER} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/user';


// var Mydata = {
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     password: req.body.password
//   };

var body: JSON.stringfy({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password

});

export const createUser = ({ body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {body})
      .then(response => {
        dispatch(createUserSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
export const createUserSuccess =  (data) => {
  return {
    type: ADD_USER,
    payload: {
      _id: data._id,
      body: data.body
    }
  }
};

export const deleteUserSuccess = id => {
  return {
    type: DELETE_USER,
    payload: {
      id
    }
  }
}

export const deleteUser = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteUserSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getUsers = (users) => {
  return {
    type: GET_USER,
    users
  }
};

export const getAllUsers = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(getUsers(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
