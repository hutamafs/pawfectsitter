import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'


export default function KeepList(props){
        const {img,name ,rating ,bg ,font } = props
        return(
            <View
                style={{
                    flexDirection:"row",
                    backgroundColor: bg,
                    padding:20,
                    marginHorizontal: 20,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10,
                    opacity : 0.9
                }}
            >
                    <Image
                        source={img}
                        style={{width:90,height:90}}
                    />

                    <View>
                         <Text style={{
                             color:font,
                             fontFamily:"nunito",
                             fontSize: 20,
                             paddingHorizontal:10,
                             width:170,
                             marginTop : -50
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
                    </View>
            </View>
        )
}