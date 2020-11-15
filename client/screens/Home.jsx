import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Home = ({navigation}) => {
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
                            fontSize:20,
                            marginTop : 5,
                            color:"black",
                            fontWeight:"normal",
                            fontFamily : 'nunito'
                        }}>Welcome,  You !</Text>
                        <Text></Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                            source={require('../assets/logoDog.png')}
                            style={{height:70,width:70 , marginTop : 20}}
                        />
                   </View>

              </View>
              <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop : 5
               }}>
                 <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    backgroundColor: "#ED9104",
                    marginLeft : 15
                  }}
                  >
                <Icon name="plus" color="white" size={32} />
                </View>
                
                
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    backgroundColor: "#ED9104",
                    marginLeft : 40
                  }}
                  >
                <Icon name="dog" color="white" size={32} />
                </View>

                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    backgroundColor: "#ED9104",
                    marginLeft : 40
                  }}
                  >
                <Icon name="worker" color="white" size={32} />
                </View>


                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    backgroundColor: "#ED9104",
                    marginLeft : 40
                  }}
                  >
                <Icon name="heart-half-full" color="white" size={32} />
                </View>
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
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#EED811"
                        }}>Recommended Keeper</Text>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#EED811",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"black"
                            }}>More</Text>
                        </View>
                   </View>
               </View>

            
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:200}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        {/* <Image
                            source={require('../images/4.png')}
                        /> */}
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Budi</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#EED811",
                                paddingLeft:65
                            }}>Rp 5000</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#EED811",
                            paddingTop:3
                        }}>
                            Bekasi
                        </Text>
                    </TouchableOpacity>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        {/* <Image
                            source={require('../images/5.png')}
                        /> */}
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Dodit</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#EED811",
                                paddingLeft:45
                            }}>Rp 8000</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#EED811",
                            paddingTop:3
                        }}>
                            Cileduk
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        {/* <Image
                            source={require('../images/6.png')}
                        /> */}
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Sugeng</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#EED811",
                                paddingLeft:35
                            }}>Rp 3000</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#EED811",
                            paddingTop:3
                        }}>
                            Petamburan
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        {/* <Image
                            source={require('../images/6.png')}
                        /> */}
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Sinto</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#EED811",
                                paddingLeft:35
                            }}>Rp 2000</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#EED811",
                            paddingTop:3
                        }}>
                            Cikampek
                        </Text>
                    </View>

                </ScrollView>                    
        </View>
    )
}
export default Home;