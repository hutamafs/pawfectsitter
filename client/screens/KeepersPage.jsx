import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKeepers, fetchPets } from '../store/actions';
import TabBar from './components/TabBottomNavbar';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default function KeepersPage({ route, navigation }) {
  const { keepers, pets } = useSelector(state => state);
  const { petId, setPetId } = useState('');
  const [name, setName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [harga, setHarga] = useState(0);
  const dispatch = useDispatch();
  let duration_props = null;
  useEffect(() => {
    dispatch(fetchKeepers())
    dispatch(fetchPets())
  }, [])

  const handlePress = (el) => {
    setName(el.name);
    duration_props = [
      { label: 'hourly', value: `${el.price.hourly}`, textStyle: { marginRight: 20 } },
      { label: 'daily', value: `${el.price.daily}`, style: { marginLeft: 20 } },
      { label: 'weekly', value: `${el.price.weekly}`, style: { marginLeft: 20 } }
    ];
    console.log(el.price.hourly, 'ini el')
    console.log(duration_props, 'ini duration_props')
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
    setModalVisible(!isModalVisible);
    setQuantity(0)
    console.log(payload, 'ini payload')
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
                  <View style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'black', fontSize: 25 }}> {el.name} </Text>
                      <Text style={{ color: 'blue', fontSize: 15, marginRight: 30 }}> {el.rating}</Text>
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
                            style={{ backgroundColor: 'black' }}
                            buttonWrapStyle={{ marginLeft: 10 }}
                            onPress={(value) => setHarga(value)}
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
                        <Button title="Hire" onPress={() => handleSubmit()} />
                        <Button title="Cancel" onPress={() => handleCancel()} />
                      </View>
                    </View>
                  </Modal>

                  <TouchableOpacity
                    style={{ backgroundColor: 'white', width: 75, height: 20, position: 'absolute', right: 15, bottom: 15 }}
                    onPress={() => handlePress(el)}
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