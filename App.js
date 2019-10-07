import configureStore from './src/services/Store/store';
import {Provider} from "react-redux";
import React, {Component} from "react";
import {StatusBar, SafeAreaView, StyleSheet, Platform} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react'
import IndexNavigation from "./src/modules/navigation/indexNavigation";


const {persistor, store} = configureStore();
//TODO quitar la opción de landscape view
export default class App extends Component {


  render() {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor} onBeforeLift={this._onBeforeLift}>
            <SafeAreaView style={styles.AndroidSafeArea}>
              <StatusBar
                  backgroundColor={'black'}
                  barStyle="white-content"
              />
              <IndexNavigation/>
            </SafeAreaView>
          </PersistGate>
        </Provider>
    );
  }

}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor:'black',
        paddingTop: Platform.OS === "android" ? 24 : 0
    }
});