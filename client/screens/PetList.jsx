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

export default function PetList({ navigation }) {
  const dispatch = useDispatch()
  const { access_token, pets } = useSelector(state => state)
  useEffect(() => {
    dispatch(fetchPets(access_token))
  }, [])

  return (
    <View style={{
      backgroundColor: "#FFF",
      flex: 1
    }}>
      <View style={{
        backgroundColor: "#6661DB",
        height: "13%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
      }}>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 25,
          width: "100%"
        }}>
          <View style={{ width: "50%" }}>
            <Text style={{
              fontSize: 28,
              color: "#FFF",
              fontWeight: "bold",
              marginTop: 20
            }}>Pet List</Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>

          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(16,43,62,0.1)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -55
        }}
      >

      </LinearGradient>

      <ScrollView
        alwaysBounceVertical
        showsHorizontalScrollIndicator={false}
        style={{
          height: 300
        }}
      >
        {/* <View style={{display:'flex',flexDirection:'row'}}> */}
        {pets.map((pet,i) => {
          return (
            <View
            key={i}
              style={{
                height: 500,
                elevation: 33,
                marginLeft: 20,
                marginTop: 30,
                borderRadius: 15,
                marginBottom: 10,
                width: 500,
              }}
            >

              <View style={{
                flexDirection: "column",
                paddingTop: 30,
                paddingHorizontal: 10
              }}>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:50}} > {pet.name} </Text>
                  <Text style={
                    (pet.gender == 'male') ? {fontSize:40,color:'blue',alignSelf:'center'} : {fontSize:40,color:'red',alignSelf:'center'}
                }> {pet.gender == 'male'? '♂️' : '♀️'} </Text>
                </View>
                <Image
                  key={pet._id}
                  source={{ uri: pet.image }}
                  style={{
                    width: 300,
                    height: 350
                  }}
                />
                <View style={{width:150,height:50}}>
                  <Text style={{fontSize:30}}>{pet.age} years old </Text>
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