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
                    width:300,
                    height:150,
                    borderRadius:20,
                    borderWidth:0.5,
                    marginLeft:10,
                    borderColor:'brown',
                    position:'relative',
                    marginVertical:5

                }}
                >
                    <Text style={{fontWeight:'bold',fontSize:30,marginLeft:15,marginTop:10}}>{array[i].user} </Text>
                    <Text style={{fontSize:15,marginLeft:15}}> {array[i].msg} </Text>
            <Text style={{position:'absolute',right:20,top:10}}>{array[i].timeCreated}</Text>
                </View>)
        }
        
        return reviewMessages;
    }

    return (
        <View>
            <View style={{display:'flex',flexDirection:'row',height:100,paddingTop:25,borderBottomWidth:1, backgroundColor: '#F7E7D3'}}>
                <Image
                source={logo}
                style={{ width:80, height:80, marginLeft:3 }}
                />
                <Text style={{fontSize:30,marginTop:20, color: '#BA826A'}}> Keeper detail </Text>
            </View>
            {keeper._id && <View>
                <View style={{backgroundColor:'lightgrey'}}>
                    <Image
                    source={{uri:keeper.image}}
                    style={{display:'flex',alignItems:'center',height:300,resizeMode:'contain',marginTop:3,shadowOpacity: 0.37,
                    shadowRadius: 7.49,shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 8,
                    }}}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{display:'flex',flexDirection:'column',marginLeft:10}}>
                    <Text style={{fontSize:35,fontWeight:'bold'}}>
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
                        <View style={{display:'flex',borderWidth:1,width:125,justifyContent:'center',borderRadius:60,borderColor:'green',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Hourly Rates</Text>
                           <Text style={{alignSelf:'center'}}>Rp {keeper.price.hourly.toLocaleString().replace(',','.')}</Text>
                        </View>
                        <View style={{display:'flex',borderWidth:1,width:125,justifyContent:'center',borderRadius:60,borderColor:'blue',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Daily Rates </Text>
                           <Text style={{alignSelf:'center'}}>Rp {keeper.price.daily.toLocaleString().replace(',','.')}</Text>
                        </View>
                        <View style={{display:'flex',borderWidth:1,width:125,justifyContent:'center',borderRadius:60,borderColor:'red',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Weekly Rates</Text>
                           <Text style={{alignSelf:'center'}}>Rp {keeper.price.weekly.toLocaleString().replace(',','.')}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:5,height:300}}>
                        <Text style={{fontSize:25}}>
                            Reviews :
                        </Text>
                    {(keeper.review.length == 0) ? <Text style={{fontSize:15}}> {keeper.name} has no review yet </Text> :
                        reviews(keeper.review)
                    }
                    </View>

                </View>
            </ScrollView>
                </View>}

                
            
        </View>
    )
}

export default KeeperDetail;