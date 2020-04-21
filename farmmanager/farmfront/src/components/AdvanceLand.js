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

class AdvanceLand extends Component {
    componentDidMount() {
        this.props.getAdvances();
    }

    render() {
        let { navigation } = this.props;

        const advanceItems = this.props.advances.map((advances) => (
            <View key={advances.id}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("advanceDetails");
                        // this.props.deleteAdvance.bind(this, advances.id);
                    }}
                >
                    <Text>Name : {advances.name}</Text>
                    <Text>Position: {advances.position}</Text>
                    <Text>Amount: {advances.advancedamnt}</Text>
                    <Text>Date: {advances.date}</Text>
                </TouchableOpacity>

                
                <TouchableOpacity
                    onPress={this.props.deleteAdvance.bind(this, advances.id)}
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

                {/* <TouchableOpacity
                    onPress={this.props.detailAdvance.bind(this, advances.id)}
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
                    }}>
                
                    <Text>More</Text>
                </TouchableOpacity> */}
            </View>
        ));
        return (
            <ScrollView>
                <View>
                    <Text> Advance Summary </Text>
                    {advanceItems}
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    advances: state.advances.items,
});

export default connect(mapStateToProps, { getAdvances, deleteAdvance })(
    AdvanceLand
);
