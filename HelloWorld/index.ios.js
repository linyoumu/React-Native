/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import icons from './app/Assets/Icons';
import Featured from './app/Components/Featured';
import Search from './app/Components/Search';

import {
    AppRegistry,
    TabBarIOS,
} from 'react-native';

export default class HelloWorld extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedTabItem: 0
        };
    }



    render() {
        return (
            <TabBarIOS barTintColor="darkslateblue" tintColor="white">
            <TabBarIOS.Item
        //systemIcon="featured"
        icon={{uri:icons.star, scale: 4.6}}
        selectedIcon={{uri:icons.starActive, scale: 4.6}}
        title="推荐电影"
        onPress={() => {
            this.setState({selectedTabItem: 0})
        }}
        selected={this.state.selectedTabItem == 0}
    >
    <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        //systemIcon="most-viewed"
        icon={{uri:icons.board, scale: 4.6}}
        selectedIcon={{uri:icons.boardActive, scale: 4.6}}
        title="北美票房"
        onPress={() => {
            this.setState({selectedTabItem:1})
        }}
        selected={this.state.selectedTabItem == 1}
    >
    <USBox />
        </TabBarIOS.Item>

        <TabBarIOS.Item
        icon={{uri:icons.search, scale: 4.6}}
        title="搜索"
        onPress={() => {
            this.setState({selectedTabItem:2})
        }}
        selected={this.state.selectedTabItem == 2}
    >
    <Search />
        </TabBarIOS.Item>
        </TabBarIOS>
    );
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
