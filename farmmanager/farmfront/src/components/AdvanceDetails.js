// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   Button,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity
// } from "react-native";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import {
//   getAdvance,
//   addAdvance
//   // deleteAdvance
// } from "../actions/advanceActions";

// class AdvanceDetails extends Component {
//   componentDidMount() {
//     this.props.getAdvance();
//   }

//   renderItem = ({ item }) => {
//     return (
//       <View>
//         <View
//           style={{
//             flex: 1,
//             alignSelf: "stretch",
//             flexDirection: "row",
//             height: 35,
//             margin: 10
//           }}
//         >
//           {/* <Image
//             style={{ width: 50, height: 50, margin: 5 }}
//             source={{ uri: item.image }}
//           /> */}
//           <Text style={{ flex: 1, alignSelf: "stretch" }}> Date</Text>
//           <Text
//             style={{ flex: 1, alignSelf: "stretch" }}
//           >{`${item.date}`}</Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             alignSelf: "stretch",
//             flexDirection: "row",
//             height: 35,
//             margin: 10
//           }}
//         >
//           {/* <Image
//             style={{ width: 50, height: 50, margin: 5 }}
//             source={{ uri: item.image }}
//           /> */}
//           <Text style={{ flex: 1, alignSelf: "stretch" }}> Name </Text>
//           <Text
//             style={{ flex: 1, alignSelf: "stretch" }}
//           >{`${item.name}`}</Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             alignSelf: "stretch",
//             flexDirection: "row",
//             height: 35,
//             margin: 10
//           }}
//         >
//           {/* <Image
//             style={{ width: 50, height: 50, margin: 5 }}
//             source={{ uri: item.image }}
//           /> */}
//           <Text style={{ flex: 1, alignSelf: "stretch" }}> Gender </Text>
//           <Text
//             style={{ flex: 1, alignSelf: "stretch" }}
//           >{`${item.gender}`}</Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             alignSelf: "stretch",
//             flexDirection: "row",
//             height: 35,
//             margin: 10
//           }}
//         >
//           {/* <Image
//             style={{ width: 50, height: 50, margin: 5 }}
//             source={{ uri: item.image }}
//           /> */}
//           <Text style={{ flex: 1, alignSelf: "stretch" }}> Position </Text>
//           <Text
//             style={{ flex: 1, alignSelf: "stretch" }}
//           >{`${item.position}`}</Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             alignSelf: "stretch",
//             flexDirection: "row",
//             height: 35,
//             margin: 10
//           }}
//         >
//           {/* <Image
//             style={{ width: 50, height: 50, margin: 5 }}
//             source={{ uri: item.image }}
//           /> */}
//           <Text style={{ flex: 1, alignSelf: "stretch" }}> Status </Text>
//           <Text
//             style={{ flex: 1, alignSelf: "stretch" }}
//           >{`${item.status}`}</Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             alignSelf: "stretch",
//             flexDirection: "row",
//             height: 35,
//             margin: 10
//           }}
//         >
//           {/* <Image
//             style={{ width: 50, height: 50, margin: 5 }}
//             source={{ uri: item.image }}
//           /> */}
//           <Text style={{ flex: 1, alignSelf: "stretch" }}>Advanced Amount</Text>
//           <Text
//             style={{ flex: 1, alignSelf: "stretch" }}
//           >{`${item.advancedamnt}`}</Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             alignSelf: "stretch",
//             flexDirection: "row",
//             height: 35,
//             margin: 10
//           }}
//         >
//           {/* <Image
//             style={{ width: 50, height: 50, margin: 5 }}
//             source={{ uri: item.image }}
//           /> */}
//           <Text style={{ flex: 1, alignSelf: "stretch" }}> Description </Text>
//           <Text
//             style={{ flex: 1, alignSelf: "stretch" }}
//           >{`${item.description}`}</Text>
//         </View>
//       </View>
//     );
//   };
//   render() {
//     const { navigation } = this.props;
//     return (
//       <View style={styles.container}>
//         <FlatList data={this.props.advance} renderItem={this.renderItem} />
//       </View>
//     );
//   }
// }

// AdvanceDetails.propTypes = {
//   getAdvance: PropTypes.func.isRequired,
//   // deleteAdvance: PropTypes.func.isRequired,
//   advance: PropTypes.object
//   // newAdvance: PropTypes.object
// };

// const mapStateToProps = state => ({
//   advance: state.advances.items

//   // newAdvance: state.advances.item
//   //we do state.advances because in our rootReducer(index.js) in reducers we have advances: advanceReducer
//   // we use items because we get it from our advanceReducer
// });

// export default connect(mapStateToProps, { getAdvance })(AdvanceDetails);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignContent: "space-between",
//     width: "100%",
//     backgroundColor: "#F5FCFF"
//   },
//   heading: {
//     margin: 10,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center"
//   },
//   TouchableOpacityStyle: {
//     borderWidth: 1,
//     borderColor: "rgba(0,0,0,0.2)",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 60,
//     position: "absolute",
//     bottom: 10,
//     right: 10,
//     height: 60,
//     backgroundColor: "green",
//     borderRadius: 100
//   },
//   TouchableOpacityAdd: {
//     color: "#fff",
//     width: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 30,
//     marginLeft: 20
//   }
// });



// import React, { Component } from "react";
// import {
//     Text,
//     View,
//     Button,
//     TouchableOpacity,
//     KeyboardAvoidingView,
//     ScrollView,
//     Fragment,
// } from "react-native";
// import {
//     detailAdvance,
//     deleteAdvance,
//     getAdvances,
// } from "../actions/AdvanceActions";
// import { connect } from "react-redux";

// class AdvanceDetails extends Component {
//     componentDidMount() {
//         this.props.detailAdvance();
//     }
//     render() {
//         const advanceItems = this.props.advances.map((advances) => (
//             <View key={advances.id}>
//                 <View>
//                     <Text>Date : {advances.date}</Text>
//                     <Text>Name : {advances.name}</Text>
//                     <Text>Gender : {advances.gender}</Text>
//                     <Text>Position: {advances.position}</Text>
//                     <Text>Status: {advances.status}</Text>
//                     <Text>Amount: {advances.advancedamnt}</Text>
//                     <Text>Description: {advances.description}</Text>
//                 </View>
//                 <TouchableOpacity
//                     onPress={this.props.deleteAdvance.bind(this, advances.id)}
//                     style={{
//                         flex: 1,
//                         alignSelf: "stretch",
//                         flexDirection: "row",
//                         backgroundColor: "#cedcf2",
//                         height: 35,
//                         borderBottomColor: "#cedcf2",
//                         fontSize: 30,
//                         borderBottomWidth: 2,
//                         margin: 10,
//                     }}
//                 >
//                     <Text>Delete</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={{
//                         flex: 1,
//                         alignSelf: "stretch",
//                         flexDirection: "row",
//                         backgroundColor: "#cedcf2",
//                         height: 35,
//                         borderBottomColor: "#cedcf2",
//                         fontSize: 30,
//                         borderBottomWidth: 2,
//                         margin: 10,
//                     }}
//                 >
//                     <Text>More</Text>
//                 </TouchableOpacity>
//             </View>
//         ));
//         return (
//             // this.props.detailAdvance.bind(this, advances.id)
//             <ScrollView>
//                 <View>
//                     <Text> Advance Details </Text>
//                     {advanceItems}
//                 </View>
//             </ScrollView>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     advances: state.advances.items,
// });

// export default connect(mapStateToProps, { detailAdvance, deleteAdvance })(
//     AdvanceDetails
// );



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
        this.props.detailAdvance();
    }

    render() {
        let { navigation } = this.props;

        const advanceItems = this.props.advances.map((advances) => (
            <View key={advances.id}>
                <TouchableOpacity
                    // onPress={() => {
                    //     navigation.navigate("advanceDetails");
                    //     // this.props.deleteAdvance.bind(this, advances.id);
                    // }}
                >
                    <Text>Date : {advances.date}</Text>
                     <Text>Name : {advances.name}</Text>
                     <Text>Gender : {advances.gender}</Text>
                     <Text>Position: {advances.position}</Text>
                     <Text>Status: {advances.status}</Text>
                     <Text>Amount: {advances.advancedamnt}</Text>
                    <Text>Description: {advances.description}</Text>
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
    advances: state.advances.item,
});

export default connect(mapStateToProps, { getAdvances, deleteAdvance, detailAdvance })(
    AdvanceDetails
);

