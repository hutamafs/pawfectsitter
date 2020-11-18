import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Image ,  StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios'
import logo from '../assets/logoDog.png'
import Button from 'apsl-react-native-button'
import firebaseSDK from './config/firebaseSDK';
import logoKaki from '../assets/logoKaki.png'
import cat from '../assets/cat2.png'


export default function Register({navigation}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')


  const handleRegister = () => {
    axios({
      url: 'http://192.168.100.6:3000/users/register',
      method: 'POST',
      data: {
        name,email,password,address
      }
    })
    .then(async (res) => {
      console.log(res, '<<<<<<<RESPONYA');
      console.log(res);
      // firebase
      try {
        const user = {
          name: name,
          email: email,
          password: password
        };
        await firebaseSDK.createAccount(user);
        navigation.replace('Login')
      } catch ({ message }) {
        console.log('create account failed. catch error:' + message);
      }
    })
    .catch((err) => {
      console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
      alert('Please make sure the input fields are not empty')
    })
  }
  return (
    <View style={styles.container}>
      
      <View 
      style={{
        flexDirection: "row",
        marginTop : -160,
      }}>
        <Image source={logoKaki} 
        style={{ 
          width: 180, 
          height: 180,
          marginLeft : -90,
        }} />
        <Text style={[
          styles.textStyle , {
            marginTop : 54,
            marginLeft : -65,
            color: '#2F3542',
            fontSize : 35
           }]}>pawfect sitter</Text>
      </View>

      <TextInput
      style={[styles.formInput , { letterSpacing : 3 }]}
      placeholder="username" 
      autoCompleteType="off"
      onChangeText={(text) => setName(text)}
      />
      <TextInput
      style={[styles.formInput , { letterSpacing : 3 }]}
      placeholder="email@mail.com" 
      autoCompleteType="off"
      autoCapitalize="none"
      keyboardType="email-address"
      onChangeText={(text) => setEmail(text)}
      />
       <TextInput
      style={[styles.formInput , { letterSpacing : 3 }]}
      placeholder="password" 
      autoCompleteType="off"
      onChangeText={(text) => setPassword(text)}
      secureTextEntry={true}
      />
      <TextInput
      style={[styles.formInput , { letterSpacing : 3 }]}
      placeholder="address" 
      autoCompleteType="off"
      onChangeText={(text) => setAddress(text)}
      />

      <Button
      style={styles.buttonStyle7} 
      textStyle={styles.textStyle}
      onPress={handleRegister}
      >
        Register
      </Button>
      <View style={styles.bottom}>
          <Text style={[styles.textbottom, { letterSpacing : 1 }]}>Already had an account? 
          <Text 
          style={{color:'blue', textDecorationLine: 'none'}}
          accessibilityRole='button'
          onPress={(e) => {
            e.preventDefault()
            navigation.replace('Login')
            }
          }
        > Login</Text>

        </Text>
      </View>
      <Image source={cat} 
        style={{ 
          width: 200, 
          height: 200,
          marginLeft : 90,
          marginBottom : -290
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 65,
    backgroundColor: '#F4E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    width: 350,
    height : 40,
    borderWidth: 2,
    marginBottom : 10,
    borderRadius : 10,
    paddingLeft : 30,
    fontSize : 15,
    color : 'black',
    textTransform : 'capitalize',
    fontWeight : '800',
    borderColor: '#0A1D2A',

  },
  buttonStyle7 : {
    borderColor: '#2F3542',
    backgroundColor: '#2F3542',
    marginTop : 5,
    borderRadius: 10,
  },
  textStyle : {
    color: '#F4F4F4',
    fontWeight: '900',
    fontSize : 20,
    fontFamily : 'nunito'
  },
  bottom : {
    flex : 0.1,
    fontFamily : 'nunito',
  },  
  textbottom : {
    fontSize : 13,
    fontFamily : 'nunito'
  }
});