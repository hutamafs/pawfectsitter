import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';
import TabBar from './components/TabBottomNavbar'
import firebaseSDK from './config/firebaseSDK';
import {setMessages} from '../store/actions'


export default function Chat({navigation, route}) {
  // const dispatch = useDispatch()
  // const {messages} = useSelector(state => state)
  const {order} = route.params
  const [messages, setMessages] = useState([]);
  

  // const {userData} = route.params
  useEffect(() => {
      console.log(order);
    setMessages([
      {
        _id: 1,
        text: 'Hello, May I help you?',
        createdAt: new Date(),
        user: {
          _id: order.keeperId,
          name: order.keeperName,
          avatar: order.keeperImage
        },
      },
    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    firebaseSDK.send(messages)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    console.log(messages, '<<<<<ini');
  }, [])
  return (
    <>
    {/* <ScrollView>
    <Text>{JSON.stringify(messages)}</Text>
    </ScrollView> */}
    {/* <GiftedChat
      messages={messages}
      onSend={firebaseSDK.send}
      user={{
        ...userData,
        _id: firebaseSDK.uid,
      }}
    /> */}
    {/* <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
          _id: firebaseSDK.uid,
          userId: order.user_id
      }
      }
    /> */}
     <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
          _id: firebaseSDK.uid,
          userId: order.user_id
      }
      }
    />
    <TabBar
      navigation={navigation}
      // userData={userData}
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