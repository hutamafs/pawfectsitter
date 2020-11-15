import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native'


export default function TabBar() {
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
            borderColor : '#ED9104',
          }}
          accessibilityRole='button'
          onPress={() => 
            navigation.navigate('Home')
            
          }
        >
        <Icon name="home" color="white" size={35} />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 10,
            borderColor : '#ED9104',
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => 
            navigation.navigate('Order')
            
          }
        > 
        <Icon name="book-outline" color="white" size={35}  />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 10,
            borderColor : '#ED9104',
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('Chat')}
        > 
        <Icon name="chat-processing" color="white" size={35} />
    </Button>
    <Button 
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 20,
            marginTop : 10,
            borderColor : '#ED9104',
            marginLeft : 60,
          }}
          accessibilityRole='button'
          onPress={() => navigation.navigate('History')}
        > 
        <Icon name="history" color="white" size={35} />
    </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBottom: {
    display: "flex",
    backgroundColor: '#ED9104',
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