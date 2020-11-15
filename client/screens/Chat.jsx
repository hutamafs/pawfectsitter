import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import {setSocket} from '../store/actions'




export default function Chat() {
    const {socket} = useSelector(state => state)
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([])

    const submitMessage = () => {
        socket.emit('chat message', message);
        setMessage('');
    }
    useEffect(() => {
        const socket = io("http://192.168.1.4:3000")
        dispatch(setSocket(socket))
        console.log(socket);
        if(socket) {
            socket.on('chat message', msg => {
                console.log(msg, '<<<<<, dari server');
            })
        }
    }, [])
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
      <Text>{JSON.stringify(chat)}</Text>
      <TextInput
      style={{borderWidth: 2, width: 100}}
      placeholder="Enter your message here"
      value={message}
      onChangeText={(text) => setMessage(text)}
      onSubmitEditing={submitMessage}
      />
    </View>
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