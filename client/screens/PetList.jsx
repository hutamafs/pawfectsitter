import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPet } from '../store/actions'
import logo from '../assets/logoDog.png'
import { ScrollView } from 'react-native-gesture-handler';
import TabBar from './components/TabBottomNavbar'
import {fetchPets} from '../store/actions'


export default function PetList({navigation}) {
    const dispatch = useDispatch()
    const {access_token, pets, loading} = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchPets(access_token))
    },[])
  return (
      <>
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Pet</Text>
      {/* {loading && 
            <ActivityIndicator size="large" color="#0000ff" />
      } */}
      {/* <ScrollView>
      {pets.length == 0 ? <Text>No Pet</Text> :
        pets.map(pet => {
            return (
                <View style={styles.cardContainer}>
                  <Image
                  source={pet.image}
                  />
                  <Text>Name: {pet.name}</Text>
                  <Text>Gender: {pet.gender}</Text>
                  <Text>Age: {pet.age}</Text>
                 <Text>Type: {pet.type}</Text>
                </View>
            )
        })
      }
      </ScrollView> */}
      <ScrollView>
      <View style={styles.cardContainer}>
        <Image
        source={logo}
        />
        <Text>Name</Text>
        <Text>Gender</Text>
        <Text>Age</Text>
        <Text>Type</Text>
      </View>
      <View style={styles.cardContainer}>
        <Image
        source={logo}
        />
        <Text>Name</Text>
        <Text>Gender</Text>
        <Text>Age</Text>
        <Text>Type</Text>
      </View>
      <View style={styles.cardContainer}>
        <Image
        source={logo}
        />
        <Text>Name</Text>
        <Text>Gender</Text>
        <Text>Age</Text>
        <Text>Type</Text>
      </View>
    </ScrollView>
    </View>
    <TabBar
        navigation={navigation}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    margin: 50,
    maxHeight: '80%'
  },
  cardContainer: {
    display: "flex",
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});