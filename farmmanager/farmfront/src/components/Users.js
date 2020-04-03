import React, { Component, setState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class Users extends Component {
  state = {
    data: [],
    loading: true
  };

  //Define your navigation options in a form of a method so you have access to navigation props.
  static navigationOptions = {
    title: "Users"
  };

  //Have the async keyword to indicate that it is asynchronous.
  fetchUsers = async () => {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const response = await fetch("http://127.0.0.1:8000/api/user/");
      const users = await response.json();
      this.setState({ data: users });
    } catch (error) {
      console.log("Error fetching user data-----------", error);
    }
  };

  //Define your componentDidMount lifecycle hook that will retrieve data.
  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    //Destruct data and Loading from state.
    const { data, loading } = this.state;
    //Destruct navigation from props
    const { navigation } = this.props;

    //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
    //Data contains the data being  mapped over.
    //RenderItem a callback return UI for each item.
    //keyExtractor used for giving a unique identifier for each item.

    // if (!loading) {
    return (
      <KeyboardAvoidingView
        style={styles.container1}
        behavior="padding"
        enabled
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.heading}> Users List </Text>
            <FlatList
              data={data}
              keyExtractor={(x, i) => i}
              renderItem={({ item }) => (
                <Text style={styles.labels}>
                  {`${item.name} ${item.email} ${item.phone}`}
                </Text>
              )}
            />
            <Button
              title="ADD"
              style={{ position: "absolute", bottom: 0, left: 50, right: 50 }}
              // onPress={() => navigation.navigate("Landing Page")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
    // } else {
    //   return <ActivityIndicator />;
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
    backgroundColor: "#fff"
  },
  heading: {
    margin: 10,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },

  labels: {
    margin: 10,
    color: "#000",
    textAlign: "center"
  }
});

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

// class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   // static ProTypes = {
//   //   myusers: PropTypes.array.isRequired
//   // };

//   componentDidMount() {
//     // this.props.getUsers();
//     this.fetchUsers();
//   }

//   // fetchUsers() {
//   //   fetch("http://539ef503.ngrok.io/api/user/")
//   //     .then(response => response.json())
//   //     .then(responseJson => {
//   //       this.setState({
//   //         isLoading: false,
//   //         dataSource: responseJson.user
//   //       });
//   //     })
//   //     .catch(error => {
//   //       console.log(error);
//   //     });
//   // }

//   render() {
//     // const state = this.state;
//     return (
//       <View>
//         <Text> USERS </Text>
//         <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
//           tableHead: ['ID', 'name', 'email', 'phone', 'password','']; tableData:
//           [
//           {this.props.myusers.map(
//             user => (
//               { id, name, email, phone, password }, (<Button>Delete</Button>)
//             )
//           )}
//           ];
//         </Table>
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   myusers: state.userReducer.users
// });

// export default connect(mapStateToProps, { getUsers })(Users);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
