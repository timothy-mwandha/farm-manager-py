import { GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from "./types";

//GET USERS

export const fetchUsers = () => dispatch => {
  fetch("http://127.0.0.1:8000/api/user/")
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: GET_USERS,
        payload: users
        // users:users//you could also call the payload as users
      })
    );
};

//ADD_USER

export const addUser = userData => dispatch => {
  fetch("http://127.0.0.1:8000/api/user/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
    //   body: JSON.stringify({
    //     name: this.Name,
    //     email: this.Email,
    //     phone: this.Phone,
    //     password: this.Password
    //   })
  })
    .then(res => res.json())
    .then(
      user =>
        dispatch({
          type: ADD_USER,
          payload: user
        })
      // alert("Thank You for Signing Up!");
      // Alert.alert(responseJson);
      // this.props.navigation.navigate("Login");
    );
  //   .catch(error => {
  //     console.error(error);
  //   });
};
