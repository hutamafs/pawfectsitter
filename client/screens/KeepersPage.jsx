import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {fetchKeepers} from '../store/actions'

export default function KeepersPage({route, navigation}) {
  const {keepers} = useSelector(state => state)
  const dispatch = useDispatch()
  // console.log(keepers, 'keepers neeeeh')
  useEffect(() => {
    dispatch(fetchKeepers())
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Keepers</Text>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          keepers.map(el => {
            return(
              <View key={el._id} style={{backgroundColor: 'grey', margin: 3, borderRadius: 10, padding: 5}}>
                <Image source={{uri: el.image}} style={{ width: 175, height: 159, borderWidth: 1, borderColor: 'white' }} />
                <Text style={styles.textColor}>Name: {el.name}</Text>
                <Text style={styles.textColor}>Address: {el.address}</Text>
                <Text style={styles.textColor}>Specialization: {el.skills}</Text>
                <Text style={{color: 'yellow'}}>Rating: {el.rating}</Text>
                <Text style={styles.textColor}>Status: {el.status}</Text>
              </View>
            
            )
          })
        }
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 0.2,
  },
  textColor: {
    color: 'white'
  }
});