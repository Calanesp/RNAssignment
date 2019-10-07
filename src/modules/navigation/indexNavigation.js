import React, {Component} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Router, Scene} from 'react-native-router-flux'
import reduxPersis from "../reduxPersis/reduxPersis"
import ListView from "../../modules/listView/listView"
import MediaDetail from "../../modules/mediaDetail/mediaDetail"
import NavBar from "../../modules/navigation/elements/navBar"
import Searcher from "../../modules/searcher/searcher"

export default class IndexNavigation extends Component {
    render() {
        return (
            <View style={Platform.OS === 'ios' ? styles.containersIos : styles.containersAndroid}>
                <Router>
                    <Scene key='root' panHandlers={null}>
                        <Scene
                            key="ReduxPersis"
                            component={reduxPersis}
                            initial
                            hideNavBar
                        />
                        <Scene
                            key="ListView"
                            component={ListView}
                            navBar={NavBar}
                            title={'The Movie Assignment'}
                        />
                        <Scene
                            key="MediaDetail"
                            component={MediaDetail}
                            navBar={NavBar}
                            title={'Details'}
                        />
                        <Scene
                            key="Searcher"
                            component={Searcher}
                            navBar={NavBar}
                            title={'Searcher'}
                        />
                    </Scene>
                </Router>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    containersIos: {
        flex: 1,

    },

    containersAndroid: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.1)'
    }
});