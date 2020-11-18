import React, {useState , useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import {fetchOrders} from '../store/actions'
import  TabBar  from './components/TabBottomNavbar'
import Button from 'apsl-react-native-button'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'



export default function History({route,navigation}) {
  const {history, access_token} = useSelector(state => state);
  const [categoryNow,setCategoryNow] = useState('');
  const [localHistory , setLocalHistory] = useState([]);

  useEffect(() => {
    console.log(route,'ini route')
    setLocalHistory(history)
  }, [history])


  const sortCategory = (type) => {
    console.log(type, '<<<<ini type');
    let cloned = [];
    setCategoryNow(type.toLowerCase());    
    localHistory.map(el => {
      cloned.push(el)
    }) 
      cloned.sort((a,b) => a[type.toLowerCase()] < b[type.toLowerCase()])
      // console.log(cloned);

    setLocalHistory(cloned);
  }

  const listCategories = () => {
    let types = {
      0:'Keeper Name',
      1:'Date Created'
    }
    let categories = [];
    for(let i = 0 ; i<2 ; i++) {
      categories.push(
        <TouchableOpacity
        key={i}
        onPress={() => sortCategory(types[i])}
        style={(types[i].toLowerCase() == categoryNow) ? 
          {width:125,borderRadius:25,justifyContent:'center',borderColor:'#FF6B81',borderWidth:2,marginHorizontal:3}:
          {width:125,borderRadius:25,justifyContent:'center',borderColor:'#FF6B81',borderWidth:2,marginHorizontal:3}
        }
        >
        <Text style={{ fontSize: 15, color: '#2F3542', textAlign: 'center', margin: 5,alignSelf:'center' }}>{types[i]}</Text>
        </TouchableOpacity>
      )
    }
    return categories;
  }


  const backToHome = () => {
    navigation.replace('Home')
  }

  const countHistory = () => {
    let num = 0
    if(history) {
      num = history.length
    }
    return num
  }

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
      backgroundColor:"#F4F4F4",
      flex:1,
  }}>
     <View style={{
         backgroundColor:"#F4E3E3",
         height:"14%",
         borderBottomLeftRadius:30,
         borderBottomRightRadius:30,
         paddingHorizontal: 25,
         marginBottom : -24,
     }}>
       <Button 
        style={{
          width : 40,
          height : 40,
          marginTop : 35,
          borderColor : "#FF6B81",
          padding : 2
        }}
          onPress={backToHome}
        >
              <Icon 
                name="arrow-left-circle" 
                color="black" 
                size={30}
                style={{
                position : 'absolute',
                color : "#FF6B81",
              }}
              />
            </Button>
         <View style={{
             flexDirection:"row",
             marginTop:10,
             width:"100%"
         }}>
             <View style={{width:"100%",alignItems:'center'}}>
                  <Text style={{
                    fontSize: 25,
                    marginTop : -55,
                    color:"#2F3542",
                    fontWeight:"normal",
                    fontFamily : 'nunito'
                  }}>History List ({countHistory()})</Text>
             </View>
        </View>
     </View>


     

     <LinearGradient
      colors={["rgba(255,107,129,0.3)", "transparent"]}
      style={{
          left:0,
          right:0,
          height:80,
          marginTop: -10
      }}
      >
         
      </LinearGradient>

      {/* <Text>{JSON.stringify(history)}</Text> */}
         <View style={{display:'flex',flexDirection:'row',height:30}}>
            <Text style={{
              paddingRight:15,
              marginLeft:25,
              elevation : 20,
              fontSize:20,
              fontFamily : 'nunito',
              }} >Sort by :  </Text>
            {listCategories()}
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
          {localHistory &&
            localHistory
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
                      marginTop:10,
                      height:100,
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
                        >{el.keeperName} </Text>
                      
                      <Text 
                      style={{
                        color:'black',
                        fontSize:13,
                        fontFamily:"nunito",
                        marginBottom: 5
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
                        >Billed : Rp. {(el.quantity*el.price).toLocaleString().replace(',','.')},00</Text>
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



