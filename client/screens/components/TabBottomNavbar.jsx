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
            borderColor : "#F4E3E3",
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Home')}
        >
        <Icon name="home" color="#FF6B81" size={35} />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 15,    
            borderColor : "#F4E3E3",
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Order')}
        > 
        <Icon name="book-outline" color="#FF6B81" size={35}  />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 15,    
            borderColor : "#F4E3E3",
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Chat', {
            userData: userData
          })}
        > 
        <Icon name="chat-processing" color="#FF6B81" size={35} />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            borderColor : "#F4E3E3",
            marginTop : 15,
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('History')}
        > 
        <Icon name="history" color="#FF6B81" size={35} />
    </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBottom: {
    display: "flex",
    backgroundColor: '#F4E3E3',
    borderColor : "#F4E3E3",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius : 30,
    height : "10%" ,
    marginBottom : 3,
  }
});