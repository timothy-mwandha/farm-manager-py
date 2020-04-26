import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from "react-native";
import { getAdvances, deleteAdvance } from "../actions/advanceActions";
import { connect } from "react-redux";

class AdvanceLand extends Component {
  componentDidMount() {
    this.props.getAdvances();
  }

  render() {
    let { navigation, route } = this.props;
    const advance = this.props;

    const advanceItems = this.props.advances.map(advance => (
      <View key={advance.id}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AdvanceDetails", {
                itemId: advance.id
              });
            }}
          >
            <Text style={{ color: "#228B22" }}>Name : {advance.name}</Text>
            <Text style={{ color: "#228B22" }}>
              Position: {advance.position}
            </Text>
            <Text style={{ color: "#228B22" }}>
              Amount: {advance.advancedamnt}
            </Text>
            <Text style={{ color: "#228B22" }}>Date: {advance.date}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}> Advance Summaries </Text>
          {advanceItems}
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Advance")}
          >
            <Text style={styles.TouchableOpacityAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  advances: state.advances.items
});

export default connect(mapStateToProps, { getAdvances, deleteAdvance })(
  AdvanceLand
);

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#006432",
    textAlign: "center"
  },
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "transparent",
    justifyContent: "center",
    padding: 8,
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3
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

// iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
// Get data with redux-working backupcopy
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import {
//   getAdvances,
//   addAdvance
//   // detailAdvance
// } from "../actions/advanceActions";

// import {
//   Text,
//   View,
//   Button,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity
// } from "react-native";

// class AdvanceLand extends Component {
//   componentDidMount() {
//     this.props.getAdvances();
//   }
//   // componentDidUpdate(nextProps) {
//   //   if (nextProps.newAdvance) {
//   //     this.props.advances.unshift(nextProps.newAdvance);
//   //   }
//   // }

//   renderItem = ({ item }) => {
//     let { navigation } = this.props;
//     return (
//       <TouchableOpacity
//         style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}
//         onPress={() => navigation.navigate("AdvanceDetails", { id: item.id })}
//       >
//         <View
//           style={{
//             flex: 1,
//             alignSelf: "stretch",
//             flexDirection: "row",
//             height: 35,
//             margin: 10
//           }}
//         >
//           <View style={styles.containerOne}>
//             <Text style={styles.textOne}>{`${item.name}`}</Text>
//             <Text style={styles.textTwo}>{`${item.position}`}</Text>
//           </View>
//           <View style={styles.containerTwo}>
//             <Text style={styles.textOne}>{`${item.advancedamnt}`}</Text>
//             <Text style={styles.textTwo}>{`${item.date}`}</Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   render() {
//     const { navigation } = this.props;
//     // console.log(this.props.advances);
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={styles.heading}> Advance Summaries</Text>
//           <View
//             style={{
//               flex: 1,
//               alignSelf: "stretch",
//               flexDirection: "row",
//               height: 35,
//               fontSize: 30,
//               margin: 10
//             }}
//           >
//             <View style={styles.containerOne}>
//               <Text style={styles.textOne}>Staff Name</Text>
//               <Text style={styles.textTwo}>Position</Text>
//             </View>
//             <View style={styles.containerTwo}>
//               <Text style={styles.textOne}>Shs: Advance</Text>
//               <Text style={styles.textTwo}>Date of Payment</Text>
//             </View>
//           </View>
//           <FlatList
//             data={this.props.advances}
//             renderItem={this.renderItem}
//             keyExtractor={item => item.id.toString()}
//             // keyExtractor={item => item.id}
//             // keyExtractor={(item, index) => index.toString()}
//           />
//           <TouchableOpacity
//             style={styles.TouchableOpacityStyle}
//             onPress={() => navigation.navigate("advance")}
//           >
//             <Text style={styles.TouchableOpacityAdd}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// AdvanceLand.propTypes = {
//   getAdvances: PropTypes.func.isRequired,
//   // detailAdvance: PropTypes.func.isRequired,
//   advances: PropTypes.array.isRequired
//   // newAdvance: PropTypes.object
// };

// const mapStateToProps = state => ({
//   advances: state.advances.items
//   // newAdvance: state.advances.item
//   //we do state.advances because in our rootReducer(index.js) in reducers we have advances: advanceReducer
//   // we use items because we get it from our advanceReducer
// });

// export default connect(mapStateToProps, { getAdvances })(AdvanceLand);

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
//     color: "#006432",
//     textAlign: "center",
//     fontSize: 20
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
//   },
//   textTwo: {
//     color: "#228B22",
//     borderBottomWidth: 1.5,
//     borderBottomColor: "green"
//   },
//   textOne: {
//     color: "#006400",
//     fontWeight: "bold",
//     fontSize: 16,
//     alignSelf: "stretch",
//     marginBottom: 3
//   },
//   containerOne: {
//     flex: 1,
//     alignSelf: "stretch"
//   },
//   containerTwo: {
//     flex: 2,
//     alignSelf: "stretch"
//   }
// });
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// import "react-native-gesture-handler";
// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ScrollView,
//   StyleSheet
// } from "react-native";
// import {
//   getAdvances,
//   deleteAdvance
//   // detailAdvance
// } from "../actions/advanceActions";
// import { connect } from "react-redux";

// class AdvanceLand extends Component {
//   componentDidMount() {
//     this.props.getAdvances();
//   }

//   render() {
//     let { navigation, route } = this.props;
//     const advance = this.props;

//     const advanceItems = this.props.advances.map(advance => (
//       <View key={advance.id}>
//         <View style={styles.container}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("AdvanceDetails", {
//                 itemId: advance.id
//               });
//             }}
//           >
//             <Text>Name : {advance.name}</Text>
//             <Text>Position: {advance.position}</Text>
//             <Text>Amount: {advance.advancedamnt}</Text>
//             <Text>Date: {advance.date}</Text>
//           </TouchableOpacity>
//         </View>
//         {/* <TouchableOpacity
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
//                 </TouchableOpacity> */}
//       </View>
//     ));
//     return (
//       <ScrollView>
//         <View>
//           <Text> Advance Summary </Text>
//           {advanceItems}
//         </View>
//       </ScrollView>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   advances: state.advances.items
// });

// export default connect(mapStateToProps, { getAdvances, deleteAdvance })(
//   AdvanceLand
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#ecef57',
//     borderRadius: 10,
//     margin: 5,
//     // fontSize: 24,
//     justifyContent: "center",
//     // alignItems: "center",
//     // fontSize:30,
//     padding: 8,
//     shadowColor: "green",
//     shadowOffset: {
//       width: 0,
//       height: 20
//     },
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     elevation: 3
//     // backgroundColor: '#d1f0d9'
//   }
// });
