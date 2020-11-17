import React, {useState, useEffect} from 'react'
import { Dimensions, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const height = Dimensions.get('window').height

const Map = (props) => {
    // const [currentPosition, setCurrentPosition] = useState(initialState)
    const initialState = {
        latitude: props.props.latitude,
        longitude: props.props.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
    
    // function getMyLocation() {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         const { longitude, latitude } = position.coords
    //         setCurrentPosition({
    //             ...currentPosition,
    //             latitude,
    //             longitude
    //         })
    //     }, 
    //         error => alert(error.message),
    //         { timeout: 20000, maximumAge: 1000}
    //     )
    // }

    // function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    //     var R = 6371; // Radius of the earth in km
    //     var dLat = deg2rad(lat2-lat1);  // deg2rad below
    //     var dLon = deg2rad(lon2-lon1); 
    //     var a = 
    //       Math.sin(dLat/2) * Math.sin(dLat/2) +
    //       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    //       Math.sin(dLon/2) * Math.sin(dLon/2)
    //       ; 
    //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    //     var d = R * c; // Distance in km
    //     return d;
    // }

    // function deg2rad(deg) {
    //     return deg * (Math.PI/180)
    // }
    
    // const [jarak, setJarak] = useState('')
    // useEffect(() => {
    //     // getMyLocation()
    //     setJarak(getDistanceFromLatLonInKm(currentPosition.latitude, currentPosition.longitude, -6.2283784, 106.5666554))
    // }, [])

    // console.log(jarak, 'oooy')   

    return initialState.latitude ?(
        <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        loadingEnabled={true}
        showsUserLocation
        initialRegion={initialState}
        >
            <MapView.Marker 
                coordinate={{
                    latitude: initialState.latitude,
                    longitude: initialState.longitude
                }}
                // title={"Title 1"}
                // description={jarak.toString()
                //     // ((Math.round(jarak * 10000))/10).toString()+'ms' :
                //     // ((Math.round(jarak * 10))/10).toString()+'kms'
                // }
            />

            {/* <MapView.Marker 
                coordinate={{
                    latitude: -6.2273784,
                    longitude: 106.5666554
                }}
                title={"Title 2"}
                description={"Description 2"}
            /> */}
        </MapView>
    ) : <ActivityIndicator style={{flex: 1}} animating size="large"/>
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map