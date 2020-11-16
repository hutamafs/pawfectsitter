import React, {useState , useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import {fetchOrders} from '../store/actions'
import  TabBar  from './components/TabBottomNavbar'
import Button from 'apsl-react-native-button'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'



export default function History({navigation}) {
  const dispatch = useDispatch();
  const {orders, access_token} = useSelector(state => state);
  console.log(access_token, 'ini access token di history')

  useEffect(() => {
    dispatch(fetchOrders(access_token))
  },[])

  return (
    <View style={{
      backgroundColor:"#FFF",
      flex:1,
  }}>
     <View style={{
         backgroundColor:"#3678E4",
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
                      fontSize:15,
                      marginTop : 60,
                      marginBottom: 45,
                      color:"#EEF4F4",
                      fontWeight:"normal",
                      fontFamily : 'nunito'
                  }}>Hey , This is Your History !</Text>
             </View>
        </View>
        
        
    
     </View>



     

     <LinearGradient
      colors={["rgba(40,120,228,0.9)", "transparent"]}
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
               History
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
            marginHorizontal:40,
            }}>
          {orders &&
            orders
              .filter(el => el.status === false)          
              .map(el => {
              return(
                  <View 
                    key={el._id} 
                    style={{
                      display:'flex',
                      flexDirection:'row',
                      flex:0.3,
                      borderRadius:10,
                      borderBottomColor:'black',
                      paddingBottom: 3,
                      width:350,
                      height:125,
                      marginVertical:20,
                      borderBottomWidth:0.5
                      }}>
                    <View style={{
                      paddingHorizontal:10,
                      display:'flex',
                      justifyContent:'center'
                      }}>
                      <Image 
                      source={{uri:el.keeperImage}} 
                      style={{ 
                        width: 100, 
                        height: 100, 
                        borderColor: 'white',
                        borderRadius:20 ,
                        marginRight : 20
                        }}  />
                    </View>
                    
                    <View 
                    style={{
                      display:'flex',
                      flexDirection:'column',
                      marginTop:10
                      }}>
                    <View 
                    style={{
                      display:'flex',
                      flexDirection:'column'}}>
                      
                      <Text 
                      style={{
                        color:'black',
                        fontSize:25,
                        fontFamily:"nunito",

                      
                      }}
                        >Keeper :  {el.keeperName} </Text>
                      
                      <Text 
                      style={{
                        color:'black',
                        fontSize:13,
                        fontFamily:"nunito",
                        marginBottom: 40
                      }}
                        >In Charge of : {el.petName} </Text>
                    </View>
                    
                    <View 
                    style={{
                      flex:0.3,
                      display:'flex',
                      flexDirection:'column'}}> 
                      
                      <Text 
                      style={{
                        color: 'black',
                        fontSize:15,
                        fontFamily:"nunito",    
                      }}
                        >Billed : Rp. {el.quantity*el.price},00</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
        </ScrollView>    
       
      <TabBar navigation={navigation} />               
  </View>
  );
}



