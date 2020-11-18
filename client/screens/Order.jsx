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
    setLocalOrders(orders);
  }, [orders])

  const sortCategory = (type) => {
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
          {width:125,borderRadius:25,justifyContent:'center',borderColor:'green',borderWidth:2,marginHorizontal:3}:
          {width:125,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:2,marginHorizontal:3}
        }
        >
        <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', margin: 5,alignSelf:'center' }}>{types[i]}</Text>
        </TouchableOpacity>
      )
    }
    return categories;
  }
  
  const closeModal = () => {
    setModalVisible(!isModalVisible);
  }

  const handleSubmit = () => {
    axios({
      url: "http://192.168.8.102:3000/orders/" + id,
      method: "PUT",
      headers:{access_token},
      data: {review}
    })
    .then(({data}) => {
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
    let count = 0
    if(localOrders.length > 1) {
      localOrders.map(el => {
        if(el.status === true) {
          count++
        }
      })
    }
    return `${count}`
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
          {/* <Button 
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
              </Button> */}
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
      backgroundColor:"#C8D1DA",
      flex:1,
    }}>

      <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor: 'white', height: '40%'}}>
        <Text style={{fontSize: 20,marginLeft:20, marginTop: 20, marginBottom: 20}}>Give them a review</Text>
        <TextInput
        style={{borderWidth: 2,height:100, marginLeft:15, marginRight:15, borderRadius: 20, marginBottom: 20,paddingLeft:10,paddingTop:0,marginTop:0}}
        placeholder="Write here"
        onChangeText={(text) => setReview(text)}
        />
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity
          style={{backgroundColor:'green',
          borderColor : "#6661DB",
          marginLeft: 20,
          width:100,
          height:40,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:30,
          }}
          onPress={handleSubmit}
          >
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{backgroundColor:'red',
          borderColor : "#6661DB",
          marginLeft: 20,
          marginRight: 20,
          width:100,
          height:40,
          borderRadius:30,
          justifyContent:'center',
          alignItems:'center'
          }}
          onPress={closeModal}
          > 
            <Text style={{color: 'white'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
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
        
            
         <View style={{
             flexDirection:"row",
             marginTop:10,
             width:"100%"
         }}>
           
             <View style={{width:"100%",alignItems:'center'}}>
                  <Text style={{
                    fontSize: 25,
                    marginTop : -50,
                    color:"#0F2A3C",
                    fontWeight:"normal",
                    fontFamily : 'nunito'
                  }}>Order List ({countOrders()}) </Text>
             </View>
        </View>
     </View>

         <View style={{
             flexDirection:"row",
             paddingHorizontal:20,
             width:"100%",
             alignItems:"center",
             marginBottom : 10,
             marginTop : 20,
         }}>
             {/* <View style={{width:"50%"}}>
                  <Text style={{
                      fontWeight:"bold",
                      fontSize:15,
                      color:"#6B6C6E",
                      marginLeft : 20,
                  }}>{countOrders()}</Text>

             </View> */}
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
            borderRadius : 20,
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
                opacity : 0.2,
              }]}
              />
            </View>
            <View
            style={{display:'flex',alignItems:'center'}}
            >
              {localOrders.length > 0 &&
            localOrders
            .filter(el => el.status === true)        
            .map(el => {
              return(
                <View 
                  key={el._id} 
                  style={{
                    display:'flex',
                      flexDirection:'row',
                      paddingBottom: 4,
                      width:375,
                      height:150,
                      marginVertical: 5,
                      borderWidth : 0.5,
                      borderRadius : 10,
                      position:'relative',
                      backgroundColor:'#a6a6a4'
                    }}
                >
                  <View style={{position:'absolute',bottom:-30,left:130,marginTop:25,zIndex:1}}>
                    <TouchableOpacity
                    style={{
                      width:150,
                      height:70,
                    }}
                    onPress={() => handlePress(el._id)}
                    >
                    <Text 
                    style={{
                      color: '#edc988',
                    fontWeight:'bold'}}
                    > 
                      {`Take back ${el.petName}`} </Text>
                  </TouchableOpacity>
                  </View>
                  
                <Text style={{
                    color: '#00587a',
                    fontWeight:'bold',
                    position:'absolute',
                    right:10,
                    top:15}}
                    > 
                    {el.dateCreated}
                    
                </Text> 
                      
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
                    height: 120, 
                    borderColor: 'white',
                    marginRight : 10 ,
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
                    fontFamily:"nunito",
                    marginBottom : 2,
                    fontWeight:'bold'
                  }}
                  >{el.keeperName} </Text> 
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
                    borderBottomWidth : 3,
                    borderColor : "#6B6C6E" ,
                    }}>Duration : {el.quantity}
                </Text>
                <Text 
                  style={{
                    color:'#102B3E',
                    fontSize:12,
                    fontFamily:"nunito",
                    borderBottomWidth : 3,
                    borderColor : "#6B6C6E" ,
                    }}>Package Price : {(el.price/el.quantity).toLocaleString().replace(',','.')} 
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
                    fontSize:12,
                    fontFamily:"nunito",
                    letterSpacing : 1,
                    paddingBottom : 20
                  }}>Bill : Rp{(el.price).toLocaleString().replace(',','.')}</Text>
                </View>               
              </View>
                
              </View>
              )
            })
          }
            </View>
          
        </View> 
      </ScrollView>    
      
      <TabBar 
      navigation={navigation} 
      style={{
      }} />               
  </View>     
  )
}


