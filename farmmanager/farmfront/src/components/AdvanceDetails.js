import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAdvance, deleteAdvance } from "../actions/advanceActions";

class AdvanceDetails extends Component {
  componentDidMount() {
    this.props.getAdvance();
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            height: 35,
            margin: 10
            // color: "#006432"
          }}
        >
          {/* <Image
            style={{
              flex: 1,
              // alignSelf: "stretch",
              width: 50,
              height: 50
              // margin: 5
            }}
            source={require("../images/user.png")}
          /> */}
          <Text style={{ flex: 1, alignSelf: "stretch" }}> Date</Text>
          <Text
            style={{ flex: 1, alignSelf: "stretch" }}
          >{`${item.date}`}</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            height: 35,
            margin: 10
          }}
        >
          <Image
            style={{
              // flex: 1,
              alignSelf: "center",
              width: 50,
              height: 50,
              marginRight: 5
            }}
            source={require("../images/worker.jpg")}
          />
          <Text style={{ flex: 1, alignSelf: "stretch" }}> Name </Text>
          <Text
            style={{ flex: 1, alignSelf: "stretch" }}
          >{`${item.name}`}</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            height: 35,
            margin: 10
          }}
        >
          {/* <Image
            style={{ width: 50, height: 50, margin: 5 }}
            source={{ uri: item.image }}
          /> */}
          <Text style={{ flex: 1, alignSelf: "stretch" }}> Gender </Text>
          <Text
            style={{ flex: 1, alignSelf: "stretch" }}
          >{`${item.gender}`}</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            height: 35,
            margin: 10
          }}
        >
          {/* <Image
            style={{ width: 50, height: 50, margin: 5 }}
            source={{ uri: item.image }}
          /> */}
          <Text style={{ flex: 1, alignSelf: "stretch" }}> Position </Text>
          <Text
            style={{ flex: 1, alignSelf: "stretch" }}
          >{`${item.position}`}</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            height: 35,
            margin: 10
          }}
        >
          {/* <Image
            style={{ width: 50, height: 50, margin: 5 }}
            source={{ uri: item.image }}
          /> */}
          <Text style={{ flex: 1, alignSelf: "stretch" }}> Status </Text>
          <Text
            style={{ flex: 1, alignSelf: "stretch" }}
          >{`${item.status}`}</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            height: 35,
            margin: 10
          }}
        >
          {/* <Image
            style={{ width: 50, height: 50, margin: 5 }}
            source={{ uri: item.image }}
          /> */}
          <Text style={{ flex: 1, alignSelf: "stretch" }}>Advanced Amount</Text>
          <Text style={{ flex: 1, alignSelf: "stretch" }}>
            Shs: {`${item.advancedamnt}`}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            height: 35,
            margin: 10
          }}
        >
          {/* <Image
            style={{ width: 50, height: 50, margin: 5 }}
            source={{ uri: item.image }}
          /> */}
          <Text style={{ flex: 1, alignSelf: "stretch" }}> Description </Text>
          <Text
            style={{ flex: 1, alignSelf: "stretch" }}
          >{`${item.description}`}</Text>
        </View>
        <TouchableOpacity
          onPress={this.props.deleteAdvance.bind(this, item.id)}
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            backgroundColor: "#CEDCF2",
            height: 35,
            borderBottomColor: "#CEDCF2",
            fontSize: 30,
            borderBottomWidth: 2,
            margin: 10
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Advance details</Text>
        <FlatList data={this.props.advance} renderItem={this.renderItem} />
      </View>
    );
  }
}
AdvanceDetails.propTypes = {
  getAdvance: PropTypes.func.isRequired,
  deleteAdvance: PropTypes.func.isRequired,
  advance: PropTypes.object
  // newAdvance: PropTypes.object
};
const mapStateToProps = state => ({
  advance: state.advances.items

  // newAdvance: state.advances.item
  //we do state.advances because in our rootReducer(index.js) in reducers we have advances: advanceReducer
  // we use items because we get it from our advanceReducer
});

export default connect(mapStateToProps, { getAdvance, deleteAdvance })(
  AdvanceDetails
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
    backgroundColor: "#F5FCFF",
    color: "#7BC23E"
  },
  heading: {
    margin: 10,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
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
    borderRadius: 100
  },
  TouchableOpacityAdd: {
    color: "#fff",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    marginLeft: 20
  }
});

//Backup
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
//             source={require('../images/user.png')}
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
