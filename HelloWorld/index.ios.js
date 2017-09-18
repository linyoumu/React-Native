/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import styles from '.app/Styles/Main';

//import MovieList from './app/Components/MovieList';

//https://api.douban.com/v2/movie/top250
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
    ListView
} from 'react-native';

export default class HelloWorld extends Component {
  constructor(props){
   super(props);

    this.state = {
        movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    }),
        loaded: false
    };
    this.fetchData();
  }

  fetchData(){
      fetch('https://api.douban.com/v2/movie/top250')
          .then(response => response.json())
          .then(responseData => {
              this.setState({
                  movies: this.state.movies.cloneWithRows(responseData.subjects),
                  loaded: true
              });
          })
          .done();
  }

  renderMovieList(movie){

      return (
          <View style = {styles.item}>
              <View style = {styles.itemImage}>
                  <Image
                      source={{uri: movie.images.large}}
                      style={styles.image}
                  />
              </View>
              <View style = {styles.itemContent}>
                  <Text style={styles.itemHeader}>{movie.title}</Text>
                  <Text style={styles.itemHeader}>
                      { movie.original_title} ( {movie.year} )
                  </Text>
                  <Text style={styles.redText}>
                      {movie.rating.average}
                  </Text>
              </View>
          </View>
      );
  }

  render() {
      if (!this.state.loaded){
          return (
              <View style = { styles.container }>
                  <View style = { styles.loading}>
                      <Text>加载中...</Text>
                  </View>
              </View>
          );
      }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={ this.renderMovieList }
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        //backgroundColor: '#fff',
        borderColor:'rgba(100,53,201,0.1)',
        paddingBottom:6,
        marginBottom: 5,
        flex: 1,
    },
    itemContent:{
        marginTop: 6,
        marginLeft: 13,
        flex: 1,
    },
    itemHeader:{
        fontSize: 18,
        fontFamily: 'Helvetica Neue',
        color: '#6435e9',
        fontWeight: '200',
        marginBottom: 5,
    },
    itemMeta:{
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 5,
    },
    redText:{
        color: '#db2828',
        fontSize: 16,
    },
    loading:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
