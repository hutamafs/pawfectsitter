import React, { useEffect } from 'react';
import {fetchKeeper} from '../store/actions/index';
import { useDispatch , useSelector } from 'react-redux';
import { View , Text , Image, TouchableOpacity } from 'react-native';
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
        console.log(keeperLatitude, 'line 18')
        console.log(keeperLongitude, 'line 19')
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
        if(array > 0) {
            for(let i = 0 ; i<array.length ; i++) {
                <View
                key={i}
                display='flex'
                flexDirection='column'
                >
                    <Text style={{fontWeight:'bold',fontSize:15}}> {array[i].user} </Text>
                    <View style={{display:'flex',flexWrap:'wrap'}}>
                        <Text style={{fontSize:10}}> {array[i].msg} </Text>
                    </View>
                </View>
            }
        }        
        return reviewMessages;
    }

    return (
        <View>
            <View style={{display:'flex',flexDirection:'row',height:80,paddingTop:15,borderBottomWidth:1, backgroundColor: '#F7E7D3'}}>
                <Image
                source={logo}
                style={{ width:80, height:80, marginLeft:3 }}
                />
                <Text style={{fontSize:30,marginTop:20, color: '#BA826A'}}> Keeper detail </Text>
            </View>
            {keeper._id && <ScrollView showsVerticalScrollIndicator={false}>
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
                <View style={{display:'flex',flexDirection:'column',marginLeft:10}}>
                    <Text style={{fontSize:35,fontWeight:'bold'}}>
                        {keeper.name}
                    </Text>
                    <Text style={{marginTop:2}}>
                        Specialized in {skills(keeper.skills)}
                    </Text>
                    <Text style={{fontSize:15,marginTop:2,borderColor:'black',borderBottomWidth:1}}>
                        Lives in {keeper.address}
                    </Text>
                    <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}} >
                        <View style={{display:'flex',borderWidth:1,width:125,justifyContent:'center',borderRadius:60,borderColor:'green',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Hourly Rates</Text>
                           <Text style={{alignSelf:'center'}}>{keeper.price.hourly}</Text>
                        </View>
                        <View style={{display:'flex',borderWidth:1,width:125,justifyContent:'center',borderRadius:60,borderColor:'blue',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Daily Rates </Text>
                           <Text style={{alignSelf:'center'}}>{keeper.price.daily}</Text>
                        </View>
                        <View style={{display:'flex',borderWidth:1,width:125,justifyContent:'center',borderRadius:60,borderColor:'red',marginTop:10,marginHorizontal:10}}>
                           <Text style={{alignSelf:'center'}}> Weekly Rates</Text>
                           <Text style={{alignSelf:'center'}}>{keeper.price.weekly}</Text>
                        </View>
                        <TouchableOpacity
                        style={{ width: 150, height: 30, position: 'absolute', right: 10, bottom: 6.5, backgroundColor: '#BA826A', borderRadius: 10 }}
                        onPress={() => toMaps(keeper.latitude, keeper.longitude)}
                        >
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: 5 }}>Show Location </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={{fontSize:25}}>
                            Reviews :
                        </Text>
                    {(keeper.review.length == 0) ? <Text style={{fontSize:15}}> {keeper.name} has no review yet </Text> :
                        reviews(keeper.review)
                    }
                    </View>

                </View>
            </ScrollView>}
            
        </View>
    )
}

export default KeeperDetail;