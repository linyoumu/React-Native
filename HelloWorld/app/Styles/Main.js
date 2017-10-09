/**
 * Created by linapple on 2017/9/17.
 */

import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        //backgroundColor: '#fff',
        borderColor:'rgba(100,53,201,0.1)',
        paddingBottom:6,
        marginBottom: 5,
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
        flex: 1,
        backgroundColor: '#eae7FF',
    },

    itemText:{
        fontSize: 16,
        fontFamily: 'Helvetica Neue',
        color: 'rgba(0,0,0,0.8)',
        fontWeight: '300',
        lineHeight: 26,
    },
});

export { styles as default };