import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ThunkScreen from '../Screens/ThunkScreen';

const Stack=createStackNavigator();

const MainNavigator=()=>{
    return(
        <NavigationContainer>          
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle:'TODO App'
                    }}
                />
               <Stack.Screen
                    name="Thunk"
                    component={ThunkScreen}
                    options={{
                        headerTitle:'Thunk TODO'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;