import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import  TabBar  from './components/TabBottomNavbar'
import KeepList from './components/KeepList'
import Button from 'apsl-react-native-button'
import { setToken } from '../store/actions';
import { useDispatch } from 'react-redux';


const Home = ({navigation}) => {
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
               backgroundColor:"#EED811",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:10,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:15,
                            marginTop : 20,
                            marginBottom: 45,
                            color:"black",
                            fontWeight:"normal",
                            fontFamily : 'nunito'
                        }}>Welcome,  You !</Text>
                   </View>
                   <View>
                       <Button
                        style={{
                            height: 25,
                            width: 65,
                            borderRadius: 10,
                            backgroundColor: "#ED9104",
                            borderColor: '#C7B838',
                            marginHorizontal : 160,
                            fontSize : 3,
                            padding : 5
                          }}
                          onPress={handleLogout}
                       >Log out</Button>
                   </View>
              </View>
              
              <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop : 5
               }}>
                 <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 65,
                    width: 65,
                    borderRadius: 20,
                    backgroundColor: "#ED9104",
                    borderColor: '#C7B838',
                    marginLeft : 15
                    
                  }}
                  onPress={() => navigation.navigate('AddPet')}

                  >
                    <Icon name="plus" color="white" size={40} />
                    
                </Button> 
            
                
                
                <Button
                  style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 65,
                        width: 65,
                        borderRadius: 20,
                        backgroundColor: "#ED9104",
                        marginLeft : 40,
                        borderColor: '#C7B838',
                    }}
                    onPress={() => navigation.navigate('PetList')}
                  >
                    <Icon name="dog" color="white" size={32} />
                </Button>

                <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 65,
                    width: 65,
                    borderRadius: 20,
                    backgroundColor: "#ED9104",
                    marginLeft : 40,
                    borderColor: '#C7B838',
                  }}
                  onPress={() => navigation.navigate('KeepersPage')}
                  >
                    <Icon name="worker" color="white" size={32} />
                </Button>


                <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 65,
                    width: 65,
                    borderRadius: 20,
                    borderColor: '#C7B838',
                    backgroundColor: "#ED9104",
                    marginLeft : 40
                  }}
                  >
                    <Icon name="heart-half-full" color="white" size={32} />
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
                        paddingHorizontal:30,
                        fontFamily:"nunito",
                    }}
                   >Add Pet</Text>
                   <Text
                    style={{
                        paddingHorizontal:35,
                        fontFamily:"nunito",
                    }}
                   >My Pet</Text>
                   <Text
                    style={{
                        paddingHorizontal:20,
                        fontFamily:"nunito",
                    }}
                   >My Keeper</Text>
                   <Text
                    style={{
                        paddingHorizontal:25,
                        fontFamily:"nunito",
                    }}
                   >Tinder Dog</Text>

            </View>
           </View>



           

           <LinearGradient
            colors={["rgba(237,145,4,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:20,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="black"
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
                   marginBottom : 30,
                   marginTop : 20
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:18,
                            color:"#EED811",
                        }}>Recommended Keeper</Text>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        
                            <Button
                                style={{
                                    height: 25,
                                    width: 65,
                                    borderRadius: 10,
                                    backgroundColor: "#EED811",
                                    borderColor: '#C7B838',
                                    marginHorizontal : 160,
                                    fontSize : 3,
                                    padding : 5,
                                }}
                                onPress={() => navigation.navigate('KeepersPage')} 
                            >
                               <Text
                                style={{
                                    fontFamily:"nunito",
                                }}
                               >More</Text> 
                            </Button>

                   </View>
               </View>

            
        
                
                <ScrollView>     
                    <KeepList
                        img={require('../assets/logoDog.png')}
                        name="Budi"
                        rating='9.8'
                        bg="#EED811"
                    />
                    <KeepList
                        img={require('../assets/logoDog.png')}
                        name="Andi"
                        rating='9.5'
                        bg="#EED811"
                    />
                    <KeepList
                        img={require('../assets/logoDog.png')}
                        name="Roman"
                        rating='9.5'
                        bg="#EED811"
                    />
                    <KeepList
                        img={require('../assets/logoDog.png')}
                        name="Kosasih"
                        rating='9.5'
                        bg="#EED811"
                    />
                    <KeepList
                        img={require('../assets/logoDog.png')}
                        name="Simon"
                        rating='9.5'
                        bg="#EED811"
                    />
                    <KeepList
                        img={require('../assets/logoDog.png')}
                        name="Citra"
                        rating='9.5'
                        bg="#EED811"
                    />
                </ScrollView>    
            <TabBar navigation={navigation} />               
        </View>
    )
}
export default Home;