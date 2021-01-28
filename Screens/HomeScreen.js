import React,{useState} from 'react';
import {View,StyleSheet,FlatList,Text,TouchableOpacity, TextInput,Keyboard} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {createStore} from 'redux'
import {nameData} from '../Data/data'
import ListComponent from '../Components/ListComponent'
import {addDataFunction,deleteDataFunction} from '../Reducer/Actions/Actions';

const HomeScreen=props=>{


    const dataState=useSelector(state=>state);
    console.log("Hello state : ",dataState)

    const Dispatch=useDispatch();


    const [nameState,setNameState]=useState({
        name:''
    })

    const deleteBtnClickHandler=(data)=>{
        console.log("deleted data :",data.name);
        Dispatch(deleteDataFunction(data.name))
    }

    const changeNameTextHandler=(text)=>{
        setNameState({
            ...nameState,
            name:text
        })
    }

   const addClickHandler=()=>{
        console.log(nameState.name);
       Dispatch(addDataFunction(nameState));
       setNameState({
        ...nameState,
        name:''
    })
   }

    return(
        <View style={{flex:1,paddingHorizontal:10,paddingVertical:5}}>
            <FlatList data={dataState.todos}
             keyExtractor={(items,index)=>index.toString()}   
            renderItem={(items)=>{
                return(
                    <ListComponent data={items.item} name={items.item.name} 
                    deleteBtnClick={deleteBtnClickHandler} />
                )                
            }}/>

            <View style={{width:'100%',flexDirection:'column',borderTopWidth:0.3,paddingTop:10}}>
                <TextInput 
                    keyboardType='default'
                    placeholder='Enter Name...'
                    onSubmitEditing={()=>{
                        Keyboard.dismiss();
                    }}
                    value={nameState.name}
                    onChangeText={changeNameTextHandler}
                    style={{borderRadius:30,borderWidth:0.5,paddingHorizontal:10,fontSize:18}}
                />
                <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity 
             activeOpacity={0.6} 
             onPress={addClickHandler}
             style={{width:'30%',alignItems:'center',borderRadius:30,
             marginTop:10,
             paddingHorizontal:10,paddingVertical:5,backgroundColor:'blue'}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>Add</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default HomeScreen;