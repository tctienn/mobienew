import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import Api from './Api';
import Demo from './Demo';
import Demo2 from './Demo2';
// import React, { useState } from 'react';
// import { squareNumber, pi } from './Exports';
import { squareNumber, pi, ui } from './Exports';

// api : http://www.omdbapi.com/?t=batman  ?? https://www.omdbapi.com/?i=tt3896198&apikey=6d57295a
function M1({ navigation }) {
  return (
    <View>
      <Demo navi={navigation} />
    </View>
  )
}
function M2({ route, navigation }) { // Phải dúng từ khóa route ko dc đặt khác
  const { ui } = route.params;

  return (
    <View>
      <Text>Demo2 ui:{JSON.stringify(ui)} </Text>
      <Button
        title="Go to m2"
        onPress={() => navigation.navigate('home1')}
      />
    </View>
  )
}


const stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch('https://www.omdbapi.com/?s=batman&apikey=6d57295a');
      const json = await response.json();
      setData(json.Search);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  getMovies();
  var id = data.imdbID;
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='home'>
        <stack.Screen name='home' component={M1} />
        <stack.Screen name='home2' component={M2} />
      </stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Api />
    // </View>

  );
}


///
// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

// // function DetailsScreen({ bien, navigation }) {
// //   const { itemId } = bien.params;
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Details Screen {JSON.stringify(itemId)}</Text>
// //       <Button
// //         title="Go to Details... again"
// //         onPress={() => navigation.navigate('Details')}
// //       />
// //     </View>
// //   );
// // }

// function DetailsScreen({ bien, navigation }) {
//   /* 2. Get the param */
//   const { itemId } = bien.params;
//   // const { otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;




// // import * as React from 'react';
// // import { Text, View, Button } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={() => {
// //           /* 1. Navigate to the Details route with params */
// //           navigation.navigate('Details', {
// //             itemId: 86,
// //             otherParam: 'anything you want here',
// //           });
// //         }}
// //       />
// //     </View>
// //   );
// // }

// // function DetailsScreen({ route, navigation }) {
// //   /* 2. Get the param */
// //   const { itemId, otherParam } = route.params;
// //   // const { otherParam } = route.params;
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Details Screen</Text>
// //       <Text>itemId: {JSON.stringify(itemId)}</Text>
// //       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
// //       <Button
// //         title="Go to Details... again"
// //         onPress={() =>
// //           navigation.push('Details', {
// //             itemId: Math.floor(Math.random() * 100),
// //           })
// //         }
// //       />
// //       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
// //       <Button title="Go back" onPress={() => navigation.goBack()} />
// //     </View>
// //   );
// // }

// // const Stack = createNativeStackNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="Details" component={DetailsScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }
