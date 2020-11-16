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
  const { keepers, pets } = useSelector(state => state);
  const [ petId, setPetId ] = useState('');
  const [name, setName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [harga, setHarga] = useState('');
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [keeperId, setKeeperId] = useState('');
  const [animals,setAnimals] = useState([]);
  const [isDog,setIsDog] = useState(false);
  const [isCat,setIsCat] = useState(false);
  const [isBird,setIsBird] = useState(false);
  const [localKeepers , setLocalKeepers] = useState([keepers]);
  const [isPrice,setIsPrice] = useState(false);
  const [isRating,setIsRating] = useState(false);
  
  useEffect(() => {
    dispatch(fetchKeepers())
    dispatch(fetchPets());
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
    
    // console.log(payload, 'ini payload')
    axios({
      url: 'http://192.168.100.6:3000/orders/' + keeperId,
      method: 'post',
      headers: {
        access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjEwYmUzNWU4ODkxMTU3YzMwYTFjMCIsImVtYWlsIjoic3VzYW5AbWFpbC5jb20iLCJpYXQiOjE2MDU0NjE4OTR9.xslH4N2F3MQfNp3-7d0G8iWcjZ4TtyH5OsgGSlYfJlg'
      },
      data: {
        quantity: payload.quantity,
        price: payload.harga,
        pet_id: payload.pet_id
      }
    })
    .then(result => {
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

  const filterDog = () => {
    setIsDog(!isDog);
    if(isDog) {
      setAnimals(animals.filter(el => el != 'dog'));
    } else {
      setAnimals(animals.concat('dog'))
    }
  }

  const filterCat = () => {
    setIsCat(!isCat);
    if(isCat) {
      setAnimals(animals.filter(el => el != 'cat'))
    } else {
      setAnimals(animals.concat('cat'))
    }
  }

  const filterBird = () => {
    setIsBird(!isBird);
    if(isBird) {
      setAnimals(animals.filter(el => el != 'bird'))
    } else {
      setAnimals(animals.concat('bird'))
    }
  }

  const sortPrice = () => {
    let cloned = keepers;
    if(isPrice) {
      cloned.sort((a,b) => a.price.hourly>b.price.hourly);
    }
    setIsPrice(!isPrice);
    setLocalKeepers(cloned);
  }

  const sortRating = () => {
    let cloned = keepers;
    if(isRating) {
      cloned.sort((a,b) => a.rating > b.rating )
    }
    setIsRating(!isRating);
    setLocalKeepers(cloned);
  }

  const stars = (rating) => {
    let starIcon = []
    for(let i = 0 ; i<Math.floor(Number(rating)) ; i++) {
      starIcon.push(
        <Icon key={i} name="star" color="yellow" size={10} style={{marginTop:3,marginHorizontal:1.5}} />
      )
    }
    return starIcon;
  }

  return (
      <View style={styles.container}>
        <View style={{display:'flex',flexDirection:'row',height:80,marginTop:15,borderBottomColor:'black',borderBottomWidth:1}}>
          <Image
            source={logo} 
            style={{ width: 80, height: 80,marginLeft:3 }}
          />
        <Text style={{fontSize:30,marginTop:20}}>Keepers</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',height:30,marginTop:10,marginBottom:2}}>
        <Text style={{display:'flex',alignSelf:'center',marginLeft:5,marginRight:10}}>Filter by Animal</Text> 
          <TouchableOpacity
            onPress={filterDog}
            style={(!isDog) ? 
              {width:50,borderRadius:25,justifyContent:'center',borderColor:'blue',borderWidth:0.5,marginHorizontal:3} : 
              {width:50,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:0.5,marginHorizontal:3}
            }
          >
          <Text style={{ fontSize: 15, color: '#fff', margin: 5,alignSelf:'center' }}>🐶</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={filterCat}
            style={(isCat) ?
              {width:50,borderRadius:25,justifyContent:'center',borderColor:'blue',borderWidth:0.5,marginHorizontal:3} : 
              {width:50,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:0.5,marginHorizontal:3}
            }
          >
          <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center', margin: 5,alignSelf:'center' }}>🐱</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={filterBird}
            style={
              (isBird) ?
              {width:50,borderRadius:25,justifyContent:'center',borderColor:'blue',borderWidth:0.5,marginHorizontal:3} : 
              {width:50,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:0.5,marginHorizontal:3}
            }
          >
          <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center', margin: 5,alignSelf:'center' }}>🦅</Text>
          </TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',height:30,marginTop:10,marginBottom:5}}>
            <Text>Sort by </Text>
            <TouchableOpacity
            onPress={sortPrice}
            style={(!isPrice) ? 
              {width:100,borderRadius:25,justifyContent:'center',borderColor:'green',borderWidth:2,marginHorizontal:3} : 
              {width:100,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:2,marginHorizontal:3}
            }
            >
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', margin: 5,alignSelf:'center' }}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={sortRating}
            style={(!isRating) ? 
              {width:100,borderRadius:25,justifyContent:'center',borderColor:'green',borderWidth:2,marginHorizontal:3} : 
              {width:100,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:2,marginHorizontal:3}
            }
            >
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', margin: 5,alignSelf:'center' }}>Rating</Text>
            </TouchableOpacity>
        </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ display: 'flex', flexDirection: 'column', flex: 0.8 , alignItems:'center' }}>
          {keepers &&
            keepers
            .filter(el => {
              return (
                el.skills.map(skill => {
                  if(animals.length == 0) {
                    return el
                  }
                  return (
                    animals.map(animal => {
                      if(animal == skill) {
                        return el
                      }
                    })
                  )
                })
              )
            })            
            .map(el => {
              return (
                <View key={el._id} style={{ display: 'flex', flexDirection: 'row', flex: 0.3, borderRadius: 10, borderBottomColor: 'black', width: 350, height: 150, marginVertical: 10, borderWidth: 0.6,backgroundColor:'lightblue' }}>
                   <Text style={{position:'absolute',top:20,right:10,fontWeight:'bold'}}> Rp {el.price.hourly.toLocaleString().replace(',','.')} </Text>
                  <View style={{ paddingHorizontal: 10, display: 'flex', justifyContent: 'center' }}>
                    <Image source={{ uri: el.image }} style={{ flex:1,width: 100, height: 125, borderColor: 'white',resizeMode:'contain' }} />

                  </View>
                  <View style={{ display: 'flex', flexDirection: 'column',marginTop:15 }}>
                    <View style={{ display: 'flex-start', flexDirection: 'row'}}>
                      <Text style={{ color: 'black', fontSize: 25 }}> {el.name} </Text>         
                      {
                          el.skills.map(skill => (
                            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', margin: 5,alignSelf:'center' }}> 
                              { (skill == 'dog') ? 
                                  '🐶':
                                (skill == 'cat') ?
                                  '🐱':
                                  '🦅'
                              }
                            </Text>
                          ))
                      }
                    </View>                        
                    <View style={{display:'flex',flexDirection:'column',marginTop:1}}>
                      <View style={{display:'flex',flexDirection:'row',marginLeft:5,marginTop:0}}>                        
                        {/* <Icon  name="star" color="yellow" size={15} style={{marginTop:3}} />*/}
                        {stars(el.rating)}
                      </View> 
                      <View style={{display:'flex',flexDirection:'row'}}>
                        <Icon  name="compass" color="green" size={20} style={{marginTop:2}} />
                        <Text style={{ color: 'blue', fontSize: 12,alignSelf:'center'}}> {el.address}</Text>
                      </View>             
                        {/* <Text style={{ color: 'red', fontSize: 15 }}> Specialized in: {el.skills.map(element => { return (`${element}, `) })} </Text> */}
                        {/* <View style={{ flex: 0.3, display: 'flex', flexDirection: 'column' }}>
                          <Text style={{ color: 'black', fontSize: 15 }}> {el.address}</Text>
                          <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.daily}</Text>
                          <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.hourly}</Text>
                          <Text style={{ color: 'black', fontSize: 12.5 }}> {el.price.weekly}</Text>
                        </View> */}
                      
                      <View style={{display:'flex',flexDirection:'row',paddingLeft:3}}>
                      </View>
                      {/* <View style={{display:'flex',flexDirection:'row',paddingLeft:3}}>
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
                      </View> */}
                    </View>

                  </View>
                    <TouchableOpacity
                      style={{ width: 75, height: 20 ,position:'absolute',right:10,bottom:10 }}
                      onPress={() => handlePress(el)}
                    >
                      <Text style={{ color: 'red', textAlign: 'center' }}>Hire Me! </Text>
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