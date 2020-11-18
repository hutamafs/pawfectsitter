import React, { useEffect } from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import  TabBar  from './components/TabBottomNavbar'
import KeepList from './components/KeepList'
import Button from 'apsl-react-native-button'
import logo from '../assets/logoDog.png'
import { setToken } from '../store/actions';
import { useDispatch } from 'react-redux';


const Home = ({navigation, route}) => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setToken(''))
        navigation.replace('Landing')
    }

    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1,
        }}>
           <View style={{
               backgroundColor:"#F4E3E3",
               height:"25%",
               borderBottomLeftRadius:35,
               borderBottomRightRadius:35,
               paddingHorizontal: 20
            }}>
                <View
                    style={{
                        display:'flex',
                        flexDirection : 'row',
                        position:'relative',
                        width:'100%',
                    }}
                >
            
                    
                    <Text 
                    style={{
                        marginTop : 45,
                        marginLeft:35,
                        fontFamily : 'nunito',
                        color : "#2F3542",
                        fontSize : 25,
                        alignItems:'center'
                    }}
                >Home</Text>
                <Button
                    style={{
                        height: 40,
                        width: 40,
                        position : 'absolute',
                        borderColor:'#F4E3E3',
                        top:45,
                        right:16
                    }}
                        onPress={handleLogout} 
                    >
                    <Icon 
                    name="logout" 
                    color="#FF6B81" 
                    size={30} />
                </Button>
            </View>
              
              <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   justifyContent:'center',
                   marginTop : 30
               }}>
                 <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    backgroundColor: "#F4E3E3",
                    borderColor: '#FF6B81',
                    borderWidth : 4,
                    
                  }}
                  onPress={() => navigation.navigate('AddPet')}

                  >
                    <Icon 
                    name="plus" 
                    color="#FF6B81" 
                    size={50} />
                    
                </Button> 
            
                
                
                <Button
                  style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 60,
                        width: 60,
                        borderRadius: 20,
                        marginLeft : 45,
                        backgroundColor: "#FF6B81",
                        borderColor: '#FF6B81',
                        borderWidth : 4,
                    }}
                    onPress={() => navigation.navigate('PetList')}
                  >
                    <Icon 
                    name="dog" 
                    color="#F4E3E3" 
                    size={40} />
                </Button>

                <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    marginLeft : 48,
                    backgroundColor: "#F4E3E3",
                    borderColor: '#FF6B81',
                    borderWidth : 4,
                  }}
                  onPress={() => navigation.navigate('KeepersPage')}
                  >
                    <Icon 
                    name="worker" 
                    color="#FF6B81" 
                    size={40} />
                </Button>


                {/* <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    borderColor: '#FF6B81',
                    backgroundColor: "#FF6B81",
                    marginLeft : 45
                  }}
                  >
                    <Icon 
                    name="heart-half-full" 
                    color="#F4E3E3" 
                    size={40} />
                </Button> */}
              </View>
           <View style={{
                   flexDirection:"row",
                   width:"100%",
                   marginTop : -3,
               }}>
                   <Text
                    style={{
                        fontWeight : 'bold',
                        fontFamily:"nunito",
                        color : '#2F3542',
                        marginLeft:45,
                        paddingLeft:8
                    }}
                   >Add Pet</Text>
                   <Text
                    style={{
                        fontWeight : 'bold',
                        fontFamily:"nunito",
                        color : '#2F3542',
                        marginLeft:60
                    }}
                   >My Pet</Text>
                   <Text
                    style={{
                        fontWeight : 'bold',
                        fontFamily:"nunito",
                        color : '#2F3542',
                        marginLeft:60
                    }}
                   >Keepers</Text>
                   {/* <Text
                    style={{
                        fontWeight : 'bold',
                        paddingHorizontal:19,
                        fontFamily:"nunito",
                        color : '#2F3542'
                    }}
                   >Tinder Dog</Text> */}

            </View>
           </View>
           
               {/* <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:50,
                   borderRadius:20,
                   marginTop: -20,
                   flexDirection:"row",
                   alignItems:"center",
                   borderColor : '#FF6B81',
                   borderWidth : 2
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#2F3542"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:320
                        }}
                   />
               </View> */}


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:29,
                   width:"100%",
                   alignItems:"center",
                   marginBottom : 10,
                   marginTop : 10
               }}>
                   <View style={{width:"100%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:18,
                            color:"#FF6B81",
                            opacity : 0.9,
                            borderBottomWidth : 4,
                            borderBottomEndRadius : 20,
                            padding : 3,
                            borderColor : "#FF6B81"
                        }}>Recommended Keepers</Text>
                   </View>
                   
                   
                   <View style={{width:"50%", alignItems:"flex-end"}}> 

                   </View>
               </View>


                             
               

                
                <ScrollView>   
                    <KeepList
                        img={require('../assets/employee.png')}
                        name="John Doe "
                        rating='9.8'
                        bg="#F4F4F4"
                        font="#2F3542"
                    />
                    <KeepList
                        img={require('../assets/employee.png')}
                        name="Akang Surasep"
                        rating='9.8'
                        bg="#F4F4F4"
                        font="#2F3542"
                    />
                    <KeepList
                        img={require('../assets/employee.png')}
                        name="Ronald Bertand"
                        rating='9.4'
                        bg="#F4F4F4"
                        font="#2F3542"
                    />
                    <KeepList
                        img={require('../assets/employeeGirl.png')}
                        name="Putri Nandia"
                        rating='9.0'
                        bg="#F4F4F4"
                        font="#2F3542"
                    />
                    <KeepList
                        img={require('../assets/employeeGirl.png')}
                        name="Riyanti Santi"
                        rating='8.8'
                        bg="#F4F4F4"
                        font="#2F3542"
                    />
                    <KeepList
                        img={require('../assets/employee.png')}
                        name="Siswanto Agung"
                        rating='7.8'
                        bg="#F4F4F4"
                        font="#2F3542"
                    />
                </ScrollView>    
            <TabBar 
            navigation={navigation}
            />               
        </View>
    )
}
export default Home;
