// // import React, { useEffect, useState } from 'react';
// // import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// // // exports.vl = function () {
// // //     return <Text>aaaaaaaaaaaaaaaaa</Text>;
// // // }

// // export default function Api() {
// //     const [isLoading, setLoading] = useState(true);
// //     const [data, setData] = useState([]);

// //     const getMovies = async () => {
// //         try {
// //             const response = await fetch('https://reactnative.dev/movies.json');
// //             const json = await response.json();
// //             setData(json.movies);
// //         } catch (error) {
// //             console.error(error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     }

// //     useEffect(() => {
// //         getMovies();
// //     }, []);

// //     return (
// //         <View style={{ flex: 1, padding: 24 }}>
// //             {/* {isLoading ? <ActivityIndicator /> : (
// //                 <FlatList
// //                     data={data}
// //                     keyExtractor={({ id }, index) => id}
// //                     renderItem={({ item }) => (
// //                         <Text>|{item.title}, {item.releaseYear}| ui: {data.title}</Text>
// //                     )}
// //                 />
// //             )} */}
// //             {data.title}
// //         </View>
// //     );
// // };


// // // let rootURL = 'https://www.omdbapi.com/?i=tt3896198&apikey=6d57295a';




// //
// {/* <ActivityIndicator /> */ }
// // let rooturl = "https://www.omdbapi.com/";
// // fetch('https://www.omdbapi.com/s=Harry')
// //     .then(res => res.json())
// //     .then(resJson => {
// //         // <Text>s</Text>
// //         return 'a';
// //         // console.log(resJson.Title)
// //         // console.log(resJson.errors)
// //         // console.log(resJson.data)
// //     })

// import React, { useEffect, useState } from 'react'
// import { Button, StyleSheet, Text, View, ActivityIndicator, ListView } from 'react-native';

// export default function Api() {
//     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//     const [ay, setAy] = useState(ds.cloneWithRows([]));
//     var as;
//     let rooturl = "https://www.omdbapi.com/";
//     // fetch('https://www.omdbapi.com/?s=Harry&apikey=6d57295a')
//     //     .then(res => res.json())
//     //     .then(resJson => {
//     //         // <Text>s</Text>
//     //         // setA(resJson.Search)
//     //         // console.log("ayy" + resJson.Title);
//     //         console.log(typeof (resJson.Search))
//     //         // setAy(resJson.Search)
//     //         as = resJson.Search;
//     //         console.log(as.map(e => 'ui'))

//     //         // setA(resJson.Search[0].Title);
//     //         // var as = resJson.Search;
//     //         // setA(resJson.Search);
//     //         // resJson.Search[0].map(e => (<Text>e.Title</Text>))
//     //         // console.log(resJson.data)
//     //     })

//     const getapi = () => {
//         return fetch('https://www.omdbapi.com/?s=batman&apikey=6d57295a')
//             .then((response) => response.json())
//             .then((json) => {
//                 // return json.Search[0].Title;
//                 return json.Search;

//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
//     var ass = [1, 2, 3];

//     getapi().then((data) => { setAy(ds.cloneWithRows(data)) })
//     // useEffect(setAy(as), []);
//     return (
//         // <Text>
//         //     Api

//         //     {/* {console.log(ass.map(e => e))} */}
//         //     {/* {console.log(getapi())} */}
//         //     {getapi().then((a) => { setAy(a) })}

//         //     {ay}
//         //     {/* {console.log(ay[0].Title)} */}
//         //     {/* {console.log(as.map(e => e))} */}
//         // </Text>
//         <ListView dataSource={ay} renderRow={(rowData) => { return (<Text>{rowData.title}</Text>) }}>

//         </ListView>

//     )
// }


import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';

export default function Api() {
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
    // useEffect(() => {
    //   getMovies();
    // }, []);
    var sum = data.length;
    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (

                        <View>

                            <Text style={{}}> < Image style={{ width: 50, height: 50, }} source={{ uri: item.Poster, }} />  {item.Title}</Text>
                            <Text>sum: {sum}</Text>
                        </View>
                    )}
                />
            )}
            {/* <View> map :

                {data.map((e, i) => <View key={i}>
                    <View>{e.Title}</View>


                    < Image style={{ width: 50, height: 50, }} source={{ //uri: `${e.Poster}`,
                        uri: e.Poster,
                    }} />{"\n"}

                </View>)

                }

            </View > */}
        </View >
    );
};

