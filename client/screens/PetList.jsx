import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/logoDog.png'
import { ScrollView ,TextInput ,TouchableOpacity} from 'react-native-gesture-handler';
import TabBar from './components/TabBottomNavbar'
import {fetchPets} from '../store/actions';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient'
import Button from 'apsl-react-native-button'


export default function PetList({navigation}) {
  const dispatch = useDispatch()
  const {access_token, pets} = useSelector(state => state)
  useEffect(() => {
      dispatch(fetchPets(access_token))
  },[])
  
  
  
  
  
  return (
    <View style={{
      backgroundColor:"#FFF",
      flex:1
  }}>
     <View style={{
         backgroundColor:"#6661DB",
         height:"13%",
         borderBottomLeftRadius:20,
         borderBottomRightRadius:20,
         paddingHorizontal:20
     }}>
         
         <View style={{
             flexDirection:"row",
             alignItems:"center",
             marginTop:25,
             width:"100%"
         }}>
             <View style={{width:"50%"}}>
                  <Text style={{
                      fontSize:28,
                      color:"#FFF",
                      fontWeight:"bold",
                      marginTop : 20
                  }}>Pet List</Text>
             </View>
             <View style={{width:"50%",alignItems:"flex-end"}}>
                  
             </View>
         </View>
     </View>
     <LinearGradient
      colors={["rgba(16,43,62,0.1)", "transparent"]}
      style={{
          left:0,
          right:0,
          height:90,
          marginTop: -25
      }}
     >
        
      </LinearGradient>


         <View style={{
             flexDirection:"row",
             paddingHorizontal:20,
             width:"100%",
             alignItems:"center"
         }}>
             
             
         </View>

      
  
          <ScrollView 
              alwaysBounceVertical
              showsHorizontalScrollIndicator={false}
              style={{
                height:300
              }}
          >

            

            {pets.map(pet => {
              return(
                <View 
                style={{
                  height:400,
                  elevation:33,
                  backgroundColor:"#FFF",
                  marginLeft:20,
                  marginTop:30,
                  borderRadius:15,
                  marginBottom:10,
                  width: 400,
                }}
                >
                  
                  <View style={{
                    flexDirection:"column",
                      paddingTop:30,
                      paddingHorizontal:10
                    }}>
                      <Image
                          key={pet._id}
                          source={{uri:pet.image}}
                          style={{
                            width : 350,
                            height : 350
                          }}
                          />
                      <View
                        style={{
                          flexDirection : "row"
                        }}
                      >

                      <Text style={{
                        fontWeight:"bold"
                      }}>Name : {pet.name}</Text>
                      <Text style={{
                        fontWeight:"bold",
                        color:"black",
                        marginLeft : 20
                      }}>Age : {pet.age}</Text>
                      </View>
                  </View>
                  
                </View>
              
              )
            })}
          </ScrollView>            
          <TabBar 
            navigation={navigation} 
            /> 
  </View>
  )
}






//punya development 
{/* {pets.length == 0 ?            
                </View> :
        pets.map(pet => {
            return (
                <View key={pet._id} style={{display:'flex',flexDirection:'column',flex:0.4,width:200,height:250,marginVertical:10,justifyContent:'center',alignContent:'center',borderWidth:0,borderRadius:5, backgroundColor: '#F7E7D3',shadowOpacity: 0.37,
                shadowRadius: 7.49,shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },}}>
                 <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Image
                    source={{uri:pet.image}}
                    style={{ width: 150, height: 150, borderColor: 'white',borderRadius:25 }}
                    />
                 </View>
                 <View style={{display:'flex',flexDirection:'row',marginTop:10,justifyContent:'center'}}>
                  <Text style={{fontSize:25,fontWeight:'bold',marginHorizontal:6, color: '#BA826A'}} >{pet.name}</Text>
                  <Icon 
                  name={
                    (pet.gender == 'male') ?
                    "mars":
                    "venus"
                  }
                  color={
                    (pet.gender == 'male') ?
                    "white":
                    "red"
                  }                  
                  size={20} 
                  style={{marginTop:5}}
                  />
                 </View>
                 <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                 <Text style={{fontSize:15}}>{pet.age} years old </Text>
                 </View>
                </View>
            )
        })
      } */}






      // const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     justifyContent: 'center',
//     alignItems: 'center',
//     maxHeight: '70%'
//   },
//   cardContainer: {
//     display: "flex",
//     backgroundColor: 'gray',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 5
//   }
// });



// container punya development
{/* <View>
    <View style={{display:'flex',flexDirection:'row',height:90,borderBottomWidth:1, backgroundColor: '#F7E7D3', borderColor: '#BA826A' }}>
        <Image
          source={logo} 
          style={{ width: 90, height: 90,marginLeft:3, marginTop: 10 }}
        />
      <Text style={{fontSize:30,marginTop:30, color: '#BA826A'}}>My Pets</Text>
    </View>
    <View style={styles.container}>
      <ScrollView >
        <View style={{marginTop:100}}>
        <Text>{JSON.stringify(pets)}</Text>

        
      </View>
      
       </ScrollView>
    </View>
    <TabBar
        navigation={navigation}
    />
    </View> */}