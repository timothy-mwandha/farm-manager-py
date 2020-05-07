// // import React, { Component } from "react";
// // import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

// // export default class Users2 extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             isLoading: true,
// //             dataSource: null
// //         };
// //     }

// //     componentDidMount (){

// //         return fetch( 'http://192.168.178.1:8000/api/user/')
// //         .then ( (response) => response.json() )
// //         .then( (responseJson) => {

// //             this.setState({
// //                 isLoading:false,
// //                 dataSource: responseJson.user,
// //             })
// //         })
// //         .catch((error) => {
// //             console.log(error)
// //         })
// //     }

// //     render() {
// //         if (this.state.isLoading){
// //             return(
// //                 <View style={styles.container}>
// //                     <ActivityIndicator />
// //                 </View>
// //             )
// //         }else {
// //             let users = this.state.dataSource.map((val, key) => {
// //                 return
// //                 <View key={name} style={styles.item}>
// //                     <Text>{val.name}</Text>
// //                 </View>
// //             });
// //         }
// //         return (
// //             <View style={styles.container}>
// //                 {users}
// //             </View>
// //         );
// //     }
// // }


// // const styles = StyleSheet.create({
// //     container:{
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         marginTop: 50

// //     }
// // })




// // import React, { Component } from 'react';
// // import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';
// // export default class App extends Component {
// // handlePress = async () => {
// //   fetch('https://data.advance88.hasura-app.io/v1/query', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //           "type": "select",
// //     "args": {
// //         "table": "author",
// //         "columns": [
// //             "name"
// //         ],
// //         "limit": "1"
// //     }
// //       })})
// //     .then((response) => response.json())
// //     .then((responseJson) => {
// //  Alert.alert("Author name at 0th index:  " + responseJson[0].name);
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //     });
// // }
// //   render(){
// //   return(
// //    <View style={{paddingTop: 50, paddingLeft: 50 }}>
// //    <Text> Some other text </Text>
// //     <Text> Some other text </Text>
// //     <TouchableOpacity onPress={this.handlePress.bind(this)}>
// //      <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
// //     </TouchableOpacity></View> 
// //   );
// // }
// // }





// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default Users2 = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/api/user/')
//       .then((response) => response.json())
//       .then((json) => setData(json.user))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   });

//   return (
//     <View style={{ flex: 1, padding: 44 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.name}, {item.email}, {item.phone}, {item.password}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };
