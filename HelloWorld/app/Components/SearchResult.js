/**
 * Created by linapple on 2017/9/20.
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

class SearchResult extends  React.Component{
    constructor(props){
        super(props);
        let  dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });


        this.state = {
            movies: dataSource.cloneWithRows(this.props.results),
        }

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

                        <Text style={styles.itemHeader}>
                            { movie.title} ( {movie.year} )
                        </Text>
                        <Text style={styles.redText}>
                            {movie.rating.average}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }


    render(){
        return(
            <View style = {styles.container}>
                <ListView
                    dataSource={this.state.movies}
                    renderRow={this.renderMovieList.bind(this)}
                />
            </View>
        );
    }
}

export {SearchResult as default};