import React, { useEffect } from 'react';
import {fetchKeeper} from '../store/actions/index';
import { useDispatch , useSelector } from 'react-redux';
import { View , Text , Image, TouchableOpacity , Alert } from 'react-native';
import logo from '../assets/logoDog.png';
import { ScrollView } from 'react-native-gesture-handler';

const KeeperDetail = ({navigation, route}) => {
    const dispatch = useDispatch();
    const {id} = route.params;
    const {keeper} = useSelector(state => state)
    
    useEffect(() => {
        dispatch(fetchKeeper(id))
    },[])
    
    const toMaps = (keeperLatitude, keeperLongitude) => {
        navigation.navigate('GMap', {latitude: keeperLatitude, longitude: keeperLongitude})
    }

    const skills = (array) => {
        let answer = '';
        for(let i = 0 ; i<array.length ; i++) {
            if(i == array.length - 1) {
                answer += `${array[i]}`
            } else {
                answer += `${array[i]},`
            }
        }
        return answer
    }
    const reviews = (array) => {
        let reviewMessages = [];
        for(let i = 0 ; i<array.length ; i++) {
            reviewMessages.push(<View
                key={i}
                display='flex'
                flexDirection='column'
                style={{
                    width:375,
                    height:125,
                    borderRadius:20,
                    borderWidth:0.5,
                    borderColor:'brown',
                    position:'relative',
                    marginVertical:5

                }}
                >
                    <Text style={{fontWeight:'bold',fontSize:25,marginLeft:15,marginTop:10}}>{array[i].user} </Text>
                    <Text style={{fontSize:15,marginLeft:15}}> {array[i].msg} </Text>
            <Text style={{position:'absolute',right:20,top:10}}>{array[i].timeCreated}</Text>
                </View>)
        }
        
        return reviewMessages;
    }

    return (
                <ScrollView>
        <View>
            <View style={{display:'flex',flexDirection:'row',height:120,paddingTop:35,borderBottomRightRadius:20,borderBottomLeftRadius:20, backgroundColor: '#F4E3E3'}}>
                <Text style={{fontSize:25,marginTop:20,marginLeft:20, color: '#2F3542',fontFamily : 'nunito',}}> Keeper detail </Text>
            </View>
            {keeper._id && <View style={{display:'flex',marginTop:20}}>
                    <Image
                    source={{uri:keeper.image}}
                    style={{display:'flex',alignItems:'center',height:300,resizeMode:'contain',marginTop:3,shadowOpacity: 0.37,
                    shadowRadius: 7.49,shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 8,
                    }}}
                    />
                    <View>
                    </View>
                <View style={{display:'flex',flexDirection:'column',marginHorizontal:20,marginTop:5}}>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>
                        {keeper.name}
                    </Text>
                    <Text style={{marginTop:2}}>
                        Specialized in {skills(keeper.skills)}
                    </Text>
                    <View>
                        <Text style={{fontSize:15,marginTop:2,borderColor:'black',borderBottomWidth:1}}>
                            Lives in {keeper.address}
                        </Text>
                        <TouchableOpacity
                        style={{ width: 150, height: 30, position: 'absolute', right: 10, bottom: 6.5, backgroundColor: '#BA826A', borderRadius: 10 }}
                        onPress={() => toMaps(keeper.latitude, keeper.longitude)}
                        >
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: 5 }}>Show Location </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}} >
                        <View style={{display:'flex',borderWidth:1,width:100,height:60,justifyContent:'center',borderRadius:20,borderColor:'green',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Hourly</Text>
                           <Text style={{alignSelf:'center'}}>Rp {keeper.price.hourly.toLocaleString().replace(',','.')}</Text>
                        </View>
                        <View style={{display:'flex',borderWidth:1,width:100,height:60,justifyContent:'center',borderRadius:20,borderColor:'blue',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Daily </Text>
                           <Text style={{alignSelf:'center'}}>Rp {keeper.price.daily.toLocaleString().replace(',','.')}</Text>
                        </View>
                        <View style={{display:'flex',borderWidth:1,width:100,height:60,justifyContent:'center',borderRadius:20,borderColor:'red',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Weekly</Text>
                           <Text style={{alignSelf:'center'}}>Rp {keeper.price.weekly.toLocaleString().replace(',','.')}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,height:300}}>
                        <Text style={{fontSize:25}}>
                            Reviews :
                        </Text>
                    {(keeper.review.length == 0) ? <Text style={{fontSize:15}}> {keeper.name} has no review yet </Text> :
                        reviews(keeper.review)
                    }
                    </View>

                </View>
                </View>}

                
            
        </View>
            </ScrollView>
    )
}

export default KeeperDetail;