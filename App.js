import { Provider } from 'react-redux';
import { store } from './android/redux/store';
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './android/screens/home2';
import SecondPage from './android/screens/home1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer><Provider store={store}>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
      </Stack.Navigator></Provider>
    </NavigationContainer>
  );
};

export default App;
