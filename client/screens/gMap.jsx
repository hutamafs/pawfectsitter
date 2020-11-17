import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, styleSheet } from 'react-native'
import Map from './components/Map'

const GMap = ({navigation}) => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Map/>
        </SafeAreaView>
    )
}

export default GMap