// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import react from 'react';

// export default function Demo() {
//     return (
//         <Text>
//             demo
//         </Text>
//     );
// }


import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


export default function Demo() {
    return (
        <View>
            <Text>Demo2</Text>
            <Button
                title="Go to m2"
                onPress={() => navigation.navigate('home1')}
            />
        </View>

    );
}
