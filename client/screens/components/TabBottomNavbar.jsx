import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function TabBar({navigation}) {
  return (
    <View style={styles.tabBottom}>
    <Text 
          style={{color:'blue', textDecorationLine: 'none', margin: 15}}
          accessibilityRole='button'
          onPress={(e) => {
            e.preventDefault()
            navigation.navigate('Home')
            }
          }
        > Home
    </Text>
    <Text 
          style={{color:'blue', textDecorationLine: 'none', margin: 15}}
          accessibilityRole='button'
          onPress={(e) => {
            e.preventDefault()
            navigation.navigate('Order')
            }
          }
        > Order
    </Text>
    <Text 
          style={{color:'blue', textDecorationLine: 'none', margin: 15}}
          accessibilityRole='button'
          onPress={(e) => {
            e.preventDefault()
            navigation.navigate('Chat')
            }
          }
        > Chat
    </Text>
    <Text 
          style={{color:'blue', textDecorationLine: 'none', margin: 15}}
          accessibilityRole='button'
          onPress={(e) => {
            e.preventDefault()
            navigation.navigate('History')
            }
          }
        > History
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBottom: {
    display: "flex",
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});