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
        url: 'http://192.168.1.8:3000/pets',
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
                backgroundColor:"#C8D1DA",
                flex:1,
            }}
        >
        <View style={{
            // flexDirection: 'row', 
            // marginTop: 25
            backgroundColor:"#6661DB",
               height:"10%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal: 20
            }}>
        <View >
            <Icon 
                name="paw" 
                color="black" 
                size={40}
                    style={[{  
                        transform: [{ rotate: "0deg" }],
                        position : 'absolute',
                        marginTop : 25 ,
                        color : "#102B3E",
                        opacity : 0.9,
                }]}
            />
                </View>
        <Text style={{
            fontSize: 20, 
            marginTop: 35,
            marginLeft : 50,
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
                    backgroundColor: '#6661DB', 
                    borderRadius: 20, 
                    marginBottom: 40,
                    marginTop : -80, 
                    zIndex: -1}}>
            <TouchableOpacity 
                style={{
                    borderWidth: 0.1, 
                    margin: 10, 
                    borderRadius: 100, 
                    // padding: 30, 
                    backgroundColor: '#fff', 
                    zIndex: -1}}
            onPress={pickImage}
            >
             <Image
                source={(image) ? {uri:image}:{uri: 'https://lh3.googleusercontent.com/proxy/W_fq5wVspFA3goJG22FNuX2nx204B0kalDUZqTmMBP4QznwrD0gHhcMbhe9WlC6OxzVmyZy-hm4pqT4YrCLUWgE2'}}
                style={{ width: 150, height: 150, zIndex: 2,borderRadius:100}}
            />
            </TouchableOpacity>
            </View>
                <TextInput
                style={[styles.textInputStyle, { letterSpacing : 2 }]}
                placeholder="Enter your Pet Name"
                value={name}
                onChangeText={ (text) => setName(text)}
                required
                />
                <TextInput
                style={[styles.textInputStyle, { letterSpacing : 2 }]}
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
                            fontSize:20,
                            marginRight : 10
                        }}
                    >Gender : </Text>
                    <RadioForm
                        radio_props={gender_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#6661DB'}
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
                        buttonColor={'#6661DB'}
                        borderWidth={1}
                        buttonSize={15}
                        buttonWrapStyle={{marginLeft: 20}}
                        onPress={(value) => setType(value)}
                        labelStyle={{paddingLeft:5,marginRight:15}}                        
                    />
                </View>

                <Button
                    title="Enter"
                    onPress={handleSubmit}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: 200,
                        borderRadius: 20,
                        backgroundColor: "#6661DB",
                        marginLeft: 130,
                        padding : 20,
                        borderColor: '#6661DB',
                    }}>Submit
                    
                    
                </Button>
            </View>
        </TouchableWithoutFeedback>
            
        <TabBar 
            navigation={navigation}
          />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8D1DA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 50,
        width: 300,
        borderRadius: 20,
        paddingLeft: 30,
        margin: 5,
        backgroundColor : '#fff',
        fontFamily : 'nunito',
        fontWeight:"bold",
        fontSize:18,
    },
    btnStyle: {
        backgroundColor: 'orange',
        width: 300,
        borderRadius: 20,
        margin: 5
    }
})

export default AddPet;
