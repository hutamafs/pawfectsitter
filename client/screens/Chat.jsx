import React, { useEffect, useState, useCallback } from 'react';
import { Image , StyleSheet, Text, View , Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';
import TabBar from './components/TabBottomNavbar'
import firebaseSDK from './config/firebaseSDK';
import {setMessages} from '../store/actions'
import Button from 'apsl-react-native-button'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import {fetchOrders} from '../store/actions'






export default function Chat({navigation, route}) {
  const {orders, access_token} = useSelector(state => state)
  const dispatch = useDispatch()
  // const [threads, setThreads] = useState([])
  // const [loading, setLoading] = useState(true)

  const toChatRoom = (order) => {
    navigation.navigate('ChatRoom', {
      order: {
        keeperId: order.keeperId,
        keeperImage: order.keeperImage,
        keeperName: order.keeperName,
        userId: order.user_id
      }
    })
  }
  const backToHome = () => {
    navigation.replace('Home')
  }
  useEffect(() => {
    dispatch(fetchOrders(access_token))

    // const unsubscribe = firestore()
    //     .collection('MESSAGE_THREADS')
    //     .orderBy('latestMessage.createdAt', 'desc')
    //     .onSnapshot(querySnapshot => {
    //       const threads = querySnapshot.docs.map(documentSnapshot => {
    //         return {
    //           _id: documentSnapshot.id,
    //           name: '',
    //           latestMessage: { text: '' },
    //           ...documentSnapshot.data()
    //         }
    //       })
  
    //       setThreads(threads)
    //       console.log(threads)
    //       if (loading) {
    //         setLoading(false)
    //       }
    //     })
  
    //   return () => unsubscribe()
  },[])
  
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
                  size={30}
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
               <View style={{width:"100%"}}>
                    <Text style={{
                      fontSize: 25,
                      marginTop : -50,
                      color:"#0F2A3C",
                      marginLeft : 160,
                      fontWeight:"normal",
                      fontFamily : 'nunito'
                    }}>Chat</Text>
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
                >No Keepers Availale sorry o3o </Text>
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
                size={30}
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
           
             <View style={{width:"100%"}}>
                  <Text style={{
                    fontSize: 25,
                    marginTop : -50,
                    color:"#0F2A3C",
                    marginLeft : 175,
                    fontWeight:"normal",
                    fontFamily : 'nunito'
                  }}>Chat </Text>
             </View>
        </View>
     </View>
         <View style={{
             backgroundColor:"#FFF",
             paddingVertical: 3,
             paddingHorizontal:20,
             marginHorizontal:30,
             borderRadius:10,
             flexDirection:"row",
             alignItems:"center",
             borderColor : "#7C7E80",
             marginTop : 10
            }}>
         </View>

         <View style={{
             flexDirection:"row",
             paddingHorizontal:20,
             width:"100%",
             alignItems:"center",
             marginBottom : 10,
             marginTop : 20,
         }}>
             
             <ScrollView>
          <View 
            style={{
            display:'flex',
            flexDirection:'column',
            justifyContent : 'center',
            alignItems : 'center',
            marginHorizontal:40,
            borderRadius : 20,
            marginRight : -20,
            }}
            >
              <View >
              <Icon 
                name="paw" 
                color="black" 
                size={80}
                style={[{  
                transform: [{ rotate: "25deg" }],
                position : 'absolute',
                color : "#102B3E",
                marginTop : 25 ,
                marginLeft : -120,
                opacity : 0.2,
              }]}
              />
            </View>
          {orders &&
            orders
            .filter(el => el.status === true)        
            .map(el => {
              return(
                <TouchableOpacity
                  key={el._id} 
                  style={{
                    display:'flex',
                      flexDirection:'row',
                      flex:0.3,
                      paddingBottom: 4,
                      width:380,
                      height:125,
                      marginVertical: 5,
                      borderWidth : 3,
                      borderRadius : 20,
                    }}
                    onPress={() => toChatRoom(el)}
                  >
    
                      
                <View 
                  style={{
                    paddingHorizontal:10,
                    display:'flex',
                    justifyContent:'center'
                    }}>
                
                <Image 
                  source={{uri:el.keeperImage}} 
                  style={{ 
                    width: 100, 
                    height: 90, 
                    borderColor: 'white',
                    borderRadius:20 ,
                    marginRight : 10 ,
                    marginLeft : -60
                    }}  />
                </View>
                <View 
                  style={{
                    display:'flex',
                    flexDirection:'column',
                    marginTop:10}}>
                <View 
                  style={{
                    display:'flex',
                    flexDirection:'column'}}>
                <Text 
                  style={{
                    color:'#102B3E',
                    fontSize:25,
                    fontFamily:"nunito",
                    marginBottom : 10
                  }}
                  >Keeper : {el.keeperName} </Text> 
                {/* <Text 
                  style={{
                    color:'#102B3E',
                    fontSize:13,
                    fontFamily:"nunito",
                    marginBottom: 10
                    }}> In Charge of: {el.petName} 
                </Text> */}

                <Text 
                  style={{
                    color:'#102B3E',
                    fontSize:13,
                    fontFamily:"nunito",
                    marginBottom: 5,
                    borderBottomWidth : 3,
                    borderColor : "#6B6C6E" ,
                    paddingBottom : 6
                    }}>Quantity : {el.quantity} x {el.price}  =
                </Text>
                </View>
                <View 
                  style={{
                    flex:0.3,
                    display:'flex',
                    flexDirection:'column'
                    }}> 
                <Text 
                  style={{
                    color: '#102B3E',
                    fontSize:15,
                    fontFamily:"nunito",
                    letterSpacing : 1,
                    paddingBottom : 20
                  }}>Bill : Rp{el.quantity*el.price}</Text>
                </View>
                </View>
                </TouchableOpacity>
              )
            })
          }
        </View> 
      </ScrollView>  

         </View>
         <TabBar
      navigation={navigation}
      // userData={userData}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});