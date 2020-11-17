import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, styleSheet } from 'react-native'
import Map from './components/Map'

const GMap = ({navigation, route}) => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Map
            props={route.params}
            />
        </SafeAreaView>
    )
}

export default GMap