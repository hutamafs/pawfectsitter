
import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Provider } from 'react-redux'
import store from './store'
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing'
import Login from './screens/Login'
import Register from './screens/Register'
import PetList from './screens/PetList'
import KeepersPage from './screens/KeepersPage'
import KeeperDetail from './screens/KeeperDetail'
import Home from './screens/Home';
import AddPet from './screens/AddPet'
import Order from './screens/Order'
import Chat from './screens/Chat'
import History from './screens/History'
import GMap from './screens/gMap'
import ChatRoom from './screens/ChatRoom'


import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const getFont = () => Font.loadAsync({
  'nunito': require('./assets/fonts/Nunito.ttf')
})



export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (


      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
            <Stack.Screen name="Landing" component={Landing}
              options={{ title: 'Landing' }}
            />
            <Stack.Screen name="Register" component={Register} 
              options={{title: 'Register'}}
            />
            <Stack.Screen name="Login" component={Login} 
              options={{title: 'Login'}}
            />
            
            <Stack.Screen name="Home" component={Home} 
              options={{title: 'Home'}}
            />
            <Stack.Screen name="KeepersPage" component={KeepersPage}
              options={{ title: 'Keepers' }}
            />
              <Stack.Screen name="KeeperDetail" component={KeeperDetail}
                options={{ title: '' }}
              />
              <Stack.Screen name="GMap" component={GMap}/>
              <Stack.Screen name="AddPet" component={AddPet}
                options={{ title: 'AddPet' }}
              />
              <Stack.Screen name="Order" component={Order}
                options={{ title: 'Order' }}
              />

              <Stack.Screen name="History" component={History}
                options={{ title: 'History' }}
              />
              <Stack.Screen name="PetList" component={PetList}
                options={{ title: 'PetList' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </TouchableWithoutFeedback>
    )
  } else {
    return (
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


//error di history => keluar sendiri
// error di login => text string
// error di addPet => text string
