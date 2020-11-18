<<<<<<< HEAD
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, styleSheet, View } from 'react-native'
import Map from './components/Map'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Button from 'apsl-react-native-button'
=======
import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, styleSheet , View } from 'react-native';
import Button from 'apsl-react-native-button';
import Map from './components/Map';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const GMap = ({navigation, route}) => {
  const backToHome = () => {
      navigation.navigate('KeepersPage')
    }

  return (
      <>
            <Button 
            style={{
              width : 30,
              height : 30,
              marginTop : 35,
              borderColor : "#6661DB"
            }}
              onPress={backToHome}
            >
                  <Icon 
                    name="arrow-left-circle" 
                    color="black" 
                    size={30}
                    style={[{  
                    transform: [{ rotate: "0deg" }],
                    position : 'absolute',
                    color : "#102B3E",
                  }]}
                  />
                </Button>
      <SafeAreaView forceInset={{top: 'always'}}>
          
          <Map
          props={route.params}
          />
      </SafeAreaView>
  </>
  )
}

export default GMap


/*

>>>>>>> development
const GMap = ({navigation, route}) => {
    const backToHome = () => {
        navigation.replace('Home')
      }
    console.log(route.params, 'ini props gmaps')

    return (
        <>
              <Button 
              style={{
                width : 30,
                height : 30,
                marginTop : 35,
                borderColor : "#6661DB"
              }}
                onPress={backToHome}
              >
                    <Icon 
                      name="arrow-left-circle" 
                      color="black" 
                      size={30}
                      style={[{  
                      transform: [{ rotate: "0deg" }],
                      position : 'absolute',
                      color : "#102B3E",
                    }]}
                    />
                  </Button>
        <SafeAreaView forceInset={{top: 'always'}}>
            
            <Map
            props={route.params}
            />
        </SafeAreaView>
    </>
    )
}

export default GMap
*/
