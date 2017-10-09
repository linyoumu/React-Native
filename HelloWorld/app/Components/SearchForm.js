/**
 * Created by linapple on 2017/9/20.
 */
import React, { Component } from 'react';
import styles from '../Styles/Main';
import SearchResult from './SearchResult';

import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    NavigatorIOS,
    TextInput,
} from 'react-native';

class SearchForm extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            query:''
        }
    }

    fetchData(){
        const  REQUEST_URL = `https://api.douban.com/v2/movie/search?q=${this.state.query}`;
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                this.props.navigator.push({
                    title: responseData.title,
                    component: SearchResult,
                    passProps:{
                        results: responseData.subjects
                    }
                })
            })
            .done();
    }

    render(){
        return(
            <View style={ [styles.container, {paddingTop: 60}] }>
                <View style={ {
                    paddingTop: 7,
                    paddingLeft: 7,
                    paddingRight: 7,
                    borderColor: "rgba(100, 53, 201, 0.1)",
                    borderBottomWidth: 1,
                }}>
                <TextInput
                    style={{height: 50}}
                    placeholder="搜索"
                    //secureTextEntry={true}
                    //placeholderTextColor="#6435c9"
                    //autoFocus={true}
                    //defaultValue="火星救援"
                    //keyboardType="url"
                    //multiline={true}
                    clearButtonMode="while-editing"
                    //clearTextOnFocus={true}
                    //enablesReturnKeyAutomatically={true}
                    returnKeyType="search"
                    //onFocus={() => console.log('onFocus')}
                    //onBlur={() => console.log('onBlur')}
                    //onChange={() => console.log('onChange')}
                    onChangeText={(query) => {
                        this.setState({
                            query
                        });
                    }}
                    //onEndEditing={() => console.log('onEndEditing')}
                    onSubmitEditing={this.fetchData.bind(this)}
                />
                </View>
            </View>
        );
    }
}

export {SearchForm as default};