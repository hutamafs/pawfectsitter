import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKeepers, fetchPets, setOrders } from '../store/actions';
import TabBar from './components/TabBottomNavbar';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import axios from 'axios';

export default function KeepersPage({ route, navigation }) {
  const { keepers, pets } = useSelector(state => state);
  const [ petId, setPetId ] = useState('');
  const [name, setName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [harga, setHarga] = useState('');
  const dispatch = useDispatch();
  const [price, setPrice] = useState('')
  const [keeperId, setKeeperId] = useState('')
  
  useEffect(() => {
    dispatch(fetchKeepers())
    dispatch(fetchPets())
  }, [])

  // console.log(price, 'ini priceeeeee')
  let duration_props = [
    { label: 'hourly', value: `${price.hourly}` },
    { label: 'daily', value: `${price.daily}` },
    { label: 'weekly', value: `${price.weekly}` }
  ];
  // console.log(duration_props, 'ini duration_props')

  // console.log(pets, 'ini pet nya')
  let pet_props = []
  pets.map(el => pet_props.push({ label: `${el.name}`, value: `${el._id}` }))
  // console.log(pet_props, 'petproopes nih')
  const handlePress = (el) => {
    setName(el.name);
    setPrice(el.price)
    setKeeperId(el._id)
    // console.log(el, 'ini element yg dibawa')
    // console.log(el.name, 'element name isinya')
    // console.log(el.price, 'element price isinya')
    // console.log(el.price.hourly, 'element hourly')
    console.log(keeperId, 'ini keepers ID nyaaaa')
    setModalVisible(!isModalVisible);
  }

  const handleCancel = () => {
    setModalVisible(!isModalVisible);
  }

  const handleSubmit = () => {
    console.log(petId, 'petid niiiih')
    console.log(harga, 'harganyaaaa')
    let payload = {
      pet_id: petId,
      harga: (Number(quantity) * Number(harga)),
      quantity: Number(quantity)
    }
    
    console.log(payload, 'ini payload')
    axios({
      url: 'http://192.168.100.6/orders/' + keeperId,
      method: 'post',
      headers: {
        access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjEwYmUzNWU4ODkxMTU3YzMwYTFjMCIsImVtYWlsIjoic3VzYW5AbWFpbC5jb20iLCJpYXQiOjE2MDU0Mzg1NTl9.XC6fVC7Oo8BEN7o1f4t04T31SaLEVL8xhhxlYarjkgo'
      },
      data: {
        quantity: payload.quantity,
        price: payload.harga,
        pet_id: payload.pet_id
      }
    })
    .then(result => {
      console.log(result, 'result orderrererreers')
      dispatch(setOrders(result))
    })
    .catch(err => console.log(err))

    setModalVisible(!isModalVisible);
    setQuantity('')
  }

  const handlePetRadio = (e) => {
    // setPetId(e.target[radio_props].value)
    setPetId(e)
    console.log(petId, 'petid di radio nih')
  }

  const setRadioHarga = (value) => {
    setHarga(value)
    console.log(harga, 'harga di radio nih')
  }

  const handleValuePid = (v) => {
    console.log(v, 'ini v nya');
    setPetId(v);
  }
  const coba = () => {
    console.log('tes')
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
                  <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'black', fontSize: 25 }}> {el.name} </Text>
                      <Text style={{ color: 'blue', fontSize: 15, marginRight: 30 }}> {el.rating}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                      <Text style={{ color: 'red', fontSize: 15 }}> Specialized in: {el.skills.map(element => { return (`${element}, `) })} </Text>
                      <View style={{ flex: 0.3, display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ color: 'black', fontSize: 15 }}> {el.address}</Text>
                        <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.daily}</Text>
                        <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.hourly}</Text>
                        <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.weekly}</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{ backgroundColor: 'white', width: 75, height: 20, position: 'absolute', right: 15, bottom: 5 }}
                      onPress={() => handlePress(el)}
                    >
                      <Text style={{ color: 'red', textAlign: 'center' }}>Hire Me! </Text>
                    </TouchableOpacity>
                  </View>

                  <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 0.7, display: 'flex', backgroundColor: 'white' }}>
                      <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ marginTop: 15, fontSize: 15 }}> {`Which pet would you like to entrust to ${name}?`} </Text>
                        {/* <Picker
                        selectedValue={petId}
                        style={{height: 50, width: 200,justifyContent:'center',paddingLeft:10,marginVertical:10}}
                        onValueChange={(value) =>
                          handleValuePid(value)
                        }>                      
                        {
                          pets && pets.map(el => {
                            return (
                              <Picker.Item key={el._id} label={el.name} value={el._id} />
                            )
                          })
                        }
                        </Picker> */}
                        {
                          pet_props &&
                          <RadioForm
                            radio_props={pet_props}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            buttonColor={'#2196f3'}
                            borderWidth={2}
                            buttonSize={15}
                            buttonWrapStyle={{ marginLeft: 10 }}
                            onPress={(value) => handlePetRadio(value)}
                            labelStyle={{ paddingLeft: 5, marginRight: 15 }}
                          />
                        }
                      </View>

                      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: 200, marginTop: 50, marginLeft: 10 }}>
                        <Text style={{ marginTop: 15, fontSize: 15 }}> Which Package ? </Text>
                        {
                          duration_props &&
                          <RadioForm
                            radio_props={duration_props}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            buttonColor={'#2196f3'}
                            borderWidth={2}
                            buttonSize={15}
                            buttonWrapStyle={{ marginLeft: 10 }}
                            onPress={(value) => setRadioHarga(value)}
                            labelStyle={{ paddingLeft: 5, marginRight: 15 }}
                          />
                        }
                      </View>

                      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: 200, marginTop: 100 }}>
                        <TextInput
                          placeholder="For How long?"
                          style={{ backgroundColor: 'white', width: 300, height: 50, borderWidth: 0.5, marginLeft: 10 }}
                          value={quantity}
                          keyboardType="numeric"
                          onChangeText={(text) => setQuantity(text)}
                        />
                      </View>

                      <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button title={"Hire"} onPress={() => handleSubmit()} />
                        <Button title={"Cancel"} onPress={() => handleCancel()} />
                      </View>
                    </View>
                    {/* <TouchableOpacity
                      style={{ backgroundColor: 'white', width: 75, height: 20, position: 'absolute', right: 15, bottom: 15 }}
                      onPress={() => handleSubmit(el)}
                    >
                      <Text style={{ color: 'red', textAlign: 'center' }}>Hire Me! </Text>
                    </TouchableOpacity> */}
                  </Modal>

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
        <TabBar
          navigation={navigation}
        />
      </View>
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