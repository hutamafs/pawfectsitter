import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'


export default function TabBar({navigation, userData}) {
  return (
    <View style={styles.tabBottom}>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 15,
            borderColor : "#102B3F",
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Home')}
        >
        <Icon name="home" color="#102B3F" size={40} />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 15,    
            borderColor : "#102B3F",
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Order')}
        > 
        <Icon name="book-outline" color="#102B3F" size={45}  />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 15,    
            borderColor : "#102B3F",
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Chat', {
            userData: userData
          })}
        > 
        <Icon name="chat-processing" color="#102B3F" size={45} />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            borderColor : "#102B3F",
            marginTop : 15,
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('History')}
        > 
        <Icon name="history" color="#102B3F" size={45} />
    </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBottom: {
    display: "flex",
    backgroundColor: '#6964E2',
    borderColor : "#102B3F",
    // backgroundColor: '#F7E7D3',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
    height : "9%" ,
    marginBottom : -3,
  }
});