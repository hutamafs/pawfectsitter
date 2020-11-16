import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableWithoutFeedback , Keyboard , Image , TouchableOpacity} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import axios from 'axios';
import { addPet } from '../store/actions/index';
import { useDispatch , useSelector } from 'react-redux';
import { RNS3 } from 'react-native-aws3';
import DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'expo-image-picker';
import logo from '../assets/logoDog.png'


const AddPet = () => {
    const dispatch = useDispatch();
    const [gender,setGender] = useState('male');
    const [type,setType] = useState('dog');
    const[name,setName] = useState('');
    const[image,setImage] = useState('');
    const[age,setAge] = useState(0);

    //const {access_token} = useSelector(state => state)

    const gender_props = [
        {label: '♂️', value: 'male',textStyle:{marginRight:20} },
        {label: '♀️', value: 'female',style:{marginLeft:20} },
    ];

    const type_props = [
        {label: '🐶', value: 'dog',textStyle:{marginRight:20} },
        {label: '🦅', value: 'bird',style:{marginLeft:20} },
        {label: '🐱', value: 'cat',style:{marginLeft:20} }
    ];

    const handleSubmit = () => {
        console.log(image,'ini image')
    axios({
        url: 'http://192.168.1.4:3000/pets',
        method: 'POST',
        headers:{access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWZkMDc1Zjc5MmZjMmJmZjgyNGJmYiIsImVtYWlsIjoiaEBtYWlsLmNvbSIsImlhdCI6MTYwNTM4ODgwOX0.54h9zQqXhvFXOW-ZS2Gmj84bKwilvj-3VqDNQOfC8pM'},
        data: { name,gender,type,age,image },
        })
        .then(({data}) => {
        console.log(data, '<<<<<<<RESPONYA');
        //dispatch(setToken(res.data.access_token))
        navigation.replace('Home')
        })
        .catch((err) => {
        console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
        })
    }
    // const handleSubmit = () => {
    //     console.log(image,'ini image')
    // axios({
    //     url: 'http://192.168.1.3:3000/pets',
    //     method: 'POST',
    //     headers:{access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWZkNThhOWQ5NjAyNDQ4OGI3OGJkNyIsImVtYWlsIjoidGFtYUBnbWFpbC5jb20iLCJpYXQiOjE2MDUzNTg5ODh9.1fDc7yYmvXXrLwKiLecnJjhnffnTlRFuBMNRtNDzYUI'},
    //     data: { name,gender,type,age,image },
    //     })
    //     .then(({data}) => {
    //     console.log(data, '<<<<<<<RESPONYA');
    //     //dispatch(setToken(res.data.access_token))
    //     navigation.replace('Home')
    //     })
    //     .catch((err) => {
    //     console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
    //     })
    // }

    // const takePic = () => {
    //     ImagePicker.showImagePicker( {} , (response) => {
    //         const file={
    //             uri:response.uri,
    //             name:response.fileName,
    //             type:'image/png',
    //         }
    //         const config = {
    //             keyPrefix: `s3/`,
    //             bucket:'photos',
    //             region:'ap-southeast-1',
    //             access_key:'AKIAI3HZB6Q3UPG2LTMA',
    //             secretKey:'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',
    //             successActionStatus:201,
    //         }
    //         RNS3.put(file,config)
    //         .then(response => 
    //             setImage(response.body.postResponse.location)    
    //         )
    //         .catch(err => {
    //             console.log(err);
    //         })
    //     })
    // }

    // const handleSubmit = async () => {
    //     if (image != null) {
    //       // If file selected then create FormData
    //       //const fileToUpload = image;
    //       const data = new FormData();
    //       data.append('name', name);
    //       data.append('gender', gender);
    //       data.append('type', type);
    //       data.append('age', age);
    //       data.append('image', image);
    //       console.log(data,'ini data')
    //       // Please change file upload URL
    //       let res = await fetch(
    //         'http://192.168.1.3:3000/pets',
    //         {
    //           method: 'post',
    //           body: data,
    //           headers: {
    //             'Content-Type': 'multipart/form-data; ',
    //             access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjBhNzM2NzBkM2U0M2RmODE1ZDZhZCIsImVtYWlsIjoidGFtYUBnbWFpbC5jb20iLCJpYXQiOjE2MDU0MzAyMjV9.SicZdMhqgEQsWUbbKpg8YjMonqjZyV9m2hqWsCrb9wY'
    //           },
    //         }
    //       )
    //       let responseJson = await res.json();
    //       console.log(responseJson,'ini response json')
        //   if (responseJson.status == 1) {
        //     alert('Upload Successful');
        //   }
        // } else {
        //   alert('Please Select File first');
        // }
      //   }
      // };
      /*
      const selectFile = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
          });
          console.log(res,'ini res')
          // Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
        //   setImage(res);
        } catch (err) {
        //   setImage(null);
          // Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            alert('Canceled');
          } else {
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };
      */

     function blobCreationFromURL(inputURI) { 
  
        let binaryVal; 
  
        // mime extension extraction 
        let inputMIME = inputURI.split(',')[0].split(':')[1].split(';')[0]; 
  
        // Extract remaining part of URL and convert it to binary value 
        if (inputURI.split(',')[0].indexOf('base64') >= 0) 
            binaryVal = atob(inputURI.split(',')[1]); 
  
        // Decoding of base64 encoded string 
        else
            binaryVal = unescape(inputURI.split(',')[1]); 
  
        // Computation of new string in which hexadecimal 
        // escape sequences are replaced by the character  
        // it represents 
  
        // Store the bytes of the string to a typed array 
        let blobArray = []; 
        for (let index = 0; index < binaryVal.length; index++) { 
            blobArray.push(binaryVal.charCodeAt(index)); 
        } 
        console.log(blobArray,'ini blobarray')
        return new Blob([blobArray], { 
            type: inputMIME 
        }); 
    } 

     const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        //console.log(result);
    
        if (!result.cancelled) {
            let hasil = await blobCreationFromURL(result.uri)
            console.log(hasil,'ini hasilnya')
            //console.log(result.uri)
          //setImage(result.uri);
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
                source={{uri: 'https://lh3.googleusercontent.com/proxy/W_fq5wVspFA3goJG22FNuX2nx204B0kalDUZqTmMBP4QznwrD0gHhcMbhe9WlC6OxzVmyZy-hm4pqT4YrCLUWgE2'}}
                style={{ width: 80, height: 80, zIndex: 2}}
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
                    onPress={() => {handleSubmit}}
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