import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'
import logo from '../assets/catDog.png'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import logoKaki from '../assets/logoKaki.png'


export default function Landing({navigation}) {
  
  return (
    <View style={styles.container}>
      
      
      <View 
      style={{
        flexDirection: "row",
        marginTop : -100
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
           }]}>pawfect sitter</Text>
      </View>
      <Image source={logo} style={{ 
        width: 300, 
        height: 350,
        marginTop : -40
        }} />
      <Text
        style={{
          color: '#2F3542',
          marginTop: -40,
          marginBottom : 30,
          fontSize : 30 
        }}
      >hi paw.</Text>
     
      
      <Button
        style={styles.buttonStyle7} 
        textStyle={styles.textStyle}
        onPress={() => navigation.navigate('Register')}
        title={"Register"}
      >
        Register
      </Button>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle7 : {
    borderColor: '#2F3542',
    backgroundColor: '#2F3542',
    marginLeft : 80,
    marginRight : 80,
    marginTop : 5,
    borderRadius: 20,
  },
  textStyle : {
    color: '#F4F4F4',
    fontWeight: '100',
    fontSize : 30,
    fontFamily : 'nunito'
  }
});