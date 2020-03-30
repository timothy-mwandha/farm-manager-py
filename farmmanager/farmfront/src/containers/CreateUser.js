// CreatePost.js

import { connect } from "react-redux";
import { createUser } from "../actions";
import NewUser from "../components/NewUser";

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => {
      dispatch(createUser(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewUser);
