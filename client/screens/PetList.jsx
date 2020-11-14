import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { setPet } from '../store/actions'
import logo from '../assets/logoDog.png'
import { ScrollView } from 'react-native-gesture-handler';
import TabBar from './components/TabBottomNavbar'


export default function PetList() {
    const {access_token, pets} = useSelector(state => state)
    useEffect(() => {
        axios({
            url: 'http://192.168.1.5:3000/pets',
            method: 'GET',
            headers: access_token
          })
          .then((res) => {
            console.log(res, '<<<<<<<RESPONYA');
            dispatch(setPet(res.data.access_token))
          })
          .catch((err) => {
            console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
          })
    },[])
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Pet</Text>
      {/* <Text>{JSON.stringify(pets)}</Text> */}
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
    <TabBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'start',
    margin: 10
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});