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
      1:'Date Finished'
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
                    {el.dateCreated}
                    
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
                        >{el.keeperName} </Text>
                      
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
                        >Billed : Rp. {(el.quantity*el.price).toLocaleString().replaceAll(',','.')},00</Text>
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



