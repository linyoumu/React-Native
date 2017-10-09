/**
 * Created by linapple on 2017/9/17.
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../Styles/Main';

import MovieDetail from './MovieDetail';

import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

class MovieList extends Component {
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
        fetch(REQUEST_URL)
            .then(response => response.json())
    .then(responseData => {
            this.setState({
            movies: this.state.movies.cloneWithRows(responseData.subjects),
            loaded: true
        });
    })
    .done();
    }

    showMovieDetail(movie){
        this.props.navigator.push({
            title: movie.title,
            component: MovieDetail,
            passProps: {movie},
        });
    }

    renderMovieList(movie){

        return (
            <TouchableHighlight
        underlayColor="rgb(132, 123, 100)"
        onPress = {() => this.showMovieDetail(movie)}
    >
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
        </TouchableHighlight>
    );
    }

    render() {
        if (!this.state.loaded){
            return (
                <View style = { styles.container }>
        <View style = { styles.loading}>
        <ActivityIndicator
            size="large"
            color="#6435c9"
                />
                </View>
                </View>
        );
        }
        return (
            <View style={styles.container}>
    <ListView
        dataSource={this.state.movies}
        renderRow={ this.renderMovieList.bind(this) }
    />
    </View>
    );
    }
}

export { MovieList as default };