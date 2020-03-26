import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../actions/Users";
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
    Cols,
    Cell
} from "react-native-table-component";

export class User extends Component {
    static ProTypes = {
        myusers: PropTypes.array.isRequired
    };
    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <View>
                <Text> USERS </Text>
                <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
                    tableHead: ['ID', 'name', 'email', 'phone', 'password',''];
                    tableData: [
                    {this.props.User.map(
                        (User) => (
                            { id, name, email, phone, password },
                            (<Button> Delete </Button>)
                        )
                    )}
                    ];
                </Table>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    myusers: state.UserReducer.Users
});

export default connect(mapStateToProps, { getUser })(User);
