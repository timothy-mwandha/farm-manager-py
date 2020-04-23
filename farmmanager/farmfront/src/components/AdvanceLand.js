import "react-native-gesture-handler";
import React, { Component } from "react";
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
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
        let { navigation, route } = this.props;
        const advance = this.props;

        const advanceItems = this.props.advances.map((advances) => (
            <View key={advances.id}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("advanceDetails", {
                                itemId: advances.id,
                            });
                            // this.props.detailAdvance.bind(this, advances.id);
                        }}
                    >
                        <Text>Name : {advances.name}</Text>
                        <Text>Position: {advances.position}</Text>
                        <Text>Amount: {advances.advancedamnt}</Text>
                        <Text>Date: {advances.date}</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ecef57',
        borderRadius: 10,
        margin: 5,
        // fontSize: 24,
        justifyContent: "center",
        // alignItems: "center",
        // fontSize:30,
        padding: 8,
        shadowColor: "green",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 3,
        // backgroundColor: '#d1f0d9'
    },
});
