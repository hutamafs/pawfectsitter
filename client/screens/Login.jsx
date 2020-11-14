import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import {setToken} from '../store/actions'
import {useDispatch} from 'react-redux'

export default function Login({navigation}) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    axios({
      url: 'http://192.168.1.5:3000/users/login',
      method: 'POST',
      data: {
        email,password
      }
    })
    .then((res) => {
      console.log(res, '<<<<<<<RESPONYA');
      dispatch(setToken(res.data.access_token))
      navigation.replace('Home')
    })
    .catch((err) => {
      console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
    })
  }

  return (
    <View style={styles.container}>
      <Text>Login Page</Text>

      <Text>email: {email}</Text>
      <Text>password: {password}</Text>

  
      <TextInput
      style={styles.formInput}
      autoCompleteType="off"
      keyboardType="email-address"
      onChangeText={(text) => setEmail(text)}
      />
      <TextInput
      style={styles.formInput}
      autoCompleteType="off"
      onChangeText={(text) => setPassword(text)}
      secureTextEntry={true}
      />

      <Button
      title="Login"
      onPress={handleLogin}
      />
     <Text>Don't have an account yet? 
       <Text 
       style={{color:'blue', textDecorationLine: 'underline'}}
       accessibilityRole='button'
       onPress={(e) => {
        e.preventDefault()
        navigation.replace('Register')
         }
       }
       > Register</Text>

     </Text>

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
  formInput: {
    width: 100,
    borderWidth: 2
  }
});