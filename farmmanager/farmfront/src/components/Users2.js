import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default class Users2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        };
    }

    componentDidMount (){

        return fetch( 'http://192.168.178.1:8000/api/user/')
        .then ( (response) => response.json() )
        .then( (responseJson) => {

            this.setState({
                isLoading:false,
                dataSource: responseJson.user,
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        if (this.state.isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        }else {
            let users = this.state.dataSource.map((val, key) => {
                return
                <View key={name} style={styles.item}>
                    <Text>{val.name}</Text>
                </View>
            });
        }
        return (
            <View style={styles.container}>
                {users}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50

    }
})
