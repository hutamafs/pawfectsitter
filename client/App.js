import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import store from './store'
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing'
import Login from './screens/Login'
import Register from './screens/Register'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const getFont = () => Font.loadAsync({
    'nunito' : require('./assets/fonts/Nunito.ttf')
})




const Stack = createStackNavigator();


export default function App() {
  const [fontsLoaded , setFontsLoaded ] = useState(false)

  if (fontsLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} 
          options={{title: 'Landing'}}
          />
          <Stack.Screen name="Login" component={Login} 
          options={{title: 'Login'}}
          />
          <Stack.Screen name="Register" component={Register} 
          options={{title: 'Register'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else {
    return(
      <AppLoading 
      startAsync={getFont}
      onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
