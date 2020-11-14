import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import {setToken} from '../store/actions'
import {useDispatch} from 'react-redux'
import logo from '../assets/logoDog.png'
import Button from 'apsl-react-native-button'


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
      <View style={styles.middle}>
        <Image source={logo} style={{ width: 300, height: 350 }} />
        <View>
        {/* style={[styles.textInput ,  {marginTop : 20 , letterSpacing : 7,  textTransform: 'capitalize' , textAlign : "center" , color : '#f0f8ff'  } ]} */}

        <TextInput
        style={[styles.formInput , { letterSpacing : 3 } ]}
        placeholder="email" 
        autoCompleteType="off"
        keyboardType="email-address"
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
          style={styles.buttonStyle7} textStyle={styles.textStyle}
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
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding : 40 ,
    backgroundColor: '#EED811',
    justifyContent: 'center',
    fontFamily : 'nunito'
  },
  middle : {
    flex : 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom : {
    flex : 0.1,
    fontFamily : 'nunito',
  },  
  formInput: {
    width: 400,
    height : 50,
    borderWidth: 2,
    marginBottom : 10,
    borderRadius : 20,
    paddingLeft : 30,
    fontSize : 20,
    color : 'black',
    textTransform : 'capitalize',
    fontWeight : '800',
  },
  buttonStyle7 : {
    borderColor: '#C7B838',
    backgroundColor: '#C7B838',
    marginTop : 5,
    borderRadius: 20,
  },
  textStyle : {
    color: 'black',
    fontWeight: '900',
    fontSize : 30,
    fontFamily : 'nunito'
  },
  textbottom : {
    fontSize : 13,
    fontFamily : 'nunito'
  }
});