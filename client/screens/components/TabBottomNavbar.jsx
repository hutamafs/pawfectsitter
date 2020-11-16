import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native'


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
            marginTop : 10,
            borderColor : '#BA826A',
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Home')}
        >
        <Icon name="home" color="#BA826A" size={35} />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 10,
            borderColor : '#BA826A',
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Order')}
        > 
        <Icon name="book-outline" color="#BA826A" size={35}  />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 10,
            borderColor : '#BA826A',
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Chat', {
            userData: userData
          })}
        > 
        <Icon name="chat-processing" color="#BA826A" size={35} />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 10,
            borderColor : '#BA826A',
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('History')}
        > 
        <Icon name="history" color="#BA826A" size={35} />
    </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBottom: {
    display: "flex",
    backgroundColor: '#F7E7D3',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopLeftRadius : 20,
    borderBottomLeftRadius : 20,
    borderTopRightRadius : 20,
    borderBottomRightRadius : 20,
    height : "9%" ,
    marginBottom : 10,
    marginLeft : 20,
    marginRight : 20,
  }
});