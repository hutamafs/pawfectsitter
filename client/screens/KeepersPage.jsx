import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKeepers } from '../store/actions'
import TabBar from './components/TabBottomNavbar'

export default function KeepersPage({ route, navigation }) {
  const { keepers } = useSelector(state => state)
  const dispatch = useDispatch()
  //console.log(keepers, 'keepers neeeeh')
  useEffect(() => {
    dispatch(fetchKeepers())
  }, [])

  const handlePress = () => {
    console.log('halo');
  }

  return (
    <>
      <View style={styles.container}>

        <View style={{ display: 'flex', flexDirection: 'column', flex: 0.8 }}>
          {keepers &&
            keepers.map(el => {
              return (
                <View key={el._id} style={{ display: 'flex', flexDirection: 'row', flex: 0.3, borderRadius: 10, borderBottomColor: 'black', width: 350, height: 125, marginVertical: 10, borderBottomWidth: 0.5 }}>
                  <View style={{ paddingHorizontal: 10, display: 'flex', justifyContent: 'center' }}>
                    <Image source={{ uri: el.image }} style={{ width: 120, height: 120, borderColor: 'white' }} />

                  </View>
                  <View style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'black', fontSize: 25 }}> {el.name} </Text>
                      <Text style={{ color: 'blue', fontSize: 15, marginRight: 30 }}> {el.rating}</Text>
                    </View>
                    <Text style={{ color: 'red', fontSize: 15 }}> Specialized in: {el.skills.map(element => { return (`${element}, `) })} </Text>
                    <View style={{ flex: 0.3, display: 'flex', flexDirection: 'column' }}>
                      <Text style={{ color: 'black', fontSize: 15 }}> {el.address}</Text>
                      <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.daily}</Text>
                      <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.hourly}</Text>
                      <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.weekly}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{ backgroundColor: 'white', width: 75, height: 20, position: 'absolute', right: 15, bottom: 15 }}
                    onPress={handlePress}
                  >
                    <Text style={{ color: 'red', textAlign: 'center' }}>Hire Me! </Text>
                  </TouchableOpacity>
                </View>

                /*
                <View key={el._id} style={{backgroundColor: 'grey', margin: 3, borderRadius: 10, padding: 5}}>
                  <Image source={{uri: el.image}} style={{ width: 175, height: 159, borderWidth: 1, borderColor: 'white' }} />
                  <Text style={styles.textColor}>Name: {el.name}</Text>
                  <Text style={styles.textColor}>Address: {el.address}</Text>
                  <Text style={styles.textColor}>Specialization: {el.skills}</Text>
                  <Text style={{color: 'yellow'}}>Rating: {el.rating}</Text>
                  <Text style={styles.textColor}>Status: {el.status}</Text>
                </View>
                */
              )
            })
          }

        </View>
      </View>
      <TabBar
        navigation={navigation}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '80%'
  },
  top: {
    flex: 0.2,
  },
  textColor: {
    color: 'white'
  }
});