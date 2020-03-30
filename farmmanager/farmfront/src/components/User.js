import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../actions/users";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

class User extends Component {
  static ProTypes = {
    myusers: PropTypes.array.isRequired
  };
  componentDidMount() {
    return fetch("http://3c4d7e1a.ngrok.io/api/user/")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.user
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const state = this.state;
    return (
      <View>
        <Text> USERS </Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          tableHead: ['ID', 'name', 'email', 'phone', 'password','']; tableData:
          [
          {this.props.myusers.map(
            user => (
              { id, name, email, phone, password }, (<Button> Delete </Button>)
            )
          )}
          ];
        </Table>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  myusers: state.UserReducer.users
});

export default connect(mapStateToProps, { getUsers })(User);

/////////mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmuser2.js
// import React, { Component } from "react";
// import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

// export default class Users2 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             dataSource: null
//         };
//     }

//     componentDidMount (){

//         return fetch( 'http://192.168.178.1:8000/api/user/')
//         .then ( (response) => response.json() )
//         .then( (responseJson) => {

//             this.setState({
//                 isLoading:false,
//                 dataSource: responseJson.user,
//             })
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }

//     render() {
//         if (this.state.isLoading){
//             return(
//                 <View style={styles.container}>
//                     <ActivityIndicator />
//                 </View>
//             )
//         }else {
//             let users = this.state.dataSource.map((val, key) => {
//                 return
//                 <View key={name} style={styles.item}>
//                     <Text>{val.name}</Text>
//                 </View>
//             });
//         }
//         return (
//             <View style={styles.container}>
//                 {users}
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 50

//     }
// })
