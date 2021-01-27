/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import dataReducer from './Reducer/Reducer/Reducers';

const App=props=> {


  // const Reducer=combineReducers({
  //   MainReducer:dataReducer
  // })

  const store=createStore(dataReducer);

  return (
    <Provider store={store}>
            <HomeScreen/>
            </Provider>

    );
};


export default App;
