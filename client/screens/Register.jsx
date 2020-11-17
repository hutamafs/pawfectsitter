import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Image ,  StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios'
import logo from '../assets/logoDog.png'
import Button from 'apsl-react-native-button'
import firebaseSDK from './config/firebaseSDK';



export default function Register({navigation}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')


  const handleRegister = () => {
    axios({
<<<<<<< HEAD
      url: 'http://192.168.1.8:3000/users/register',
=======
      url: 'http://192.168.1.4:3000/users/register',
>>>>>>> development
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
      
      <Image source={logo} style={{ width: 300, height: 350  }} />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 65,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    width: 350,
    height : 40,
    borderWidth: 2,
    marginBottom : 10,
    borderRadius : 20,
    paddingLeft : 30,
    fontSize : 20,
    color : 'black',
    textTransform : 'capitalize',
    fontWeight : '800',
    borderColor: '#0A1D2A',

  },
  buttonStyle7 : {
    borderColor: '#6661DB',
    backgroundColor: '#6661DB',
    marginTop : 5,
    borderRadius: 20,
  },
  textStyle : {
    color: 'black',
    fontWeight: '900',
    fontSize : 30,
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