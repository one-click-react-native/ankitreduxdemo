import React from 'react';
import HomeScreen from './Screens/HomeScreen'
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import dataReducer from './Reducer/Reducer/Reducers';
import {persistStore,persistReducer} from 'redux-persist';
import {nameData} from './Data/data'
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

const App=props=> {


  const persistConfig={
    key:'root',
    storage:AsyncStorage
  }

  const persistedReducer=persistReducer(persistConfig,dataReducer);


  // const Reducer=combineReducers({
  //   MainReducer:dataReducer
  // })

  const store=createStore(persistedReducer);

  let persist=persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
      <HomeScreen/>

      </PersistGate>
            </Provider>

    );
};


export default App;
