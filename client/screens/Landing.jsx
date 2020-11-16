import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'
import logo from '../assets/logoDog.png'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function Landing({navigation}) {
  return (
    <View style={styles.container}>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginTop : -70,
                  opacity : 0.2
              }]}
            />
      </View>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginTop : 30,
                  marginLeft : 90 ,
                  opacity : 0.2
              }]}
            />
      </View>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginTop : -60,
                  marginLeft : -140 ,
                  opacity : 0.2
              }]}
            />
      </View>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginTop : 190,
                  marginLeft : -190 ,
                  opacity : 0.2
              }]}
            />
      </View>
      <Image source={logo} style={{ width: 300, height: 350 }} />
      <Text style={styles.textLogo}>PAWFECT SITTER</Text>
      <Text style={styles.textLogo2}>FOR YOUR PUPPY</Text>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginLeft : 150,
                  marginTop : -180,
                  opacity : 0.2
              }]}
            />
      </View>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginLeft : -110,
                  marginTop : -160,
                  opacity : 0.2
              }]}
            />
      </View>
      <StatusBar style="auto" />
      <Button
          style={styles.buttonStyle6} 
          textStyle={styles.textStyle}
          onPress={() => navigation.navigate('Login')}
          title={"Log in"}
          >
          Login
        </Button>
        <Button
          style={styles.buttonStyle7} 
          textStyle={styles.textStyle}
          onPress={() => navigation.navigate('Register')}
          title={"Register"}
          >
            Register
        </Button>
        <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginLeft : 0,
                  opacity : 0.2
              }]}
            />
      </View>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginLeft : 150,
                  marginTop : -110,
                  opacity : 0.2
              }]}
            />
      </View>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginLeft : -150,
                  marginTop : 30,
                  opacity : 0.2
              }]}
            />
      </View>
      <View>
                <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  position : 'absolute',
                  color : "#6B6C6E",
                  marginLeft : -230,
                  marginTop : -180,
                  opacity : 0.2
              }]}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8D1DA',
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
    borderColor: '#6661DB',
    backgroundColor: '#6661DB',
    marginLeft : 80,
    marginRight : 80,
    marginTop : 28,
    borderRadius: 20,
  },
  buttonStyle7 : {
    borderColor: '#6661DB',
    backgroundColor: '#6661DB',
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