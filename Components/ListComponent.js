import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';

const ListComponent=props=>{
    return(
        <View style={{width:'100%',flexDirection:'row',borderWidth:1,paddingHorizontal:10,paddingVertical:15}}>
            <Text style={{width:'70%',fontSize:24,fontWeight:'bold',color:'#000'}}>{props.name}</Text>
            <TouchableOpacity 
             activeOpacity={0.6} 
             onPress={()=>{
                 props.deleteBtnClick(props.data)
             }}
             style={{width:'30%',alignItems:'center',borderRadius:30,
             paddingHorizontal:10,paddingVertical:5,backgroundColor:'red'}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListComponent;