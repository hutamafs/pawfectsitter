import React , { useEffect, useState } from 'react';
import { Image , StyleSheet, Text, View , Alert} from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import {fetchOrders, addHistory} from '../store/actions'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import  TabBar  from './components/TabBottomNavbar'
import Button from 'apsl-react-native-button'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from 'axios'
import Modal from 'react-native-modal';



export default function Order({navigation}) {

  const dispatch = useDispatch();
  const {orders, access_token} = useSelector(state => state);
  const [isModalVisible, setModalVisible] = useState(false);
  const [review, setReview] = useState('')
  const [id, setId] = useState('')
  const [categoryNow,setCategoryNow] = useState('');
  const [localOrders , setLocalOrders] = useState([]);


  useEffect(() => {
    dispatch(fetchOrders(access_token))
  },[])

  useEffect(() => {
    setLocalOrders(orders)
  }, [orders])

  const sortCategory = (type) => {
    console.log(type, '<<<<ini type');
    let cloned = [];
    setCategoryNow(type.toLowerCase());    
    localOrders.map(el => {
      cloned.push(el)
    }) 
      cloned.sort((a,b) => a[type.toLowerCase()] < b[type.toLowerCase()])
      // console.log(cloned);

    setLocalOrders(cloned);
  }

  const listCategories = () => {
    let types = {
      0:'KeeperName',
      1:'DateCreated'
    }
    let categories = [];
    for(let i = 0 ; i<2 ; i++) {
      categories.push(
        <TouchableOpacity
        key={i}
        onPress={() => sortCategory(types[i])}
        style={(types[i].toLowerCase() == categoryNow) ? 
          {width:100,borderRadius:25,justifyContent:'center',borderColor:'green',borderWidth:2,marginHorizontal:3}:
          {width:100,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:2,marginHorizontal:3}
        }
        >
        <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', margin: 5,alignSelf:'center' }}>{types[i]}</Text>
        </TouchableOpacity>
      )
    }
    return categories;
  }

  const handleSubmit = () => {
    axios({
      url: "http://192.168.1.4:3000/orders/" + id,
      method: "PUT",
      headers:{access_token},
      data: {review}
    })
    .then(({data}) => {
      console.log(data, '<<<<<<<<<<<sukses nehhhhhh');
      dispatch(addHistory(data))
      dispatch(fetchOrders(access_token))
      setModalVisible(!isModalVisible)
    })
    .catch(err => console.log(err))
  }

  const handlePress = (id) => {
    setModalVisible(!isModalVisible);
    setId(id)
  }

  const countOrders = () => {
    let newCount = 0;
    orders.map(el => {
      if(el.status === true) {
        newCount++
      }
    })
    return newCount;
  }

  const backToHome = () => {
    navigation.replace('Home')
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
                    }}>Order List</Text>
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
                    }}>{orders.length} Order</Text>
  
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
      backgroundColor:"#C8D1DA",
      flex:1,
    }}>

      <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor: 'white', height: '80%'}}>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20, marginBottom: 20}}>Let them hear your opinion</Text>
        <TextInput
        style={{borderWidth: 2, height:'50%', marginLeft:15, padding:10, marginRight:15, borderRadius: 20, marginBottom: 20}}
        placeholder="Write here"
        onChangeText={(text) => setReview(text)}
        />
        <Button
        style={{backgroundColor:'#6661DB',
        borderColor : "#6661DB",
        borderBottomRightRadius : 20,
        borderTopLeftRadius : 20,
        marginLeft: 20,
        marginRight: 20
        }}
        onPress={handleSubmit}
        >
        <Text style={{color: 'white'}}>Submit</Text>
        </Button>
        </View>
      </Modal>
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
                  }}>Order List</Text>
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
             <View style={{width:"50%"}}>
                  <Text style={{
                      fontWeight:"bold",
                      fontSize:15,
                      color:"#6B6C6E",
                      marginLeft : 20,
                  }}>{countOrders()} Order</Text>

             </View>
             <View style={{width:"80%", alignItems:"flex-end"}}>
             </View>
        
         </View>
         <View style={{display:'flex',flexDirection:'row',height:30,marginTop:10,marginBottom:5}}>
            <Text style={{paddingRight:15,marginLeft:15,fontSize:20}} >Sort by </Text>
            {listCategories()}
        </View>
               
        <ScrollView>
          
          <View 
            style={{
            display:'flex',
            flexDirection:'column',
            justifyContent : 'center',
            alignItems : 'center',
            marginHorizontal:40,
            borderRadius : 20,
            marginRight : -20
            }}>
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
          {localOrders &&
            localOrders
            .filter(el => el.status === true)        
            .map(el => {
              return(
                <View 
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
                <Button
                  style={{
                    backgroundColor:'#6661DB',
                    borderColor : "#6661DB",
                    borderBottomRightRadius : 20,
                    borderTopLeftRadius : 20,
                    padding :10 ,
                    width:100,
                    height:60,
                    right: -38,
                    top : 63
                  }}
                  onPress={() => handlePress(el._id)}
                  >
                  <Text 
                  style={{
                    color: '#0F2A3C',
                    textAlign:'center'}}
                    > 
                    {`Take back ${el.petName}`} </Text>
                </Button>
              </View>
              )
            })
          }
        </View> 
      </ScrollView>    
      
      <TabBar 
      navigation={navigation} 
      style={{
      }} />               
  </View>
        
  )
      
}


