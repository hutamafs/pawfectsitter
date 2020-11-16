import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'


export default function KeepList(props){
        const {img,name, bg ,rating} = props
        return(
            <TouchableOpacity
                style={{
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:40,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10
                }}
            >
                    <Image
                        source={img}
                        style={{width:110,height:110}}
                    />

                    <View>
                         <Text style={{
                             color:"black",
                             fontFamily:"nunito",
                             fontSize: 20,
                             paddingHorizontal:10,
                             width:170,
                             marginTop : -50
                         }}>{name}</Text>
                         <Text style={{
                             color:"black",
                             fontFamily:"nunito",
                             fontSize:12,
                             paddingHorizontal:20,
                             marginTop : 10
                         }}>
                             {rating}
                         </Text>        
                    </View>
                    
                   

            </TouchableOpacity>
        )
}