import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setPet } from '../store/actions'
import logo from '../assets/logoDog.png'
import { ScrollView } from 'react-native-gesture-handler';


export default function PetList() {
    const dispatch = useDispatch()
    const {access_token, pets} = useSelector(state => state)
    useEffect(() => {
        axios({
            url: 'http://192.168.1.5:3000/pets',
            method: 'GET',
            headers: {access_token}
          })
          .then((res) => {
            console.log(res, '<<<<<<<RESPONYA');
            dispatch(setPet(res.data))
          })
          .catch((err) => {
            console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
          })
    },[])
  return (
      <>
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
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    margin: 30,
  },
  cardContainer: {
    display: "flex",
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});