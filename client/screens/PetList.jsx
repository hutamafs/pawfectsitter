import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/logoDog.png'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import TabBar from './components/TabBottomNavbar'
import { fetchPets } from '../store/actions';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient'
import Button from 'apsl-react-native-button'
import bird from '../assets/bird2.png'

export default function PetList({ navigation }) {
  const [type, setType] = useState("All")
  const dispatch = useDispatch()
  const { access_token, pets } = useSelector(state => state)

  const filterPet = (animals = [], type) => 
  !animals || type === 'All' ?
  animals :
  animals.filter(animal => animal.type.toLowerCase() === type.toLowerCase())

  useEffect(() => {
    dispatch(fetchPets(access_token))
  }, [])

  if ( orders.length == 0 ){
    return (
      <View style={{
        backgroundColor:"#C8D1DA",
        flex:1,
      }}>
       <View style={{
           backgroundColor:"#6661DB",
           height:"11%",
           borderBottomLeftRadius:20,
           borderBottomRightRadius:20,
           paddingHorizontal: 25,
           marginBottom : -24,
          }}>
          <Button 
          style={{
            width : 30,
            height : 30,
            marginTop : 35,
            borderColor : "#6661DB"
          }}
            onPress={backToHome}
          >
                <Icon 
                  name="arrow-left-circle" 
                  color="black" 
                  size={50}
                  style={[{  
                  transform: [{ rotate: "0deg" }],
                  position : 'absolute',
                  color : "#102B3E",
                }]}
                />
              </Button>
           <View style={{
               flexDirection:"row",
               marginTop:10,
               width:"100%"
           }}>
               <View style={{width:"100%",backgroundColor:'black'}}>
                    <Text style={{
                      fontSize: 15,
                      marginTop : -50,
                      color:"#0F2A3C",
                      fontWeight:"normal",
                      fontFamily : 'nunito',
                    }}> Order List </Text>
               </View>
          </View>
       </View>
           <View style={{
               flexDirection:"row",
               paddingHorizontal:20,
               width:"100%",
               alignItems:"center",
               marginBottom : 30,
               marginTop : 33,
           }}>
               <View style={{width:"50%"}}>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:15,
                        color:"#6B6C6E",
                        marginLeft : 20,
                    }}>{localOrders.length} Order</Text>
  
               </View>
               <View style={{width:"80%", alignItems:"flex-end"}}>
               </View>
          
           </View>
           <View >
                        <Icon 
                            name="paw" 
                            color="black" 
                            size={80}
                            style={[{  
                            transform: [{ rotate: "25deg" }],
                            marginTop : -20,
                            marginLeft : 130,
                            position : "absolute",
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
                            marginTop : 10,
                            marginLeft : 390,
                            position : "absolute",
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
                            marginTop : 260,
                            marginLeft : 190,
                            position : "absolute",
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
                            marginTop : 370,
                            marginLeft : 390,
                            position : "absolute",
                            color : "#102B3E",
                            opacity : 0.1,
                        }]}
                        />
                </View> 
            <View 
              style={{
                height : "92%",
                alignItems : 'center',
                justifyContent :'center',
                marginTop : -160
              }}  
              >
            <Icon 
                  name="dog-side" 
                  color="#102B3E" 
                  size={250}
                  style={[{  
                  transform: [{ rotate: "0deg" }],
                  color : "#102B3E",
                  opacity : 0.4
                }]}
                />
                <Text
                  style={{
                    fontFamily : 'nunito',
                    fontSize : 20,
                    opacity: 0.4
                  }}
                >Sorry, You Don't have a Order !</Text>
            </View>
            <View >
                        <Icon 
                            name="paw" 
                            color="black" 
                            size={80}
                            style={[{  
                            transform: [{ rotate: "25deg" }],
                            marginTop : -140,
                            marginLeft : 220,
                            position : "absolute",
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
                            marginTop : -290,
                            position : "absolute",
                            color : "#102B3E",
                            opacity : 0.1,
                        }]}
                        />
                </View>
        <TabBar 
        navigation={navigation} 
        style={{
        }} />               
    </View>
          
    )
    
  }


  return (
    <View style={{
      backgroundColor: "#FFF",
      flex: 1
    }}>
      <View style={{
        backgroundColor: "#F4E3E3",
        height: "13%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
      }}>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 45,
          width: "30%",
          height:50,
          justifyContent:'center',
          borderRadius:30
        }}>
          <Text 
              style={{
                  fontFamily : 'nunito',
                  color : "#2F3542",
                  fontSize : 25
              }}
          >Pet List</Text>
        </View>
      </View>
      {/* <LinearGradient
        colors={["#F4E3E3", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 50,
          marginTop: -25
        }}
      >

      </LinearGradient> */}

      {/* filter */}
      <View
        style={{
          flexDirection : "row",
          marginStart : 60,
          marginTop : 10,
        }}
      >
        <Text
          style={{
            fontFamily : 'nunito',
            marginTop : 20,
            marginLeft : -20,
            fontSize : 20,
            marginRight : 20
          }}
        >Filter By : </Text>

        {/* button disamping kiri */}
        <Button

            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              width: 60,
              borderRadius: 20,
              backgroundColor: "#F4E3E3",
              borderColor: '#FF6B81',
              borderWidth : 2,
              marginRight : 20
            }}
            onPress={() => setType('dog')}
            
        >
          <Icon 
            name="dog" 
            color="#FF6B81" 
            size={35} />
          </Button>
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              width: 60,
              borderRadius: 20,
              backgroundColor: "#FF6B81",
              borderColor: '#FF6B81',
              borderWidth : 2,
              marginRight : 20
            }}
            onPress={() => setType('cat')}


          >
            <Icon 
              name="cat" 
              color="#F4E3E3" 
              size={35} />
          </Button>
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              width: 60,
              borderRadius: 20,
              backgroundColor: "#F4E3E3",
              borderColor: '#FF6B81',
              borderWidth : 2,
              marginRight : 20
            }}
            onPress={() => setType('bird')}


          >
            <Image source={bird} 
              style={{ 
              width: 180, 
              height: 180,
              marginTop : 48,
              marginLeft : 30
              }} />
          </Button>
      </View>
      

      {/* slide gambar ke kiri-kanan */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: 700,
          marginLeft : 20,
          marginBottom : 10
        }}
        >
       
        {filterPet(pets, type).map((pet,i) => {
          return (
            <View
            key={i}
              style={{
                height: 500,
                elevation: 30,
                marginTop: 30,
                borderRadius: 15,
                // borderWidth : 2,
                width:240,
                marginLeft : 20,
              }}
            >

              <View style={{
                flexDirection: "column",
                alignItems:'center'
              }}>
                <Image
                  key={pet._id}
                  source={{ uri: pet.image }}
                  style={{
                    marginLeft : -2,
                    marginTop : -2,
                    width: 245,
                    height: 351,
                    borderRadius : 20

                  }}
                  />
                <View style={{width:350,height:350,display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <Text style={{
                    fontSize: 25,
                    fontFamily : 'nunito',
                    marginTop : 5
                    }} > {pet.name} </Text>
                  <View
                    style={{
                      flexDirection : "row",
                      marginTop : 20, 
                    }}
                  >
                    <View style={{
                      fontSize:30,
                      borderWidth : 3,
                      width : 60,
                      height : 60,
                      marginRight : 20,
                      borderColor : "#FF6B81",
                      borderRadius : 10,
                      flexDirection:'column',
                      display:'flex',
                      alignItems:'center'
                      }}>
                        <Text
                          style={{
                            fontFamily : 'nunito',
                            fontSize : 15,
                            marginTop : 2,
                          }}
                        >age</Text>
                        <Text
                          style={{
                            fontFamily : 'nunito',
                            marginTop : 5,
                            fontSize : 15
                          }}
                        >{pet.age}</Text>
                        </View>
                    <View style={{
                      fontSize:30,
                      borderWidth : 3,
                      width : 60,
                      height : 60,
                      borderColor : "#FF6B81",
                      borderRadius : 10

                      }}>
                         <Text style={
                            (pet.gender == 'male') ? {
                              fontSize:40,
                              color:'#FDCB6E',
                              alignSelf:'center'} : {fontSize:40,color:'#FF6B81',alignSelf:'center'}
                          }> {pet.gender == 'male'? '♂️' : '♀️'} </Text>
                        </View>
                    
                  
                  
                  </View>  

                 
                </View>
              </View>

            </View>
          )
        })}
        {/* </View> */}
        
      </ScrollView>
      <TabBar
        navigation={navigation}
      />
    </View>
  )
}