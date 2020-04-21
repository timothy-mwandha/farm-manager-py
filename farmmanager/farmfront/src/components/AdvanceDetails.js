import "react-native-gesture-handler";
import React, { Component } from "react";
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import {
    getAdvances,
    deleteAdvance,
    detailAdvance,
} from "../actions/AdvanceActions";
import { connect } from "react-redux";

class AdvanceDetails extends Component {
    componentDidMount() {
        this.props.detailAdvance(id);
    }

    render() {
        let { navigation } = this.props;
        const {advance} = this.props
       const item = (<View key={advance.id}>
                <TouchableOpacity
                    // onPress={() => {
                    //     navigation.navigate("advanceDetails");
                    //     // this.props.deleteAdvance.bind(this, advances.id);
                    // }}
                >
                    <Text>Date : {advance.date}</Text>
                     <Text>Name : {advance.name}</Text>
                     <Text>Gender : {advance.gender}</Text>
                     <Text>Position: {advance.position}</Text>
                     <Text>Status: {advance.status}</Text>
                     <Text>Amount: {advance.advancedamnt}</Text>
                    <Text>Description: {advance.description}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.props.deleteAdvance.bind(this, advance.id)}
                    style={{
                        flex: 1,
                        alignSelf: "stretch",
                        flexDirection: "row",
                        backgroundColor: "#cedcf2",
                        height: 35,
                        borderBottomColor: "#cedcf2",
                        fontSize: 30,
                        borderBottomWidth: 2,
                        margin: 10,
                    }}
                >
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>)
        return (
            <ScrollView>
                <View>
                    <Text> Advance Summary </Text>
                    {item}
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    advance: state.advances.item,
});

export default connect(mapStateToProps, { getAdvances, deleteAdvance, detailAdvance })(
    AdvanceDetails
);

