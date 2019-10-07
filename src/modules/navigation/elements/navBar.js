import {
    View,Text, StyleSheet
} from 'react-native';
import React, {Component} from 'react';


export default class NavBar extends Component {

    //General navbar of the application

    render() {
        return (
            <View style={styles.navBar}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        backgroundColor:'black'
    },
    title:{
        fontSize:30,
        fontFamily:'Wanted M54',
        color:'white',
        paddingBottom:10
    }

});
