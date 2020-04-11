// import React, { Component } from "react";
// import {
//     Text,
//     View,
//     Button,
//     FlatList,
//     StyleSheet,
//     ScrollView,
//     AppRegistry,
//     Image,
//     ActivityIndicator,
//     TouchableOpacity,
//     ToastAndroid,
//     KeyboardAvoidingView,
// } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// export default class AdvanceDetails extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data: [],
//             isLoading: true,
//         };
//     }

//     //Define your navigation options in a form of a method so you have access to navigation props.
//     static navigationOptions = {
//         title: "Advances",
//     };

//     renderItem = ({ item }) => {
//         let { navigation } = this.props;
//         return (
//             <TouchableOpacity
//                 style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}
//                 // onPress={() => ToastAndroid.show(item.name, ToastAndroid.SHORT)}
//                 onPress={() => navigation.navigate("advance")}
//             >
//                 <View
//                     style={{
//                         flex: 1,
//                         alignSelf: "stretch",
//                         flexDirection: "row",
//                         height: 35,
//                         // borderBottomColor: "green",
//                         // borderBottomWidth: 2,
//                         margin: 10,
//                     }}
//                 >
//                     <View style={{ flex: 1, alignSelf: "stretch" }}>
//                         <Text
//                             style={{
//                                 color: "#006400",
//                                 fontWeight: "bold",
//                                 fontSize: 16,
//                                 alignSelf: "stretch",
//                                 marginBottom: 3,
//                             }}
//                         >
//                            Date: {`${item.date}`}
//                         </Text>
//                         <Text
//                             style={{
//                                 color: "#228B22",
//                                 borderBottomWidth: 1.5,
//                                 borderBottomColor: "green",
//                             }}
//                         >Name: {`${item.name}`}</Text>

//                         <Text
//                             style={{
//                                 color: "#006400",
//                                 fontWeight: "bold",
//                                 fontSize: 16,
//                                 alignSelf: "stretch",
//                                 marginBottom: 3,
//                             }}
//                         >Gender: {`${item.gende}`}</Text>
//                         <Text
//                             style={{
//                                 color: "#228B22",
//                                 borderBottomWidth: 1.5,
//                                 borderBottomColor: "green",
//                             }}
//                         >Position: {`${item.position}`}</Text>
//                         <Text
//                             style={{
//                                 color: "#006400",
//                                 fontWeight: "bold",
//                                 fontSize: 16,
//                                 alignSelf: "stretch",
//                                 marginBottom: 3,
//                             }}
//                         >
//                         Status:    {`${item.status}`}
//                         </Text>
//                         <Text
//                             style={{
//                                 color: "#228B22",
//                                 borderBottomWidth: 1.5,
//                                 borderBottomColor: "green",
//                             }}
//                         >Amount: {`${item.advancedamnt}`}</Text>

//                         <Text
//                             style={{
//                                 color: "#006400",
//                                 fontWeight: "bold",
//                                 fontSize: 16,
//                                 alignSelf: "stretch",
//                                 marginBottom: 3,
//                             }}
//                         >Description: {`${item.description}`}</Text>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         );
    };

    // renderSeparator = () => {
    //   return (
    //     <View
    //       style={{ height: 1, width: "100%", backgroundColor: "black" }}
    //     ></View>
    //   );
    // };

    //Define your componentDidMount lifecycle hook that will retrieve data.
    componentDidMount() {
        this.fetchData();
    }

    //Have the async keyword to indicate that it is asynchronous.
    fetchData = async () => {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method.
            const response = await fetch(`http://127.0.0.1:8000/api/advance/${id}`);
            const advances = await response.json();
            this.setState({
                data: advances,
                isLoading: false,
            });
        } catch (error) {
            console.log("Error fetching advance data-----------", error);
        }
    };

    render() {
        //Destruct data and Loading from state.
        const { data, loading } = this.state;
        //Destruct navigation from props
        const { navigation } = this.props;

        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.

        return (
            <KeyboardAvoidingView
                style={styles.container1}
                behavior="padding"
                enabled
            >
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.heading}> Advance Details</Text>
                        <View
                            style={{
                                flex: 1,
                                alignSelf: "stretch",
                                flexDirection: "row",
                                // backgroundColor: "#cedcf2",
                                height: 35,
                                // borderBottomColor: "#cedcf2",
                                fontSize: 30,
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
                                    Staff Name
                                </Text>
                                <Text
                                    style={{
                                        color: "#228B22",
                                        borderBottomWidth: 1.5,
                                        borderBottomColor: "green",
                                    }}
                                >
                                    Position
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
                                    Shs: Advance
                                </Text>
                                <Text
                                    style={{
                                        color: "#228B22",
                                        borderBottomWidth: 1.5,
                                        borderBottomColor: "green",
                                    }}
                                >
                                    Date of Payment
                                </Text>
                            </View>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index}
                            // ItemSeparatorComponent={this.renderSeparator}
                        />
                        <TouchableOpacity
                            style={styles.TouchableOpacityStyle}
                            onPress={() => navigation.navigate("advance")}
                        >
                            <Text style={styles.TouchableOpacityAdd}>+</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
        width: "100%",
        backgroundColor: "#F5FCFF",
    },
    heading: {
        margin: 10,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },

    TouchableOpacityStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        position: "absolute",
        bottom: 10,
        right: 10,
        height: 60,
        backgroundColor: "green",
        borderRadius: 100,
    },

    TouchableOpacityAdd: {
        color: "#fff",
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        marginLeft: 20,
    },
    // floatingMenuButtonStyle: {
    //   alignSelf: "flex-end",
    //   position: "absolute",
    //   bottom: 35
    // }
});
