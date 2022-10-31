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

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);

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
