// NewPost.js

import React from "react";
import { View, Text, Button } from "react-native";

class NewUser extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.name.trim() &&
      this.state.email.trim() &&
      this.state.phone.trim() &&
      this.state.password.trim()
    ) {
      console.log(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      password: ""
    });
  };

  render() {
    return (
      <View>
        <Form onSubmit={this.handleSubmit}>
          <View className="form-group">
            <Textinput
              type="text"
              placeholder="Title"
              className="form-control"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            <Textinput
              type="text"
              placeholder="Title"
              className="form-control"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            <Textinput
              type="text"
              placeholder="Title"
              className="form-control"
              name="phone"
              onChange={this.handleInputChange}
              value={this.state.phone}
            />
            <Textinput
              type="text"
              placeholder="Title"
              className="form-control"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </View>
          <View className="form-group">
            <Button type="submit" className="btn btn-primary">
              Add User
            </Button>
            <Button
              type="button"
              className="btn btn-warning"
              onClick={this.handleReset}
            >
              Reset
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}

export default NewUser;
