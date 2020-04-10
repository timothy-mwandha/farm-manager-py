import React, { Component } from "react";
import { Text,
    View,
    Button,
    FlatList,
    StyleSheet,
    ScrollView,
    AppRegistry,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    ToastAndroid,
    KeyboardAvoidingView, } from "react-native";
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
    Cell,
} from "react-native-table-component";

export class User extends Component {
    static ProTypes = {
        User: PropTypes.array.isRequired,
    };
    componentDidMount() {
        this.props.getUser();
    }
        return (
            renderItem = ({ item }) => {
        let { navigation } = this.props;
            <TouchableOpacity
                style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}
                onPress={(id) => {
                    navigation.navigate("advanceDetails", {
                        id: `${item.id}`,
                    });
                }}
                // onPress={() => ToastAndroid.show(item.name, ToastAndroid.SHORT)}
                // onPress={() => navigation.navigate("advance")}
            >
                <View
                    style={{
                        flex: 1,
                        alignSelf: "stretch",
                        flexDirection: "row",
                        height: 35,
                        // borderBottomColor: "green",
                        // borderBottomWidth: 2,
                        margin: 10,
                    }}
                >
                    <View style={{ flex: 1, alignSelf: "stretch" }}>
                        <Text
                            style={{
                                color: "#006400",
                                fontWeight: "bold",
                                fontSize: 16,
                                alignSelf: "stretch",
                                marginBottom: 3,
                            }}
                        >
                            Name: {`${item.name}`}
                        </Text>
                        <Text
                            style={{
                                color: "#228B22",
                                borderBottomWidth: 1.5,
                                borderBottomColor: "green",
                            }}
                        >
                            Position: {`${item.email}`}
                        </Text>
                    </View>
                    <View style={{ flex: 2, alignSelf: "stretch" }}>
                        <Text
                            style={{
                                color: "#006400",
                                fontWeight: "bold",
                                fontSize: 16,
                                alignSelf: "stretch",
                                marginBottom: 3,
                            }}
                        >
                            Amount: {`${item.advancedamnt}`}
                        </Text>
                        <Text
                            style={{
                                color: "#228B22",
                                borderBottomWidth: 1.5,
                                borderBottomColor: "green",
                            }}
                        >
                            Date: {`${item.date}`}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            }
        )
};   

const mapStateToProps = (state) => ({
    User: state.UserReducer,
});

export default connect(mapStateToProps, { getUser })(User);

// const mapStateToProps = state => ({ todos: state.todos })
