import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button , TouchableWithoutFeedback , Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKeepers, fetchPets, setOrders } from '../store/actions';
import TabBar from './components/TabBottomNavbar';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import axios from 'axios';
import logo from '../assets/logoDog.png';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function KeepersPage({ route, navigation }) {
  const { keepers, pets,  access_token} = useSelector(state => state);
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
    dispatch(fetchPets(access_token))
  }, [])

  // console.log(keepers,'ini keepers')
  // console.log(pets,'ini pets')

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
    let payload = {
      pet_id: petId,
      harga: (Number(quantity) * Number(harga)),
      quantity: Number(quantity)
    }
    
    axios({
      url: 'http://192.168.100.6:3000/orders/' + keeperId,
      method: 'post',
      headers: {
        access_token: access_token
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
  }

  const setRadioHarga = (value) => {
    setHarga(value)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={{display:'flex',flexDirection:'row',height:80,marginTop:15, borderBottomWidth:1, backgroundColor: '#F7E7D3'}}>
          <Image
            source={logo} 
            style={{ width: 80, height: 80,marginLeft:3 }}
          />
        <Text style={{fontSize:30,marginTop:20, color: '#BA826A'}}>Keepers</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ display: 'flex', flexDirection: 'column', flex: 0.8 , alignItems:'center' }}>
          {keepers &&
            keepers.map(el => {
              return (
                <View key={el._id} style={{ display: 'flex', flexDirection: 'row', flex: 0.3, borderRadius: 10, borderBottomColor: 'black', width: 350, height: 150, marginVertical: 10, borderWidth: 0.6, backgroundColor:'#F7E7D3' }}>
                  <View style={{ paddingHorizontal: 10, display: 'flex', justifyContent: 'center' }}>
                    <Image source={{ uri: el.image }} style={{ flex:1,width: 100, height: 125, borderColor: 'white',resizeMode:'contain', margin: 5 }} />

                  </View>
                  <View style={{ display: 'flex', flexDirection: 'column',marginTop:15 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'black', fontSize: 25, color: '#BA826A' }}> {el.name} </Text>                      
                    </View>
                    <View style={{display:'flex',flexDirection:'column',marginTop:3}}>
                      <View style={{ display: 'flex', flexDirection: 'row',paddingLeft:3}}>
                      <Icon  name="star" color="yellow" size={15} style={{marginTop:3}} />              
                      <Text style={{ color: 'blue', fontSize: 15,alignSelf:'center'}}> {el.rating}</Text>
                      <Icon  name="compass" color="green" size={20} style={{marginTop:2,marginLeft:20}} />
                      <Text style={{ color: 'blue', fontSize: 12,alignSelf:'center'}}> {el.address}</Text>              
                        {/* <Text style={{ color: 'red', fontSize: 15 }}> Specialized in: {el.skills.map(element => { return (`${element}, `) })} </Text> */}
                        {/* <View style={{ flex: 0.3, display: 'flex', flexDirection: 'column' }}>
                          <Text style={{ color: 'black', fontSize: 15 }}> {el.address}</Text>
                          <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.daily}</Text>
                          <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.hourly}</Text>
                          <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.weekly}</Text>
                        </View> */}
                      </View>
                      <View style={{display:'flex',flexDirection:'row',paddingLeft:3}}>
                        <Icon name="stopwatch" color="grey" size={17.5} style={{marginTop:3}} />
                        <Text style={{ color: 'black', fontSize: 12.5,alignSelf:'center'}}> Rp {el.price.hourly.toLocaleString('en-us').replace(',','.')}</Text>
                      </View>
                      <View style={{display:'flex',flexDirection:'row',paddingLeft:3}}>
                        <Icon name="stopwatch" color="grey" size={17.5} style={{marginTop:3}} />
                        <Text style={{ color: 'black', fontSize: 12.5,alignSelf:'center'}}> Rp {el.price.daily.toLocaleString('en-us').replace(',','.')}</Text>
                      </View>
                      <View style={{display:'flex',flexDirection:'row',paddingLeft:3}}>
                        <Icon name="stopwatch" color="grey" size={17.5} style={{marginTop:3}} />
                        <Text style={{ color: 'black', fontSize: 12.5,alignSelf:'center'}}> Rp {el.price.weekly.toLocaleString('en-us').replace(',','.')}</Text>
                      </View>
                    </View>

                  </View>
                    <TouchableOpacity
                      style={{ width: 85, height: 30 ,position:'absolute',right:10,bottom:10, backgroundColor: '#BA826A', borderRadius: 10 }}
                      onPress={() => handlePress(el)}
                    >
                      <Text style={{ color: 'white', textAlign: 'center' }}>Hire Me! </Text>
                    </TouchableOpacity>

                  <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 0.6, display: 'flex', backgroundColor: 'white', alignItems: 'center', borderRadius: 20 }}>
                      <View style={{ alignItems: 'center'}}>
                        <Text style={{ marginTop: 15, fontSize: 17 }}> {`Which pet would you like to entrust to ${name}?`} </Text>
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
                            labelStyle={{ paddingLeft: 5, marginRight: 15, fontSize: 17 }}
                          />
                        }
                      </View>

                      <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200, marginTop: 10 }}>
                        <Text style={{ marginTop: 15, fontSize: 15, marginBottom: 5, fontSize: 17 }}> Which Package ? </Text>
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
                            labelStyle={{ paddingLeft: 5, marginRight: 15, fontSize: 17 }}
                          />
                        }
                      </View>

                      <View>
                        <TextInput
                          placeholder="For How long?"
                          style={{ backgroundColor: 'white', width: 300, height: 50, borderWidth: 1, borderRadius: 20, marginTop: 20, marginBottom: 20, borderTopStartRadius: 20, borderTopEndRadius: 20 }}
                          value={quantity}
                          keyboardType="numeric"
                          onChangeText={(text) => setQuantity(text)}
                          required
                        />
                      </View>

                      <TouchableOpacity style={styles.btnStyle} onPress={() => handleSubmit()}><Text style={{textAlign: 'center', fontSize: 25, margin: 5}}>Hire</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.btnStyle} onPress={() => handleCancel()}><Text style={{textAlign: 'center', fontSize: 25, margin: 5}}>Cancel</Text></TouchableOpacity>
                    </View>
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
      </ScrollView>
        
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
  },
  top: {
    flex: 0.2,
  },
  textColor: {
    color: 'white'
  },
  btnStyle: {
    backgroundColor: 'orange',
    width: 300,
    borderRadius: 20,
    margin: 5
  }
});