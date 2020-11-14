import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'
import logo from '../assets/logoDog.png'

export default function Landing({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 300, height: 350 }} />
      <Text style={styles.textLogo}>PAWFECT SITTER</Text>
      <Text style={styles.textLogo2}>FOR YOUR PUPPY</Text>

      <StatusBar style="auto" />
      <Button
          style={styles.buttonStyle6} textStyle={styles.textStyle}
          onPress={() => navigation.navigate('Login')}
          title="Log in"
          >
        </Button>
        <Button
          style={styles.buttonStyle7} textStyle={styles.textStyle}
          onPress={() => navigation.navigate('Register')}
          title="Register"
          >
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EED811',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo : {
    fontSize : 45,
    fontFamily : 'nunito'
  },
  textLogo2 : {
    fontSize : 15,
    fontFamily : 'nunito'
  },
  buttonStyle6 : {
    borderColor: '#C7B838',
    backgroundColor: '#C7B838',
    marginLeft : 80,
    marginRight : 80,
    marginTop : 28,
    borderRadius: 20,
  },
  buttonStyle7 : {
    borderColor: '#C7B838',
    backgroundColor: '#C7B838',
    marginLeft : 80,
    marginRight : 80,
    marginTop : 5,
    borderRadius: 20,
  },
  textStyle : {
    color: 'black',
    fontWeight: '900',
    fontSize : 30,
    fontFamily : 'nunito'
  }
});