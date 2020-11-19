import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, View , TextInput, TouchableWithoutFeedback , Keyboard , Image , TouchableOpacity, Alert} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import axios from 'axios';
import { addPet } from '../store/actions/index';
import { useDispatch , useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import  TabBar  from './components/TabBottomNavbar'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Button from 'apsl-react-native-button'
import dog from '../assets/dog5.png'

const AddPet = ({navigation}) => {
    const dispatch = useDispatch();
    const [gender,setGender] = useState('male');
    const [type,setType] = useState('dog');
    const[name,setName] = useState('');
    const[image,setImage] = useState('');
    const[age,setAge] = useState(null);

    const {access_token} = useSelector(state => state)

    const gender_props = [
        {label: '♂️', value: 'male' },
        {label: '♀️', value: 'female' },
    ];

    const type_props = [
        {label: 'Dog', value: 'dog',textStyle:{marginRight:20} },
        {label: 'Bird', value: 'bird',style:{marginLeft:20} },
        {label: 'Cat', value: 'cat',style:{marginLeft:20} }
    ];

    const handleSubmit = () => {
        let fileType = image.substring(image.lastIndexOf(".") + 1);
        let formData = new FormData();
        
        formData.append('image',{
            uri:image,
            name: `photo.${fileType}`,
            type: `image/${fileType}`
        })
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('type', type);
        formData.append('age', age);
    axios({
        url: 'http://192.168.1.4:3000/pets',
        method: 'POST',
        headers:{access_token,"Content-Type": "multipart/form-data"},
        data: formData,
        })
        .then(({data}) => {
        dispatch(addPet(data))
        navigation.navigate('PetList')
        })
        .catch((err) => {
        console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
        })
    }      

     const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri)
        }
      };

    return (
        <View
            style={{
                backgroundColor:"#FFF",
                flex:1,
            }}
        >
        <View style={{
            // flexDirection: 'row', 
            // marginTop: 25
            backgroundColor:"#F4E3E3",
               height:"13%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal: 20
            }}>
                        
        <Text style={{
            fontSize: 20, 
            marginTop: 45,
            marginLeft : 20,
            fontFamily : 'nunito'
            }}>Add Pet</Text>
        </View>
        
        
        <TouchableWithoutFeedback 
            onPress={Keyboard.dismiss} 
            accessible={false}
            >

            
            <View 
                style={styles.container}>
                    
                <View 
                style={{
                    
                    marginBottom: 40,
                    marginTop : -130,
                    borderRadius:100,
                    // zIndex: -9
                    }}>
            <TouchableOpacity 
                style={{ 
                    margin: 5,
                    // padding: 30, 
                    backgroundColor: '#F4F4F4', 
                    zIndex: 1}}
            onPress={pickImage}
            >
             <Image
                source={(image) ? {uri:image}:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTe-eJA2imrdsx5oOdmxYv3pclGWJLsMa2Ew&usqp=CAU'}}
                style={{ width: 150, height: 150,zIndex:2, borderRadius:100,padding:100}}
            />
            </TouchableOpacity>
            </View>
                <TextInput
                style={[styles.textInputStyle, { letterSpacing : 1 }]}
                placeholder="Enter your Pet Name"
                value={name}
                onChangeText={ (text) => setName(text)}
                required
                />
                <TextInput
                style={[styles.textInputStyle, { letterSpacing : 1 }]}
                placeholder="Enter your Pet Age"
                value={age}
                keyboardType="numeric"
                onChangeText={ (text) => setAge(text)}
                required
                />
                <View style={{flexDirection: "row", margin: 5}}>
                    <Text
                        style={{
                            fontFamily:"nunito",
                            marginRight : 10,
                            fontSize:20,
                        }}
                    ></Text>
                    <RadioForm
                        radio_props={gender_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#FF6B81'}
                        borderWidth={10}
                        buttonSize={15}
                        buttonWrapStyle={{marginLeft: 10}}
                        onPress={(value) => setGender(value)}
                        labelStyle={{paddingLeft:15,marginRight:15}}                        
                    />
                </View>
                <View style={{flexDirection: "row", margin: 5}}>
                <Text
                        style={{
                            fontFamily:"nunito",
                            fontSize:20,
                            marginRight : 10
                        }}
                    >Type : </Text>
                    <RadioForm
                        radio_props={type_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#FF6B81'}
                        borderWidth={1}
                        buttonSize={15}
                        buttonWrapStyle={{marginLeft: 20}}
                        onPress={(value) => setType(value)}
                        labelStyle={{paddingLeft:5,marginRight:15}}                        
                    />
                </View>
                <View style={{display:'flex',alignItems:'center'}}>
                <Button
                    onPress={handleSubmit}
                    style={{
                        height: 50,
                        width: 200,
                        borderRadius: 10,
                        backgroundColor: "#FF6B81",
                        marginTop : 30,
                        borderColor: '#FF6B81',
                    }}>
                        <Text 
                            style={{
                                fontSize:20,
                                fontFamily : "nunito",
                                fontSize : 20,
                                color : "#2f3542"
                            }}
                        >Submit</Text>
                    
                </Button>
                </View>
                
            </View>
        </TouchableWithoutFeedback>
        <View
            style={{
                position : "absolute",
                marginLeft : 110,
                marginTop : 650,
            }}
        >
            {/* <Text
                style={{
                    fontFamily : 'nunito',
                    fontSize : 20
                }}
            >hey, hey, hey .</Text> */}
            {/* <Text
                style={{
                    fontFamily : 'nunito',
                    fontSize : 20
                }}
            >take your pict puppy</Text> */}
        </View>
        <Image source={dog} style={{ 
            width: 150, 
            height: 150,
            marginLeft : 290,
            marginTop : 610,
            position : 'absolute'
        }} />
        <TabBar 
            navigation={navigation}
          />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        borderColor: '#FF6B81',
        borderWidth: 1,
        height: 45,
        width: 300,
        borderRadius: 10,
        paddingLeft: 25,
        margin: 5,
        backgroundColor : '#fff',
        fontFamily : 'nunito',
        fontWeight:"bold",
        fontSize:15,
    },
    btnStyle: {
        backgroundColor: 'orange',
        width: 300,
        borderRadius: 20,
        margin: 5
    }
})

export default AddPet;
