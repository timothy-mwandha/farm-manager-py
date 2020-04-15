// Get data with redux
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getAdvances,
  addAdvance
  // deleteAdvance
} from "../actions/advanceActions";

import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

class AdvanceLand extends Component {
  componentDidMount() {
    this.props.getAdvances();
  }
  // componentDidUpdate(nextProps) {
  //   if (nextProps.newAdvance) {
  //     this.props.advances.unshift(nextProps.newAdvance);
  //   }
  // }

  renderItem = ({ item }) => {
    let { navigation } = this.props;
    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}
        onPress={() => navigation.navigate("AdvanceDetails", { id: item.id })}
        // onPress={this.props.getAdvance.bind(this, item.id)}
      >
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            flexDirection: "row",
            height: 35,
            margin: 10
          }}
        >
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text
              style={{
                color: "#006400",
                fontWeight: "bold",
                fontSize: 16,
                alignSelf: "stretch",
                marginBottom: 3
              }}
            >
              {`${item.name}`}
            </Text>
            <Text
              style={{
                color: "#228B22",
                borderBottomWidth: 1.5,
                borderBottomColor: "green"
              }}
            >{`${item.position}`}</Text>
          </View>
          <View style={{ flex: 2, alignSelf: "stretch" }}>
            <Text
              style={{
                color: "#006400",
                fontWeight: "bold",
                fontSize: 16,
                alignSelf: "stretch",
                marginBottom: 3
              }}
            >{`${item.advancedamnt}`}</Text>
            <Text
              style={{
                color: "#228B22",
                borderBottomWidth: 1.5,
                borderBottomColor: "green"
              }}
            >{`${item.date}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}> Advance Summaries</Text>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              height: 35,
              fontSize: 30,
              margin: 10
            }}
          >
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text
                style={{
                  color: "#006400",
                  fontWeight: "bold",
                  fontSize: 16,
                  alignSelf: "stretch",
                  marginBottom: 3
                }}
              >
                Staff Name
              </Text>
              <Text
                style={{
                  color: "#228B22",
                  borderBottomWidth: 1.5,
                  borderBottomColor: "green"
                }}
              >
                Position
              </Text>
            </View>
            <View style={{ flex: 2, alignSelf: "stretch" }}>
              <Text
                style={{
                  color: "#006432",
                  fontWeight: "bold",
                  fontSize: 16,
                  alignSelf: "stretch",
                  marginBottom: 3
                }}
              >
                Shs: Advance
              </Text>
              <Text
                style={{
                  color: "#228B22",
                  borderBottomWidth: 1.5,
                  borderBottomColor: "green"
                }}
              >
                Date of Payment
              </Text>
            </View>
          </View>
          <FlatList
            data={this.props.advances}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("advance")}
          >
            <Text style={styles.TouchableOpacityAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

AdvanceLand.propTypes = {
  getAdvances: PropTypes.func.isRequired,
  // deleteAdvance: PropTypes.func.isRequired,
  advances: PropTypes.array.isRequired
  // newAdvance: PropTypes.object
};

const mapStateToProps = state => ({
  advances: state.advances.items
  // newAdvance: state.advances.item
  //we do state.advances because in our rootReducer(index.js) in reducers we have advances: advanceReducer
  // we use items because we get it from our advanceReducer
});

export default connect(mapStateToProps, { getAdvances })(AdvanceLand);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
    backgroundColor: "#F5FCFF"
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
