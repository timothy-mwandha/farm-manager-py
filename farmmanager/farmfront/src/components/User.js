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

export default class User extends Component {
  static ProTypes = {
    myusers: PropTypes.array.isRequired
  };
  componentDidMount() {
    //   this.props.getUsers();
    return fetch("http://localhost:8000/api/user/");
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
