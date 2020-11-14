import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home'
import Order from '../Order'
import Chat from '../Chat'
import History from '../History'

const Tab = createBottomTabNavigator();


export default function TabBar() {
  return (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Order" component={Order} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="History" component={History} />
  </Tab.Navigator>
  );
}