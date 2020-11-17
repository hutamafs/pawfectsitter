import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableWithoutFeedback , Keyboard , Image , TouchableOpacity, Alert} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import axios from 'axios';
import { addPet } from '../store/actions/index';
import { useDispatch , useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import logo from '../assets/logoDog.png';
import * as firebase from 'firebase';
import ApiKeys from './components/firebaseApi';


const AddPet = ({navigation}) => {
    const dispatch = useDispatch();
    const [gender,setGender] = useState('male');
    const [type,setType] = useState('dog');
    const[name,setName] = useState('');
    const[image,setImage] = useState('');
    const[age,setAge] = useState(0);

    const {access_token} = useSelector(state => state)

    const gender_props = [
        {label: '♂️', value: 'male',textStyle:{marginRight:20} },
        {label: '♀️', value: 'female',style:{marginLeft:20} },
    ];

    const type_props = [
        {label: '🐶', value: 'dog',textStyle:{marginRight:20} },
        {label: '🦅', value: 'bird',style:{marginLeft:20} },
        {label: '🐱', value: 'cat',style:{marginLeft:20} }
    ];

    if(!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }

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
        url: 'http://192.168.1.3:3000/pets',
        method: 'POST',
        headers:{access_token,"Content-Type": "multipart/form-data"},
        
        data: formData,
        })
        .then(({data}) => {
        dispatch(addPet(data))
        navigation.replace('PetList')
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
        <>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 25}}>
        <Image
        source={logo}
        style={{ width: 80, height: 80}}
        />
        <Text style={{fontSize: 20, marginTop: 25}}>Add Pet</Text>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
             <View style={styles.container}>
                 <View style={{backgroundColor: '#F9F8F6', borderRadius: 100, marginBottom: 30, zIndex: -1}}>
            <TouchableOpacity style={{borderWidth: 0.1, margin: 10, borderRadius: 100, padding: 30, backgroundColor: 'white', zIndex: -1}}
            onPress={pickImage}
            >
             <Image
                source={(image) ? {uri:image}:{uri: 'https://lh3.googleusercontent.com/proxy/W_fq5wVspFA3goJG22FNuX2nx204B0kalDUZqTmMBP4QznwrD0gHhcMbhe9WlC6OxzVmyZy-hm4pqT4YrCLUWgE2'}}
                style={{ width: 150, height: 150, zIndex: 2,borderRadius:100}}
            />
            </TouchableOpacity>
            </View>
                <TextInput
                style={styles.textInputStyle}
                placeholder="Enter your Pet Name"
                value={name}
                onChangeText={ (text) => setName(text)}
                required
                />
                <TextInput
                style={styles.textInputStyle}
                placeholder="Enter your Pet Age"
                value={age}
                keyboardType="numeric"
                onChangeText={ (text) => setAge(text)}
                required
                />
                <View style={{flexDirection: "row", margin: 5}}>
                    <RadioForm
                        radio_props={gender_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#2196f3'}
                        borderWidth={1}
                        buttonSize={15}
                        buttonWrapStyle={{marginLeft: 10}}
                        onPress={(value) => setGender(value)}
                        labelStyle={{paddingLeft:5,marginRight:15}}                        
                    />
                </View>
                <View style={{flexDirection: "row", margin: 5}}>
                    <RadioForm
                        radio_props={type_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={'#2196f3'}
                        borderWidth={1}
                        buttonSize={15}
                        buttonWrapStyle={{marginLeft: 10}}
                        onPress={(value) => setType(value)}
                        labelStyle={{paddingLeft:5,marginRight:15}}                        
                    />
                </View>
                {/* {
                    image && (
                        <Image
                        source={{uri:image}}
                        style={{width:300,height:300}}
                        />
                    )
                } */}

                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.btnStyle}>
                    <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', margin: 5 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>      
        </> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 50,
        width: 300,
        borderRadius: 20,
        paddingLeft: 20,
        margin: 5
    },
    btnStyle: {
        backgroundColor: 'orange',
        width: 300,
        borderRadius: 20,
        margin: 5
    }
})

export default AddPet;
