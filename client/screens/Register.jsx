import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios'


export default function Register({navigation}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')


  const handleRegister = () => {
    axios({
      url: 'http://192.168.1.5:3000/users/register',
      method: 'POST',
      data: {
        name,email,password,address
      }
    })
    .then((res) => {
      console.log(res, '<<<<<<<RESPONYA');
    })
    .catch((err) => {
      console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
    })
  }
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      
      <Text>Username: {name} </Text>
      <Text>email: {email}</Text>
      <Text>password: {password}</Text>
      <Text>Address: {address} </Text>


      <TextInput
      style={styles.formInput}
      autoCompleteType="off"
      onChangeText={(text) => setName(text)}
      />
      <TextInput
      style={styles.formInput}
      autoCompleteType="off"
      onChangeText={(text) => setEmail(text)}
      />
       <TextInput
      style={styles.formInput}
      autoCompleteType="off"
      onChangeText={(text) => setPassword(text)}
      secureTextEntry={true}
      />
      <TextInput
      style={styles.formInput}
      autoCompleteType="off"
      onChangeText={(text) => setAddress(text)}
      />

      <Button
      title="Register"
      onPress={handleRegister}
      />

      <Text>Already had an account? 
       <Text 
       style={{color:'blue', textDecorationLine: 'underline'}}
       accessibilityRole='button'
       onPress={(e) => {
         e.preventDefault()
         navigation.replace('Login')
          }
        }
      > Login</Text>

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