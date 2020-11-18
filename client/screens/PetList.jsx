import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/logoDog.png'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import TabBar from './components/TabBottomNavbar'
import { fetchPets } from '../store/actions';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient'
import Button from 'apsl-react-native-button'
import bird from '../assets/bird2.png'

export default function PetList({ navigation }) {
  const [type, setType] = useState("All")
  const dispatch = useDispatch()
  const { access_token, pets } = useSelector(state => state)

  const filterPet = (animals = [], type) => 
  !animals || type === 'All' ?
  animals :
  animals.filter(animal => animal.type.toLowerCase() === type.toLowerCase())

  useEffect(() => {
    dispatch(fetchPets(access_token))
  }, [])

  return (
    <View style={{
      backgroundColor: "#FFF",
      flex: 1
    }}>
      <View style={{
        backgroundColor: "#F4E3E3",
        height: "13%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
      }}>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 45,
          width: "30%",
          height:50,
          justifyContent:'center',
          borderRadius:30
        }}>
          <Text 
              style={{
                  fontFamily : 'nunito',
                  color : "#2F3542",
                  fontSize : 25
              }}
          >Pet List</Text>
        </View>
      </View>
      {/* <LinearGradient
        colors={["#F4E3E3", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 50,
          marginTop: -25
        }}
      >

      </LinearGradient> */}

      {/* filter */}
      <View
        style={{
          flexDirection : "row",
          marginStart : 60,
          marginTop : 10,
        }}
      >
        <Text
          style={{
            fontFamily : 'nunito',
            marginTop : 20,
            marginLeft : -20,
            fontSize : 20,
            marginRight : 20
          }}
        >Filter By : </Text>

        {/* button disamping kiri */}
        <Button

            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              width: 60,
              borderRadius: 20,
              backgroundColor: "#F4E3E3",
              borderColor: '#FF6B81',
              borderWidth : 2,
              marginRight : 20
            }}
            onPress={() => setType('dog')}
            
        >
          <Icon 
            name="dog" 
            color="#FF6B81" 
            size={35} />
          </Button>
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              width: 60,
              borderRadius: 20,
              backgroundColor: "#FF6B81",
              borderColor: '#FF6B81',
              borderWidth : 2,
              marginRight : 20
            }}
            onPress={() => setType('cat')}


          >
            <Icon 
              name="cat" 
              color="#F4E3E3" 
              size={35} />
          </Button>
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              width: 60,
              borderRadius: 20,
              backgroundColor: "#F4E3E3",
              borderColor: '#FF6B81',
              borderWidth : 2,
              marginRight : 20
            }}
            onPress={() => setType('bird')}


          >
            <Image source={bird} 
              style={{ 
              width: 180, 
              height: 180,
              marginTop : 48,
              marginLeft : 30
              }} />
          </Button>
      </View>
      

      {/* slide gambar ke kiri-kanan */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: 700,
          marginLeft : 20,
          marginBottom : 10
        }}
        >
       
        {filterPet(pets, type).map((pet,i) => {
          return (
            <View
            key={i}
              style={{
                height: 500,
                elevation: 30,
                marginTop: 30,
                borderRadius: 15,
                // borderWidth : 2,
                width:240,
                marginLeft : 20,
              }}
            >

              <View style={{
                flexDirection: "column",
                alignItems:'center'
              }}>
                <Image
                  key={pet._id}
                  source={{ uri: pet.image }}
                  style={{
                    marginLeft : -2,
                    marginTop : -2,
                    width: 245,
                    height: 351,
                    borderRadius : 20

                  }}
                  />
                <View style={{width:350,height:350,display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <Text style={{
                    fontSize: 25,
                    fontFamily : 'nunito',
                    marginTop : 5
                    }} > {pet.name} </Text>
                  <View
                    style={{
                      flexDirection : "row",
                      marginTop : 20, 
                    }}
                  >
                    <View style={{
                      fontSize:30,
                      borderWidth : 3,
                      width : 60,
                      height : 60,
                      marginRight : 20,
                      borderColor : "#FF6B81",
                      borderRadius : 10,
                      flexDirection:'column',
                      display:'flex',
                      alignItems:'center'
                      }}>
                        <Text
                          style={{
                            fontFamily : 'nunito',
                            fontSize : 15,
                            marginTop : 2,
                          }}
                        >age</Text>
                        <Text
                          style={{
                            fontFamily : 'nunito',
                            marginTop : 5,
                            fontSize : 15
                          }}
                        >{pet.age}</Text>
                        </View>
                    <View style={{
                      fontSize:30,
                      borderWidth : 3,
                      width : 60,
                      height : 60,
                      borderColor : "#FF6B81",
                      borderRadius : 10

                      }}>
                         <Text style={
                            (pet.gender == 'male') ? {
                              fontSize:40,
                              color:'#FDCB6E',
                              alignSelf:'center'} : {fontSize:40,color:'#FF6B81',alignSelf:'center'}
                          }> {pet.gender == 'male'? '♂️' : '♀️'} </Text>
                        </View>
                    
                  
                  
                  </View>  

                 
                </View>
              </View>

            </View>
          )
        })}
        {/* </View> */}
        
      </ScrollView>
      <TabBar
        navigation={navigation}
      />
    </View>
  )
}