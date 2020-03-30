// PostList.js

import React from "react";
import { connect } from "react-redux";
import User from "../components/User";
import { deleteUser } from "../actions";

function PostList({ users, onDelete }) {
  if (!users.length) {
    return <View>No Users</View>;
  }
  return (
    <View>
      {users.map(user => {
        return <User user={user} onDelete={onDelete} key={user._id} />;
      })}
    </View>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteUser(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
