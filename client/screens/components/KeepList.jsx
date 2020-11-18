import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'


export default function KeepList(props){
        const {img, name ,rating, address ,bg ,font } = props
        return(
            <View
                style={{
                    flexDirection:"row",
                    backgroundColor: bg,
                    paddingTop:10,
                    paddingLeft:15,
                    marginHorizontal: 20,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10,
                    opacity : 0.9
                }}
            >
                    <Image
                        source={{uri: img}}
                        style={{width:100,height:100}}
                    />

                    <View style={{display:'flex',marginTop:15}} >
                         <Text style={{
                             color:font,
                             fontFamily:"nunito",
                             fontSize: 20,
                             paddingHorizontal:10,
                             width:170,
                         }}>{name}</Text>
                         <Text style={{
                             color: font,
                             fontFamily:"nunito",
                             fontSize:15,
                             paddingHorizontal:10,
                             marginTop : 8
                         }}>
                            Rating : {rating}
                         </Text>
                        <View style={{display:'flex',flexDirection:'row'}} >
                            <Text style={{
                                color: font,
                                fontFamily:"nunito",
                                fontSize:15,
                                width:260,
                                height:50,
                                paddingHorizontal:10,
                                marginTop : 8,
                                display:'flex',
                                flexWrap:'wrap'
                            }}>
                                🏠  : {address}
                            </Text>    
                        </View>         
                    </View>
            </View>
        )
}