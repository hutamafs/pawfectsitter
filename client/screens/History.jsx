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
  const {history, access_token} = useSelector(state => state);
  console.log(access_token, 'ini access token di history')

  
  const backToHome = () => {
    navigation.replace('Home')
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
                    marginTop : -55,
                    color:"#0F2A3C",
                    marginLeft : 165,
                    fontWeight:"normal",
                    fontFamily : 'nunito'
                  }}>History List</Text>
             </View>
        </View>
     </View>


     

     <LinearGradient
      colors={["rgba(16,43,62,0.1)", "transparent"]}
      style={{
          left:0,
          right:0,
          height:60,
          marginTop: 3
      }}
      >
         
      </LinearGradient>

      {/* <Text>{JSON.stringify(orders)}</Text> */}

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
                  }}>{history.length} Order</Text>

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
          {history &&
            history
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



