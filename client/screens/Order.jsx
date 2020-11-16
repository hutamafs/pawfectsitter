import React , { useEffect } from 'react';
import { Image , StyleSheet, Text, View } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import {fetchOrders} from '../store/actions'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import  TabBar  from './components/TabBottomNavbar'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



export default function Order({navigation}) {

  const dispatch = useDispatch();
  const {orders} = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchOrders())
  },[])

  const handlePress = () => {
    console.log('clicked')
  }

  if ( orders == 0 ){
    return (
      <View style={{
        backgroundColor:"#FFF",
        flex:1,
      }}>
       <View style={{
           backgroundColor:"#6131C1",
           height:"19%",
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
                        fontSize:19,
                        marginTop : 50,
                        marginBottom: 45,
                        color:"#FFFFFA",
                        fontWeight:"normal",
                        fontFamily : 'nunito'
                    }}>Hey Guys, This is Your Order !</Text>
               </View>
          </View>
          
          
      
       </View>
  
  
  
       
  
       <LinearGradient
        colors={["rgba(212,209,254,0.3)", "transparent"]}
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
               alignItems:"center",
               borderWidth : 0.2,
               borderColor : "#7C7E80",
               marginTop : 14
           }}>
               <Text
                    style={{
                        fontWeight:"bold",
                        fontSize:20,
                        width:260,
                        color : "#7C7E80",
                        height : 40,
                        paddingTop : 8
                    }}
               >
                 Order Page
               </Text>
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
                        fontSize:15,
                        color:"#6B6C6E",
                        marginLeft : 20,
                    }}>{orders.length} Order</Text>
  
               </View>
               <View style={{width:"50%", alignItems:"flex-end"}}>
               </View>
           </View>
              <View
            style={{
              backgroundColor:"#FFF",
              paddingVertical:8,
              paddingHorizontal:20,
              marginHorizontal:20,
              marginTop:25,
              flexDirection:"column",
              marginTop : 14
            }}
          >
           <Text
            style={{
              fontWeight:"bold",
              fontSize:15,
              color:"#6B6C6E",
              marginLeft : 20,
          }}
           >
             Wow , you don't have a Order
           </Text>
           <Text
            style={{
              fontWeight:"bold",
              fontSize:15,
              color:"#6B6C6E",
              marginLeft : 20,
          }}
           >
            Please , order me !
           </Text>

         </View>
         
        <TabBar navigation={navigation} />               
    </View>
    ) 
  }

  

  return (
    
    <View style={{
      backgroundColor:"#FFF",
      flex:1,
    }}>
     <View style={{
         backgroundColor:"#6131C1",
         height:"19%",
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
                    fontSize:19,
                    marginTop : 50,
                    marginBottom: 45,
                    color:"#FFFFFA",
                    fontWeight:"normal",
                    fontFamily : 'nunito'
                  }}>Hey Guys, This is Your Order !</Text>
             </View>
        </View>
        
        
    
     </View>


          <View>
                <Icon 
                name="paw" 
                color="black" 
                size={70}
                style={[{  
                  transform: [{ rotate: "25deg" }],
                  marginLeft : 410,
                  marginTop : 70,
                  position : 'absolute',
                  color : "#6B6C6E"
              }]}
            />
          </View>
     

     <LinearGradient
      colors={["rgba(212,209,254,0.3)", "transparent"]}
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
             marginHorizontal:30,
             borderRadius:20,
             marginTop:25,
             flexDirection:"row",
             alignItems:"center",
             borderWidth : 0.2,
             borderColor : "#7C7E80",
             marginTop : 14
            }}>
            
             <Text
                  style={{
                    fontWeight:"bold",
                    fontSize:20,
                    width:260,
                    color : "#7C7E80",
                    height : 40,
                    paddingTop : 8
                  }}
             >
               Order Page
             </Text>
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
                      fontSize:15,
                      color:"#6B6C6E",
                      marginLeft : 20,
                  }}>{orders.length} Order</Text>

             </View>
             <View style={{width:"50%", alignItems:"flex-end"}}>
             </View>
        
            
         </View>
        <ScrollView>
          
          <View 
            style={{
            display:'flex',
            flexDirection:'column',
            flex:0.8,
            justifyContent : 'center',
            alignItems : 'center',
            marginHorizontal:30,
            borderWidth : 2,
            borderRadius : 20,
            borderColor : "#6B6C6E"
            }}>
          {orders &&
            orders         
            .map(el => {
              return(
                <View 
                  key={el._id} 
                  style={{
                    display:'flex',
                      flexDirection:'row',
                      flex:0.3,
                      paddingBottom: 3,
                      width:350,
                      height:125,
                      marginVertical: 5,
                    }}
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
                    marginRight : 25 ,
                    marginLeft : -20
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
                    color:'black',
                    fontSize:25,
                    fontFamily:"nunito",}}
                  > {el.keeperName} </Text> 
                <Text 
                  style={{
                    color:'black',
                    fontSize:13,
                    fontFamily:"nunito",
                    marginBottom: 13
                    }}> In Charge of: {el.petName} 
                </Text>

                <Text 
                  style={{
                    color:'black',
                    fontSize:13,
                    fontFamily:"nunito",
                    marginBottom: 5,
                    marginLeft : 90,
                    borderBottomWidth : 2,
                    paddingBottom : 6
                    }}> Quantity : {el.quantity} X {el.price}  =
                </Text>
                </View>
                <View 
                  style={{
                    flex:0.3,
                    display:'flex',
                    flexDirection:'column'}}> 
                <Text 
                  style={{
                    color: 'black',
                    fontSize:17,
                    fontFamily:"nunito",
                    marginLeft : 90,
                    letterSpacing : 1
                  }}> Total : Rp{el.quantity*el.price}</Text>
                </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor:'white',
                    width:75,
                    height:20,
                    position:'absolute',
                    right:15,
                    bottom:15}}
                  onPress={handlePress}
                  >
                  <Text 
                  style={{
                    color: 'red',
                    textAlign:'center'}}> {`Take back ${el.petName}`} </Text>
                </TouchableOpacity>
              </View>
              )
            })
          }
        </View> 
      </ScrollView>    
       
      <TabBar 
      navigation={navigation} 
      style={{
        marginBottom : 30
      }} />               
  </View>
        
  )
      
}


