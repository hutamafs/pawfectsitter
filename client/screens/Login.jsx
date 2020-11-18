import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View, TextInput} from 'react-native';
import axios from 'axios'
import {setToken} from '../store/actions'
import {useDispatch} from 'react-redux'
import Button from 'apsl-react-native-button'
import logo from '../assets/cat1.png'
import firebaseSDK from './config/firebaseSDK';
import logoKaki from '../assets/logoKaki.png'



export default function Login({navigation}) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // firebase
  const loginSuccess = () => {
    let obj = {
			name: 'Customer',
			email: email,
			avatar: ''
		}
		navigation.replace('Home');
	};

	const loginFailed = () => {
		alert('Login failure. Please tried again.');
	};

  const handleLogin = async () => {
    axios({
      url: 'http://192.168.1.8:3000/users/login',
      method: 'POST',
      data: {
        email,password
      }
    })
    .then((res) => {
      dispatch(setToken(res.data.access_token))
      // firebase
      const user = {
        email: email,
        password: password,
        avatar: 'https://placeimg.com/140/140/any'
      };
  
      const response = firebaseSDK.login(
        user,
        loginSuccess(),
      );
    })
    .catch((err) => {
      console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
      loginFailed()
    })
  }

  return (
    <View style={styles.container}>
      <View 
      style={{
        display:'flex',
        flexDirection: "column",
        marginTop : -100,
        marginTop:100,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Image source={logoKaki} 
        style={{ 
          width: 100, 
          height: 250,
        }} />
        <Text style={[
          styles.textStyle , {
            marginTop : 39,
            color: '#2F3542',
            fontSize : 40
           }]}>Pawfect</Text>
      </View>
      <View style={styles.middle}>
        <View>
        
        <TextInput
        style={[styles.formInput , { letterSpacing : 3 } ]}
        placeholder="email" 
        autoCompleteType="off"
        onChangeText={(text) => setEmail(text)}
        />
        <TextInput
        style={[styles.formInput , { letterSpacing : 3 } ]}
        placeholder="password" 
        autoCompleteType="off"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        />
        </View>

        <Button 
          style={styles.buttonStyle7} 
          textStyle={styles.textStyle}
          onPress={handleLogin}
          >
            Log in
        </Button>
      </View>
      
      <View style={styles.bottom}>
        <Text style={[styles.textbottom, { letterSpacing : 1 }]}>Don't have an account yet ?
          <Text 
          style={{color:'blue', textDecorationLine: 'none'}}
          accessibilityRole='button'
          onPress={(e) => {
            e.preventDefault()
            navigation.replace('Register')
            }
          }
        > Register</Text>
       </Text>
       <Image source={logo} style={{ 
        width: 300, 
        height: 200 ,
        marginTop : 120,
        marginLeft : 130
       }} />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F4E3E3',
    justifyContent: 'center',
    fontFamily : 'nunito'
  },
  middle : {
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom : {
    fontFamily : 'nunito',
    alignItems:'center'
  },  
  formInput: {
    width: 250,
    height : 50,
    borderWidth: 2,
    marginBottom : 10,
    borderRadius : 10,
    paddingLeft : 30,
    fontSize : 15,
    color : 'black',
    fontWeight : '800',
  },
  buttonStyle7 : {
    borderColor: '#2F3542',
    backgroundColor: '#2F3542',
    marginTop : 5,
    width:250,
    alignSelf:'center',
    borderRadius: 10,
  },
  textStyle : {
    color: '#F4F4F4',
    fontSize : 20,
    fontFamily : 'nunito'
  },
  textbottom : {
    fontSize : 13,
    fontFamily : 'nunito'
  }
});