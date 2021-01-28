import React from 'react';
import HomeScreen from './Screens/HomeScreen'
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import dataReducer from './Reducer/Reducer/Reducers';
import {persistStore,persistReducer} from 'redux-persist';
import {nameData} from './Data/data'
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxThunk from 'redux-thunk';
import MainNavigator from './Navigator/MainNavigator';

const App=props=> {


  const persistConfig={
    key:'root',
    storage:AsyncStorage
  }

  const persistedReducer=persistReducer(persistConfig,dataReducer);


  // const Reducer=combineReducers({
  //   MainReducer:dataReducer
  // })

  const store=createStore(persistedReducer,applyMiddleware(ReduxThunk));

  let persist=persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
      <MainNavigator/>

      </PersistGate>
            </Provider>

    );
};


export default App;
