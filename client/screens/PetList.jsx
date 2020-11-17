import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPet } from '../store/actions'
import logo from '../assets/logoDog.png'
import { ScrollView } from 'react-native-gesture-handler';
import TabBar from './components/TabBottomNavbar'
import { fetchPets } from '../store/actions';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PetList({ navigation }) {
  const dispatch = useDispatch()
  const { access_token, pets, loading } = useSelector(state => state)
  useEffect(() => {
    dispatch(fetchPets(access_token))
  }, [])
  console.log(pets, 'ini pets')
  return (
    <>
        <View style={{ display: 'flex', flexDirection: 'row', height: 90, borderBottomWidth: 1, backgroundColor: '#F7E7D3', borderColor: '#BA826A' }}>
          <Image
            source={logo}
            style={{ width: 90, height: 90, marginLeft: 3, marginTop: 10 }}
          />
          <Text style={{ fontSize: 30, marginTop: 30, color: '#BA826A' }}>My Pets</Text>
        </View>
        <View style={styles.container}>
          {loading &&
            <ActivityIndicator size="large" color="#0000ff" />
          }
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 100 }}>
              {pets.length == 0 ? <Text style={{ textAlign: 'center' }}>No Pet</Text> :
                pets.map(pet => {
                  return (
                    <View key={pet._id} style={{
                      display: 'flex', flexDirection: 'column', flex: 0.4, width: 200, height: 250, marginVertical: 10, justifyContent: 'center', alignContent: 'center', borderWidth: 0, borderRadius: 5, backgroundColor: '#F7E7D3', shadowOpacity: 0.37,
                      shadowRadius: 7.49, shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 6,
                      },
                    }}>
                      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                          source={{ uri: pet.image }}
                          style={{ width: 150, height: 150, borderColor: 'white', borderRadius: 25 }}
                        />
                      </View>
                      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginHorizontal: 6, color: '#BA826A' }} >{pet.name}</Text>
                        <Icon
                          name={
                            (pet.gender == 'male') ?
                              "mars" :
                              "venus"
                          }
                          color={
                            (pet.gender == 'male') ?
                              "blue" :
                              "red"
                          }
                          size={20}
                          style={{ marginTop: 5 }}
                        />
                      </View>
                      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15 }}>{pet.age} years old </Text>
                      </View>
                      {/* <Text>Gender: {pet.gender}</Text>
                      <Text>Age: {pet.age}</Text> */}
                      <Text>Type: {pet.type}</Text>
                    </View>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
        <TabBar navigation={navigation}/>
    </>
  )
}

const styles = StyleSheet.create({
        container: {
        display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '70%'
  },
  cardContainer: {
        display: "flex",
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});

      {/* <ScrollView>
>>>>>>> development
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
<<<<<<< HEAD
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
=======
    </ScrollView> */}
