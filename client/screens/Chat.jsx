import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';
import TabBar from './components/TabBottomNavbar'
import firebaseSDK from './config/firebaseSDK';
import {setMessages} from '../store/actions'
import { ScrollView } from 'react-native-gesture-handler';


export default function Chat({navigation, route}) {
  const dispatch = useDispatch()
  const {messages} = useSelector(state => state)
  const {userData} = route.params
  useEffect(() => {
    console.log(userData, '<<<<<<<< ini dioper dari home');
    firebaseSDK.refOn(message => {
      dispatch(setMessages(message))
      GiftedChat.append(messages)
    })
  }, [])
  return (
    <>
    {/* <ScrollView>
    <Text>{JSON.stringify(messages)}</Text>
    </ScrollView> */}
    <GiftedChat
      messages={messages}
      onSend={firebaseSDK.send}
      user={{
        ...userData,
        _id: firebaseSDK.uid
      }}
    />
    <TabBar
      navigation={navigation}
      userData={userData}
    />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});