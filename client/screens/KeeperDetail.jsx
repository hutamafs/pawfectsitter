import React, { useEffect } from 'react';
import {fetchKeeper} from '../store/actions/index';
import { useDispatch } from 'react-redux';
import { View , Text } from 'react-native'

const KeeperDetail = (props) => {
    const dispatch = useDispatch();
    const {id} = props.route.params;

    useEffect(() => {
        dispatch(fetchKeeper(id))
    },[])

    return (
        <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}> {JSON.stringify(id)}  </Text>
        </View>
    )
}

export default KeeperDetail;