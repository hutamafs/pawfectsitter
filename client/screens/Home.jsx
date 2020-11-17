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
  const {userData} = route.params
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setToken(''))
        navigation.replace('Landing')
    }

    return(
        <View style={{
            backgroundColor:"#C8D1DA",
            flex:1,
        }}>
           <View style={{
               backgroundColor:"#6661DB",
               height:"30%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal: 20
            }}>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                <View >
                        <Icon 
                            name="paw" 
                            color="black" 
                            size={80}
                            style={[{  
                            transform: [{ rotate: "0deg" }],
                            position : 'absolute',
                            marginTop : 25 ,
                            color : "#102B3E",
                            opacity : 0.5,
                        }]}
                        />
                </View>
                <Text 
                    style={{
                        marginTop : 35,
                        marginLeft : 88,
                        fontFamily : 'nunito',
                        color : "#0F2A3C",
                        fontSize : 22
                    }}
                > PawFect Sitter</Text>
                <Button
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 10,
                        backgroundColor: "#C8D1DA",
                        borderColor: '#6964E2',
                        marginHorizontal : 400,
                        marginTop : 40,
                        padding : 2,
                        position : 'absolute'
                    }}
                        onPress={handleLogout} 
                    >
                    <Icon 
                    name="logout" 
                    color="#102B3E" 
                    size={30} />
                </Button>
            </View>
            <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   width:"100%"
               }}>
                   <View style={{width:"100%"}}>
                        <Text style={{
                            fontSize:15,
                            marginLeft : 93,
                            color: "#0F2A3C",
                            fontWeight:"normal",
                            fontFamily : 'nunito'
                        }}>Hey, You </Text>
                        <Text style={{
                            fontSize:15,
                            marginLeft : 93,
                            color: "#0F2A3C",
                            fontWeight:"normal",
                            fontFamily : 'nunito'
                        }}>Love your puppy with us </Text>
                   </View>
              </View>
              
              <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop : 30
               }}>
                 <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    backgroundColor: "#102B3F",
                    borderColor: '#102B3F',
                    marginLeft : 15
                    
                  }}
                  onPress={() => navigation.navigate('AddPet')}

                  >
                    <Icon 
                    name="plus" 
                    color="#6964E2" 
                    size={50} />
                    
                </Button> 
            
                
                
                <Button
                  style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 60,
                        width: 60,
                        borderRadius: 20,
                        backgroundColor: "#102B3F",
                        marginLeft : 45,
                        borderColor: '#102B3F',
                    }}
                    onPress={() => navigation.navigate('PetList')}
                  >
                    <Icon 
                    name="dog" 
                    color="#6964E2" 
                    size={40} />
                </Button>

                <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    backgroundColor: "#102B3F",
                    marginLeft : 48,
                    borderColor: '#102B3F',
                  }}
                  onPress={() => navigation.navigate('KeepersPage')}
                  >
                    <Icon 
                    name="worker" 
                    color="#6964E2" 
                    size={40} />
                </Button>


                <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    borderColor: '#102B3F',
                    backgroundColor: "#102B3F",
                    marginLeft : 45
                  }}
                  >
                    <Icon 
                    name="heart-half-full" 
                    color="#6964E2" 
                    size={40} />
                </Button>
              </View>
           <View style={{
                   flexDirection:"row",
                   paddingHorizontal:14,
                   width:"100%",
                   alignItems:"center",
                   marginTop : -8
               }}>
                   <Text
                    style={{
                        fontWeight : 'bold',
                        paddingHorizontal:30,
                        fontFamily:"nunito",
                        color : '#102B3E'
                    }}
                   >Add Pet</Text>
                   <Text
                    style={{
                        fontWeight : 'bold',
                        paddingHorizontal:35,
                        fontFamily:"nunito",
                        color : '#102B3E'
                    }}
                   >My Pet</Text>
                   <Text
                    style={{
                        fontWeight : 'bold',
                        paddingHorizontal:28,
                        fontFamily:"nunito",
                        color : '#102B3E'
                    }}
                   >My Keeper</Text>
                   <Text
                    style={{
                        fontWeight : 'bold',
                        paddingHorizontal:19,
                        fontFamily:"nunito",
                        color : '#102B3E'
                    }}
                   >Tinder Dog</Text>

            </View>
           </View>

           <LinearGradient
            colors={["rgba(16,43,62,0.1)", "transparent"]}
            style={{
                left:0,
                right:0,
                top : -3,
                height:65,
                marginTop:-35
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:20,
                   marginTop:15,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#102B3E"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginBottom : 10,
                   marginTop : 10
               }}>
                   <View style={{width:"40%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:18,
                            color:"#102B3E",
                            opacity : 0.5,
                            borderBottomWidth : 4,
                            borderBottomEndRadius : 20,
                            padding : 3,
                            borderColor : "rgba(16,43,62,0.6)"
                        }}>Recommended Keeper</Text>
                   </View>
                   <View >
                        <Icon 
                            name="paw" 
                            color="black" 
                            size={80}
                            style={[{  
                            transform: [{ rotate: "25deg" }],
                            position : 'absolute',
                            marginTop : -25 ,
                            marginLeft : -140,
                            color : "#102B3E",
                            opacity : 0.1,
                        }]}
                        />
                </View>
                   <View >
                        <Icon 
                            name="paw" 
                            color="black" 
                            size={80}
                            style={[{  
                            transform: [{ rotate: "25deg" }],
                            position : 'absolute',
                            marginTop : -25 ,
                            marginLeft : 70,
                            color : "#102B3E",
                            opacity : 0.1,
                        }]}
                        />
                </View>  
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        
                           

                   </View>
               </View>


                             
               <View >
                        <Icon 
                            name="paw" 
                            color="black" 
                            size={80}
                            style={[{  
                            transform: [{ rotate: "25deg" }],
                            position : 'absolute',
                            marginTop : 200 ,
                            marginLeft : -10,
                            color : "#102B3E",
                            opacity : 0.1,
                        }]}
                        />
                </View>

                <View >
                        <Icon 
                            name="paw" 
                            color="black" 
                            size={80}
                            style={[{  
                            transform: [{ rotate: "25deg" }],
                            position : 'absolute',
                            marginTop : 145 ,
                            marginLeft : 380,
                            color : "#102B3E",
                            opacity : 0.1,
                        }]}
                        />
                </View>
                <View >
                        <Icon 
                            name="paw" 
                            color="black" 
                            size={80}
                            style={[{  
                            transform: [{ rotate: "25deg" }],
                            position : 'absolute',
                            marginTop : 350 ,
                            marginLeft : 250,
                            color : "#102B3E",
                            opacity : 0.1,
                        }]}
                        />
                </View>
        
                
                <ScrollView>   
                    <KeepList
                        img={require('../assets/employee.png')}
                        name="John Doe "
                        rating='9.8'
                        bg="#6964E2"
                        font="#102B3E"
                    />
                    <KeepList
                        img={require('../assets/employee.png')}
                        name="Akang Surasep"
                        rating='9.8'
                        bg="#102B3E"
                        font="#6964E2"
                    />
                    <KeepList
                        img={require('../assets/employee.png')}
                        name="Ronald Bertand"
                        rating='9.4'
                        bg="#6964E2"
                        font="#102B3E"
                    />
                    <KeepList
                        img={require('../assets/employeeGirl.png')}
                        name="Putri Nandia"
                        rating='9.0'
                        bg="#102B3E"
                        font="#6964E2"
                    />
                    <KeepList
                        img={require('../assets/employeeGirl.png')}
                        name="Riyanti Santi"
                        rating='8.8'
                        bg="#6964E2"
                        font="#102B3E"
                    />
                    <KeepList
                        img={require('../assets/employee.png')}
                        name="Siswanto Agung"
                        rating='7.8'
                        bg="#102B3E"
                        font="#6964E2"
                    />
                </ScrollView>    
            <TabBar 
            navigation={navigation} 
            userData={userData}
            />               
        </View>
    )
}
export default Home;
