import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, styleSheet } from 'react-native'
import Map from './components/Map'

const GMap = ({navigation, route}) => {
    const backToHome = () => {
        navigation.replace('Home')
      }
    console.log(route.params, 'ini props gmaps')

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <View style={{
        backgroundColor:"#C8D1DA",
        flex:1,
      }}>
       <View style={{
           backgroundColor:"#6661DB",
           height:"11%",
           borderBottomLeftRadius:20,
           borderBottomRightRadius:20,
           paddingHorizontal: 25,
           marginBottom : -24,
          }}>
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
            </View>
        </View>
            <Map
            props={route.params}
            />
        </SafeAreaView>
    )
}

export default GMap