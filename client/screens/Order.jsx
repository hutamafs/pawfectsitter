import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import {fetchOrders} from '../store/actions'

export default function Order() {

  const dispatch = useDispatch();
  const {orders} = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchOrders())
  },[])

  const handlePress = () => {
    console.log('clicked')
  }

  return (
    <View style={styles.container}>
        {orders &&
          orders         
          .map(el => {
            return(
              <View key={el._id} style={{display:'flex',flexDirection:'row',flex:0.3,borderRadius:10,borderBottomColor:'black',width:350,height:125,marginVertical:10,borderBottomWidth:0.5}}>
              <View style={{paddingHorizontal:10,display:'flex',justifyContent:'center'}}>
                <Image source={{uri:el.keeperImage}} style={{ width: 120, height: 120, borderColor: 'white',borderRadius:35 }}  />
              </View>
              <View style={{display:'flex',flexDirection:'col',marginTop:10}}>
                <View style={{display:'flex',flexDirection:'col'}}>
                  <Text style={{color:'black',fontSize:25}}> {el.keeperName} </Text>
                  <Text style={{color:'black',fontSize:15}}> In Charge of: {el.keeperName} </Text>
                </View>
                <View style={{flex:0.3,display:'flex',flexDirection:'col'}}> 
                  <Text style={{color: 'black',fontSize:15}}> Billing Potential : Rp{el.quantity*el.price}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{backgroundColor:'white',width:75,height:20,position:'absolute',right:15,bottom:15}}
                onPress={handlePress}
                >
                  <Text style={{color: 'red',textAlign:'center'}}> {`Take back ${el.petName}`} </Text>
                </TouchableOpacity>
            </View>
            )
          })
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});