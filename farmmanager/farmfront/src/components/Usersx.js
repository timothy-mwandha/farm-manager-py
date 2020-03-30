// Post.js

import React from "react";

const styles = {
  borderBottom: "2px solid #eee",
  background: "#fafafa",
  margin: ".75rem auto",
  padding: ".6rem 1rem",
  maxWidth: "500px",
  borderRadius: "7px"
};

export default ({ user: { name, email, phone, password, _id }, onDelete }) => {
  return (
    <View style={styles}>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{phone}</Text>
      <Text>{password}</Text>
      <Button
        className="btn btn-danger"
        type="button"
        onClick={() => onDelete(_id)}
      >
        Remove
      </Button>
    </View>
  );
};

// import React, { Component } from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getUsers } from "../actions/users";
// import {
//   Table,
//   TableWrapper,
//   Row,
//   Rows,
//   Col,
//   Cols,
//   Cell
// } from "react-native-table-component";

// export default class User extends Component {
//   static ProTypes = {
//     myusers: PropTypes.array.isRequired
//   };
//   componentDidMount() {
//     this.props.getUsers();
//   }

//   render() {
//     const state = this.state;
//     return (
//       <View>
//         <Text> USERS </Text>
//         <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
//           tableHead: ['ID', 'name', 'email', 'phone', 'password','']; tableData:
//           [
//           {this.props.myusers.map(
//             user => (
//               { id, name, email, phone, password }, (<Button> Delete </Button>)
//             )
//           )}
//           ];
//         </Table>
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   myusers: state.UserReducer.users
// });

// export default connect(mapStateToProps, { getUsers })(User);
