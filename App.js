import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './Navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer/index'

export default function App() {

  //create redux store
  const store = createStore(rootReducer, applyMiddleware(thunk)); //REMEMBER, CALL ROOTREDUCER SENZA PARENTESI TONDE
  return (

    <Provider store={store}>
       <MainNavigation />
    </Provider>
    
  );
}

