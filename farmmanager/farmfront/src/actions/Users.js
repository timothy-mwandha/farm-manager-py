// import axios from "axios";

// import { GET_USERS } from "./types";

// //GET USERS

// // export const getUser = () => dispatch => {
// //     axios
// //         .get("/api/user/")
// //         .then(res => {
// //             // console.log(res);
// //             dispatch({
// //                 type: GET_USERS,
// //                 payload: res.data
// //             });
// //         })
// //         .catch(err => console.log(err));
// // };

// export function getUser() {
//     return (dispatch)=>{
//         return axios
//         .get("/api/user/")
//         .then ((response)=>{
//             dispatch(Users(response.data));
//         })
//     }
// }

// export function Users (user){
//     return{
//         type:GET_USERS, 
//         User:User
//     }
// }


import React, { Component } from 'react'
import { Text, View } from 'react-native'
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    ComponentWillMount(){
        fetch('http://localhost:8000/api/user/')
        .then(res => res.json())
        .then(data => this.setState({users: data}));
    }

    render() {
        const userItems = this.state.posts.map(post => (
            <View key={users.id}>
                <Text>{users.name}</Text>
                <Text>{users.email}</Text>
                <Text>{users.phone}</Text>
                <Text>{users.password}</Text>
            
            </View>
        ))
        return (
            <View>
                <Text> textInComponent </Text>
                {userItems}
            </View>
        )
    }
}

export default Users; 
