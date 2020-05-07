// //GEt users with redux
// import React, { Component } from "react";
// import { Text, View, StyleSheet, FlatList } from "react-native";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { fetchUsers } from "../actions/userActions";

// import {
//   Table,
//   TableWrapper,
//   TouchableOpacity,
//   Row,
//   Rows,
//   Col,
//   Cols,
//   Cell
// } from "react-native-table-component";

// class Users extends Component {
//   componentDidMount() {
//     this.props.fetchUsers();
//   }
//   // componentDidUpdate
//   // componentWillReceiveProps
//   componentDidUpdate(nextProps) {
//     if (nextProps.newUser) {
//       this.props.users.unshift(nextProps.newUser);
//     }
//   }

//   render() {
//     const UserItems = this.props.users.map(user => (
//       <View key={user.id}>
//         <Text>{user.name}</Text>
//         <Text>{user.email}</Text>
//         <Text>{user.phone}</Text>
//       </View>
//     ));
//     return (
//       <View>
//         <Text> USERS LIST</Text>
//         {UserItems}
//       </View>
//     );
//   }
// }
// Users.propTypes = {
//   fetchUsers: PropTypes.func.isRequired,
//   users: PropTypes.array.isRequired,
//   newUser: PropTypes.object
// };

// const mapStateToProps = state => ({
//   users: state.users.items,
//   newUser: state.users.item
//   //we do state.users because in our rootReducer(index.js) in reducers we have users: userReducer
//   // we use items because we get it from our userReducer
// });

// export default connect(mapStateToProps, { fetchUsers })(Users);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignContent: "space-between",
//     width: "100%",
//     backgroundColor: "#F5FCFF"
//   },
//   heading: {
//     margin: 10,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center"
//   },

//   TouchableOpacityStyle: {
//     borderWidth: 1,
//     borderColor: "rgba(0,0,0,0.2)",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 60,
//     position: "absolute",
//     bottom: 10,
//     right: 10,
//     height: 60,
//     backgroundColor: "green",
//     borderRadius: 100
//   },

//   TouchableOpacityAdd: {
//     color: "#fff",
//     width: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 30,
//     marginLeft: 20
//   }
// });

// // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm G4t users without using redux
// // import React, { Component } from "react";
// // import { Text, View, StyleSheet, FlatList } from "react-native";
// // import { connect } from "react-redux";
// // import PropTypes from "prop-types";
// // import { fetchUsers } from "../actions/fetchUsers";
// // // import { bindActionCreators } from "redux";
// // import {
// //   Table,
// //   TableWrapper,
// //   TouchableOpacity,
// //   Row,
// //   Rows,
// //   Col,
// //   Cols,
// //   Cell
// // } from "react-native-table-component";

// // class Users extends Component {
// //   static ProTypes = {
// //     myusers: PropTypes.array.isRequired
// //   };

// //   componentDidMount() {
// //     this.props.fetchUsers();
// //   }

// //   renderItem = ({ item }) => {
// //     let { navigation } = this.props;
// //     return (
// //       <TouchableOpacity
// //         style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}
// //         onPress={() => ToastAndroid.show(item.name, ToastAndroid.SHORT)}
// //         // onPress={() => navigation.navigate("advance")}
// //       >
// //         <View
// //           style={{
// //             flex: 1,
// //             alignSelf: "stretch",
// //             flexDirection: "row",
// //             height: 35,
// //             // borderBottomColor: "green",
// //             // borderBottomWidth: 2,
// //             margin: 10
// //           }}
// //         >
// //           <View style={{ flex: 1, alignSelf: "stretch" }}>
// //             <Text
// //               style={{
// //                 color: "#006400",
// //                 fontWeight: "bold",
// //                 fontSize: 16,
// //                 alignSelf: "stretch",
// //                 marginBottom: 3
// //               }}
// //             >
// //               {`${item.name}`}
// //             </Text>
// //             <Text
// //               style={{
// //                 color: "#228B22",
// //                 borderBottomWidth: 1.5,
// //                 borderBottomColor: "green"
// //               }}
// //             >{`${item.position}`}</Text>
// //           </View>
// //           <View style={{ flex: 2, alignSelf: "stretch" }}>
// //             <Text
// //               style={{
// //                 color: "#006400",
// //                 fontWeight: "bold",
// //                 fontSize: 16,
// //                 alignSelf: "stretch",
// //                 marginBottom: 3
// //               }}
// //             >{`${item.email}`}</Text>
// //             <Text
// //               style={{
// //                 color: "#228B22",
// //                 borderBottomWidth: 1.5,
// //                 borderBottomColor: "green"
// //               }}
// //             >{`${item.phone}`}</Text>
// //           </View>
// //           <View>
// //             <Text
// //               style={{
// //                 color: "#228B22",
// //                 borderBottomWidth: 1.5,
// //                 borderBottomColor: "green"
// //               }}
// //             >{`${item.password}`}</Text>
// //           </View>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   render() {
// //     const state = this.state;
// //     return (
// //       <View>
// //         <Text> USERS LIST</Text>
// //         <FlatList
// //           data={this.props.myusers.map(
// //             user => (
// //               { id, name, email, phone, password }, (<Button> Delete </Button>)
// //             )
// //           )}
// //           renderItem={this.renderItem}
// //           keyExtractor={(item, index) => index}
// //           // ItemSeparatorComponent={this.renderSeparator}
// //         />
// //         {/* <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
// //           tableHead: ['ID', 'name', 'email', 'phone', 'password',''];
// //           tableData:[
// //           {this.props.myusers.map(user => ({ id, name, email, phone, password }, (<Button> Delete </Button>)
// //             )
// //           )}
// //           ];
// //         </Table> */}
// //         {/* <TouchableOpacity
// //           style={styles.TouchableOpacityStyle}
// //           onPress={() => navigation.navigate("advance")}
// //         >
// //           <Text style={styles.TouchableOpacityAdd}>+</Text>
// //         </TouchableOpacity> */}
// //       </View>
// //     );
// //   }
// // }

// // const mapStateToProps = state => ({
// //   myusers: state.userReducer
// // });

// // // const ActionCreators = Object.assign({}, fetchUsers);
// // // const mapDispatchToProps = dispatch => ({
// // //   actions: bindActionCreators(ActionCreators, dispatch)
// // // });

// // export default connect(mapStateToProps, { fetchUsers })(Users);
// // // export default connect(mapStateToProps, mapDispatchToProps)(Users);

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexDirection: "column",
// //     justifyContent: "space-between",
// //     alignContent: "space-between",
// //     width: "100%",
// //     backgroundColor: "#F5FCFF"
// //   },
// //   heading: {
// //     margin: 10,
// //     fontWeight: "bold",
// //     color: "#000",
// //     textAlign: "center"
// //   },

// //   TouchableOpacityStyle: {
// //     borderWidth: 1,
// //     borderColor: "rgba(0,0,0,0.2)",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     width: 60,
// //     position: "absolute",
// //     bottom: 10,
// //     right: 10,
// //     height: 60,
// //     backgroundColor: "green",
// //     borderRadius: 100
// //   },

// //   TouchableOpacityAdd: {
// //     color: "#fff",
// //     width: 40,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     fontSize: 30,
// //     marginLeft: 20
// //   }
// // });
// // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// // // import React, { Component } from "react";
// // // import { Text, View, StyleSheet, FlatList } from "react-native";
// // // import { connect } from "react-redux";
// // // import PropTypes from "prop-types";
// // // import { getUsers } from "../actions/users";
// // // import { bindActionCreators } from "redux";
// // // import {
// // //   Table,
// // //   TableWrapper,
// // //   TouchableOpacity,
// // //   Row,
// // //   Rows,
// // //   Col,
// // //   Cols,
// // //   Cell
// // // } from "react-native-table-component";

// // // class Users extends Component {
// // //   static ProTypes = {
// // //     myusers: PropTypes.array.isRequired
// // //   };

// // //   componentDidMount() {
// // //     this.props.getUsers();
// // //   }

// // //   render() {
// // //     const state = this.state;
// // //     const data
// // //     return (
// // //       <View>
// // //         <Text> USERS LIST</Text>
// // //         <FlatList
// // //             data={data}
// // //             renderItem={this.renderItem}
// // //             keyExtractor={(item, index) => index}
// // //             // ItemSeparatorComponent={this.renderSeparator}
// // //           />
// // //         <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
// // //           tableHead: ['ID', 'name', 'email', 'phone', 'password',''];
// // //           tableData:[
// // //           {this.props.myusers.map(user => ({ id, name, email, phone, password }, (<Button> Delete </Button>)
// // //             )
// // //           )}
// // //           ];
// // //         </Table>
// // //         {/* <TouchableOpacity
// // //           style={styles.TouchableOpacityStyle}
// // //           onPress={() => navigation.navigate("advance")}
// // //         >
// // //           <Text style={styles.TouchableOpacityAdd}>+</Text>
// // //         </TouchableOpacity> */}
// // //       </View>
// // //     );
// // //   }
// // // }

// // // const mapStateToProps = state => ({
// // //   myusers: state.userReducer.users
// // // });

// // // const ActionCreators = Object.assign({}, getUsers);
// // // const mapDispatchToProps = dispatch => ({
// // //   actions: bindActionCreators(ActionCreators, dispatch)
// // // });

// // // // export default connect(mapStateToProps, { getUsers })(Users);
// // // export default connect(mapStateToProps, mapDispatchToProps)(Users);

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     flexDirection: "column",
// // //     justifyContent: "space-between",
// // //     alignContent: "space-between",
// // //     width: "100%",
// // //     backgroundColor: "#F5FCFF"
// // //   },
// // //   heading: {
// // //     margin: 10,
// // //     fontWeight: "bold",
// // //     color: "#000",
// // //     textAlign: "center"
// // //   },

// // //   TouchableOpacityStyle: {
// // //     borderWidth: 1,
// // //     borderColor: "rgba(0,0,0,0.2)",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     width: 60,
// // //     position: "absolute",
// // //     bottom: 10,
// // //     right: 10,
// // //     height: 60,
// // //     backgroundColor: "green",
// // //     borderRadius: 100
// // //   },

// // //   TouchableOpacityAdd: {
// // //     color: "#fff",
// // //     width: 40,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     fontSize: 30,
// // //     marginLeft: 20
// // //   }
// // // });

// // // // // Post.js

// // // // import React from "react";

// // // // const styles = {
// // // //   borderBottom: "2px solid #eee",
// // // //   background: "#fafafa",
// // // //   margin: ".75rem auto",
// // // //   padding: ".6rem 1rem",
// // // //   maxWidth: "500px",
// // // //   borderRadius: "7px"
// // // // };

// // // // export default ({ user: { name, email, phone, password, _id }, onDelete }) => {
// // // //   return (
// // // //     <View style={styles}>
// // // //       <Text>{name}</Text>
// // // //       <Text>{email}</Text>
// // // //       <Text>{phone}</Text>
// // // //       <Text>{password}</Text>
// // // //       <Button
// // // //         className="btn btn-danger"
// // // //         type="button"
// // // //         onClick={() => onDelete(_id)}
// // // //       >
// // // //         Remove
// // // //       </Button>
// // // //     </View>
// // // //   );
// // // // };
