import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableWithoutFeedback , Keyboard , Image , TouchableOpacity} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import { addPet } from '../store/actions/index';
import { useDispatch , useSelector } from 'react-redux';
import { RNS3 } from 'react-native-aws3';

const AddPet = () => {
    const dispatch = useDispatch();
    const [gender,setGender] = useState('male');
    const [type,setType] = useState('dog');
    const[name,setName] = useState('');
    const[image,setImage] = useState('');
    const[age,setAge] = useState(0);

    //const {access_token} = useSelector(state => state)

    const gender_props = [
        {label: 'Male', value: 'male',textStyle:{marginRight:20} },
        {label: 'Female', value: 'female',style:{marginLeft:20} },
    ];

    const type_props = [
        {label: 'Dog', value: 'dog',textStyle:{marginRight:20} },
        {label: 'Bird', value: 'bird',style:{marginLeft:20} },
        {label: 'Cat', value: 'cat',style:{marginLeft:20} }
    ];

    const handleSubmit = () => {
        console.log(image,'ini image')
    axios({
        url: 'http://192.168.1.3:3000/pets',
        method: 'POST',
        headers:{access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWZkNThhOWQ5NjAyNDQ4OGI3OGJkNyIsImVtYWlsIjoidGFtYUBnbWFpbC5jb20iLCJpYXQiOjE2MDUzNTg5ODh9.1fDc7yYmvXXrLwKiLecnJjhnffnTlRFuBMNRtNDzYUI'},
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

    const takePic = () => {
        ImagePicker.showImagePicker( {} , (response) => {
            const file={
                uri:response.uri,
                name:response.fileName,
                type:'image/png',
            }
            const config = {
                keyPrefix: `s3/`,
                bucket:'photos',
                region:'ap-southeast-1',
                access_key:'AKIAI3HZB6Q3UPG2LTMA',
                secretKey:'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',
                successActionStatus:201,
            }
            RNS3.put(file,config)
            .then(response => 
                setImage(response.body.postResponse.location)    
            )
            .catch(err => {
                console.log(err);
            })
        })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
             <View style={{display:'flex',justifyContent:'center',alignContent:'center',paddingTop:100}}>
                <TextInput
                placeholder="Enter your Pet Name"
                value={name}
                onChangeText={ (text) => setName(text)}
                required
                />
                <TextInput
                placeholder="Enter your Pet Age"
                value={age}
                keyboardType="numeric"
                onChangeText={ (text) => setAge(text)}
                required
                />
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
                <Button
                onPress={takePic}
                title="choose photo"
                />
                {
                    image && (
                        <Image
                        source={{uri:image}}
                        style={{width:300,height:300}}
                        />
                    )
                }
            <Button
            title="submit"           
            onPress={handleSubmit}
            />
            </View>
        </TouchableWithoutFeedback>       
    )
}

export default AddPet;