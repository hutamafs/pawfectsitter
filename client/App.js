import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import store from './store'
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing'
import Login from './screens/Login'
import Register from './screens/Register'





export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
        options={{title: 'Login'}}
        />
        <Stack.Screen name="Landing" component={Landing} 
        options={{title: 'Landing'}}
        />
        <Stack.Screen name="Register" component={Register} 
        options={{title: 'Register'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
