/**
 * Created by linapple on 2017/9/17.
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import styles from '.app/Styles/Main';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

class MovieList extends Component {
    constructor(props){
        super(props);
        let movies = [
            {title: '善守他人'},
            {title: '无敌天地'},
            {title: '寻宝之旅'},
            {title: '月光宝盒'},
            {title: '西游记'},
        ];

        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            movies: dataSource.cloneWithRows(movies)
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.movies}
                    renderRow={(movie) => <Text style = {styles.itemText}>{movie.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    overlay:{
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems:'center',
    },
    overlayHeader:{
        fontSize: 33,
        fontFamily: 'Helvetica Neue',
        fontWeight: '300',
        padding: 10,
        color: '#eae7ff',
    },
    overlaySubHeader:{
        fontSize: 18,
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
        padding: 10,
        color: '#eae7ff',
        paddingTop: 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode:'cover',
    },
    image:{
        width: 99,
        height: 138,
        margin: 6,
    },
    container: {
        // justifyContent: 'space-around',
        //alignItems: 'flex-end',
        flex: 1,
        backgroundColor: '#eae7FF',
        paddingTop: 30,
        flexDirection: 'row',
    },
    item:{
        backgroundColor: '#fff',
        borderColor:'#6435e9',
        borderWidth:1,
        margin: 6,
        flex: 1,
    },
    itemOne:{
        //alignSelf: 'flex-start',
    },
    itemTwo:{
        //alignSelf: 'center',
    },
    itemThree:{
        //alignSelf: 'flex-start',
        flex: 2,
    },
    itemText:{
        fontSize: 26,
        fontFamily: 'Helvetica Neue',
        color: '#6435e9',
        fontWeight: '200',
        padding:30,
    },
    /*
     title: {
     fontSize: 26,
     textAlign: 'center',
     color: '#6435e9',
     fontStyle: 'italic',
     letterSpacing:2,
     lineHeight: 33,
     fontFamily: 'Helvetica Neue',
     fontWeight: '300',
     textDecorationLine: 'underline',
     },
     instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
     },
     */
});

export { MovieList as default };