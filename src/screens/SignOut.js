
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const SignOut = (props) => {
    useEffect( () =>{
        const deleteToken = async () =>{
            await AsyncStorage.removeItem('token')  ;   
        }  
        deleteToken();
    })
    

    return (props.navigation.navigate('SignIn'));
}

export default SignOut;