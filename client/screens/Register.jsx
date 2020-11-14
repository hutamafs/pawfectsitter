import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Register({navigation}) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Username:</Text>
      <TextInput onChangeText={text => setUsername(text)} value={username} style={styles.textInput}/>
      <Text>Email:</Text>
      <TextInput onChangeText={text => setEmail(text)} value={email} style={styles.textInput}/>
      <Text>Password:</Text>
      <TextInput onChangeText={text => setPassword(text)} value={password} style={styles.textInput}/>
      <View style={styles.buttonStyle}>
        <Button Button title='Register' onPress={() => navigation.navigate('Login')}></Button>
      </View>
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
  textInput: {
    borderWidth: 1,
    width: 200,
    marginBottom: 10
  },
  buttonStyle: {
    margin: 10,
  }
});