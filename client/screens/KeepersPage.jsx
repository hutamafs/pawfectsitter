import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button , TouchableWithoutFeedback , Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKeepers, fetchPets, setOrders } from '../store/actions';
import TabBar from './components/TabBottomNavbar';
import Modal from 'react-native-modal';
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
  const [price, setPrice] = useState('');
  const [keeperId, setKeeperId] = useState('');

  const [localKeepers , setLocalKeepers] = useState(keepers);

  const [isFilterAnimal,setIsFilterAnimal] = useState(false);
  const [animalNow,setAnimalNow] = useState('');

  const [categoryNow,setCategoryNow] = useState('');
  
  useEffect(() => {
    dispatch(fetchKeepers())
    dispatch(fetchPets(access_token))
    setLocalKeepers(keepers)
  },[categoryNow,animalNow])

  let duration_props = [
    { label: 'hourly', value: `${price.hourly}` },
    { label: 'daily', value: `${price.daily}` },
    { label: 'weekly', value: `${price.weekly}` }
  ];
  let pet_props = []
  pets.map(el => pet_props.push({ label: `${el.name}`, value: `${el._id}` }))
  // console.log(pet_props, 'petproopes nih')
  const handlePress = (el) => {
    setName(el.name);
    setPrice(el.price)
    setKeeperId(el._id)
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
        access_token
      },
      data: {
        quantity: payload.quantity,
        price: payload.harga,
        pet_id: payload.pet_id
      }
    })
    .then(({data}) => {
      dispatch(setOrders(data))
    })
    .catch(err => console.log(err))

    setModalVisible(!isModalVisible);
    setQuantity('')
  }

//   const handlePetRadio = (e) => {
//     // setPetId(e.target[radio_props].value)
//     setPetId(e)
//   }

//   const setRadioHarga = (value) => {
//     setHarga(value)
//   }


  const stars = (rating) => {
    let starIcon = [];
    for(let i = 0 ; i<Math.floor(Number(rating)) ; i++) {
      starIcon.push(
        <Icon key={i} name="star" color="yellow" size={10} style={{marginTop:3,marginHorizontal:1.5}} />
      )
    }
    return starIcon;
  }

  const sortCategory = (type) => {
    let cloned = keepers;
    cloned.sort((a,b) => a[type.toLowerCase()] < b[type.toLowerCase()])
    setCategoryNow(type.toLowerCase());    
    setLocalKeepers(cloned);
  }

  const filterAnimal = (animalia) => {
    if(animalia == animalNow) {
      setIsFilterAnimal(!isFilterAnimal)
    }
    setAnimalNow(animalia)
    if(isFilterAnimal == false) {
      setLocalKeepers(keepers)
    } else {
      const filteredKeepers = [];
      keepers.filter(keeper => {
      keeper.skills.map(skill => {
        if(skill.includes(animalia)) {
          filteredKeepers.push(keeper);
        }        
      })
    })
    setLocalKeepers(filteredKeepers);
    }
  }

  const listCategories = () => {
    let types = {
      0:'Price',
      1:'Rating'
    }
    let categories = [];
    for(let i = 0 ; i<2 ; i++) {
      categories.push(
        <TouchableOpacity
        key={i}
        onPress={() => sortCategory(types[i])}
        style={(types[i].toLowerCase() == categoryNow) ? 
          {width:100,borderRadius:25,justifyContent:'center',borderColor:'green',borderWidth:2,marginHorizontal:3}:
          {width:100,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:2,marginHorizontal:3}
        }
        >
        <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', margin: 5,alignSelf:'center' }}>{types[i]}</Text>
        </TouchableOpacity>
      )
    }
    return categories;
  }

  const listAnimals = () => {
    let animals = {
      0:{
        name:'dog',
        logo:'🐶'
      },
      1:{
        name:'cat',
        logo:'🐱'
      },
      2:{
        name:'bird',
        logo:'🦅'
      }
    }
    let lists = [];
    for(let i = 0 ; i<3 ; i++) {
      lists.push(
        <TouchableOpacity
        key={i}
        onPress={() => filterAnimal(animals[i].name)}
        style={
            (animals[i].name == animalNow) ?
          {width:50,borderRadius:25,justifyContent:'center',borderColor:'blue',borderWidth:0.8,marginHorizontal:3} : 
          {width:50,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:0.8,marginHorizontal:3} 
        }
      >
      <Text style={{ fontSize: 15, color: '#fff', margin: 5,alignSelf:'center' }}> {animals[i].logo} </Text>
      </TouchableOpacity>
      )
    }
    return lists;
  }

  return (
      <View style={styles.container}>
        <View style={{display:'flex',flexDirection:'row',height:80,marginTop:15, borderBottomWidth:1, backgroundColor: '#F7E7D3'}}>
          <Image
            source={logo} 
            style={{ width: 80, height: 80,marginLeft:3 }}
          />
        <Text style={{fontSize:30,marginTop:20, color: '#BA826A'}}>Keepers</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',height:30,marginTop:10,marginBottom:2}}>
        <Text style={{display:'flex',alignSelf:'center',marginLeft:5,marginRight:10}}>Filter by Animal</Text> 
          {listAnimals()}
        </View>
        <View style={{display:'flex',flexDirection:'row',height:30,marginTop:10,marginBottom:5}}>
            <Text style={{paddingRight:15}} >Sort by </Text>
            {listCategories()}
        </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ display: 'flex', flexDirection: 'column', flex: 0.8 , alignItems:'center' }}>
          {localKeepers.length > 0 &&
            localKeepers        
            .map(el => {
              return (

                <View key={el._id} style={{ display: 'flex', flexDirection: 'row', flex: 0.3, borderRadius: 10, borderBottomColor: 'black', width: 350, height: 150, marginVertical: 10, borderWidth: 0.6,borderColor:'red' }}>

                   <Text style={{position:'absolute',top:20,right:10,fontWeight:'bold'}}> Rp {el.price.hourly.toLocaleString().replace(',','.')} </Text>
                  <View style={{ paddingHorizontal: 10, display: 'flex', justifyContent: 'center' }}>
                    <Image source={{ uri: el.image }} style={{ flex:1,width: 100, height: 125, borderColor: 'white',resizeMode:'contain', margin: 5 }} />

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
                      <View style={{display:'flex',flexDirection:'row',paddingLeft:3}}>
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
})