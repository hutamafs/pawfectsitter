import React, {useState , useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import {fetchOrders} from '../store/actions'

export default function History() {
  const dispatch = useDispatch();
  const {orders} = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchOrders())
  },[])

  return (
    <View style={styles.container}>
      <View style={{display:'flex',flexDirection:'col',flex:0.8}}>
        {orders &&
          orders
          .filter(el => el.status === false)          
          .map(el => {
            return(
              <View key={el._id} style={{display:'flex',flexDirection:'row',flex:0.3,borderRadius:10,borderBottomColor:'black',width:350,height:125,marginVertical:10,borderBottomWidth:0.5}}>
              <View style={{paddingHorizontal:10,display:'flex',justifyContent:'center'}}>
                <Image source={{uri:el.petImage}} style={{ width: 120, height: 120, borderColor: 'white',borderRadius:35 }}  />
              </View>
              <View style={{display:'flex',flexDirection:'col',marginTop:10}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{color:'black',fontSize:25}}> {el.petName} </Text>
                </View>
                <View style={{flex:0.3,display:'flex',flexDirection:'col'}}> 
                  <Text style={{color: 'black',fontSize:15}}> Billed : Rp{el.quantity*el.price}</Text>
                </View>
              </View>
            </View>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});