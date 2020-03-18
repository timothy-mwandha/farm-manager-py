import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'

export default class AnchorButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    backgroundColor : "yellow",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
                }}>
            <Button onPress={this._onPressButton}            
            title="SAVE"
            accessibilityLabel="Learn more about this button"
          /> 
          </TouchableOpacity> 
        )
    }
}

const styles = StyleSheet.create({
  butt: {
    marginTop: 20,
    marginBottom: 50
  },