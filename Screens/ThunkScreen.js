import React,{useState} from 'react';
import { useEffect } from 'react';
import {View,StyleSheet,ToastAndroid} from 'react-native';
import Loader from '../Components/Loader';

const ThunkScreen=props=>{

    const [showLoader,setShowLoader]=useState(false);

    const mock = (success, timeout) => {
        return new Promise((resolve, reject) => {
            setShowLoader(true)
            setTimeout(() => {
                console.log(success)
                if(success) {
                setShowLoader(false);
                ToastAndroid.show("Done Successful...!!",ToastAndroid.SHORT);
                resolve(success);
            }else {
                setShowLoader(false);
                ToastAndroid.show("Some errors occurs..please try again later.",ToastAndroid.SHORT)
                reject({message:'Error occurs!'})
            }
        }, timeout);
        });
    }
        
    const someEvent = async () => {
        try {
            await mock(true, 8000);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(()=>{
        someEvent();
    },[])


    return(
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Loader isLoading={showLoader} />
        </View>
    )
}

export default ThunkScreen;