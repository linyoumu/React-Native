/**
 * Created by linapple on 2017/9/20.
 */

import React, { Component } from 'react';
import styles from '../Styles/Main';
import SearchForm from './SearchForm';

import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    NavigatorIOS,
} from 'react-native';

class Search extends  React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title:'搜索',
                    component:SearchForm
                }}
                shadowHidden={true}
                barTintColor="darkslateblue"
                titleTextColor="rgba(255,255,255,0.8)"
                tintColor="rgba(255,255,255,0.8)"
                translucent={true}
            />
        );
    }
}

export {Search as default};