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
    setLocalHistory(history)
  }, [history])


  const sortCategory = (type) => {
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
      1:'Time Finished'
    }
    let categories = [];
    for(let i = 0 ; i<2 ; i++) {
      categories.push(
        <TouchableOpacity
        key={i}
        onPress={() => sortCategory(types[i])}
        style={(types[i].toLowerCase() == categoryNow) ? 
          {width:125,borderRadius:25,justifyContent:'center',borderColor:'#FF6B81',borderWidth:2,marginHorizontal:3}:
          {width:125,borderRadius:25,justifyContent:'center',borderColor:'grey',borderWidth:2,marginHorizontal:3}
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

  if ( history.length == 0 ){
    return (
      <View style={{
        flex:1,
      }}>
       <View style={{
           backgroundColor:"#F4E3E3",
           height:"13%",
           borderBottomLeftRadius:20,
           borderBottomRightRadius:20,
           paddingHorizontal: 25,
          }}>          
           <View style={{
               flexDirection:"row",
               marginTop:10,
               width:"100%"
           }}>
               <View style={{width:"100%"}}>
                    <Text style={{
                      fontSize: 25,
                      color:"#0F2A3C",
                      marginTop:40,
                      fontFamily : 'nunito',
                    }}> History List ({countHistory()}) </Text>
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
                height : "88%",
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
                >You Haven't ordered in Pawfect !</Text>
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
      backgroundColor:"white",
      flex:1,
  }}>
     <View style={{
         backgroundColor:"#F4E3E3",
         height:"13%",
         borderBottomLeftRadius:20,
         borderBottomRightRadius:20,
         paddingHorizontal: 25,
     }}>
         <View style={{
             flexDirection:"row",
             marginTop:10,
             width:"100%"
         }}>
             <View style={{width:"100%"}}>
                  <Text style={{
                    fontSize: 25,
                    marginTop:25,
                    paddingTop:15,
                    color:"#2F3542",
                    fontWeight:"normal",
                    fontFamily : 'nunito'
                  }}>History List ({countHistory()})</Text>
             </View>
        </View>
     </View>
         <View style={{display:'flex',flexDirection:'row',height:30,marginTop:25}}>
            <Text style={{
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
                      borderRadius:10,
                      borderBottomColor:'black',
                      paddingBottom: 4,
                      width:375,
                      height:150,
                      position:'relative',
                      marginVertical:15,
                      backgroundColor:'#F4F4F4',
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
                        height: 120, 
                        borderColor: 'white',
                        marginRight : 20,
                        marginLeft:5,
                        borderRadius:10
                        }}  />
                    </View>
                    <Text style={{
                    color: '#00587a',
                    fontWeight:'bold',
                    position:'absolute',
                    right:10,
                    top:15}}
                    > 
                    {el.dateFinished}
                    
                </Text>
                <Text style={{
                    color: '#00587a',
                    fontWeight:'bold',
                    position:'absolute',
                    right:10,
                    top:35}}
                    > 
                    {el.timeFinished}
                    
                </Text> 
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
                        >{el.keeperName.split(' ')[0]} </Text>
                      
                      <Text 
                      style={{
                        color:'black',
                        fontSize:15,
                        fontFamily:"nunito",
                        marginBottom: 5
                      }}
                        >Pet: {el.petName} </Text>
                    </View>
                    
                    <View 
                    style={{
                      flex:0.5,
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



