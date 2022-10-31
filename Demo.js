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


import { React, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import Api from './Api';


export default function Demo(Props) {
    const [data, setData] = useState();
    return (
        <View>
            <Text>Demo</Text>
            <Button
                title="Go to m2"
                onPress={() => Props.navi.navigate('home2', { ui: 'à' })}
            >

            </Button>
            <TouchableOpacity onPress={() => Props.navi.navigate('home2', { ui: 'à' })}>
                <Api />

            </TouchableOpacity>
        </View>

    );
}
