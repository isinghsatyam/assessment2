import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  map,
  TextInput,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

const SignIn = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('')

    const getData = async () => {
        try{
            const usernameTemp = await AsyncStorage.getItem('username')
            const emailTemp = await AsyncStorage.getItem('email')
            const passwordTemp = await AsyncStorage.getItem('password')
            if(username == null || password == null){
                alert('please Enter value in all fields')
            }
            else if(username == usernameTemp && password == passwordTemp){
                await AsyncStorage.setItem('token', 'first1')
                props.navigation.navigate('Home')
            }
            else{
                alert('wrong input')  
            }
        }catch(error){
            alert(error) 
        }
    }
    

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1f4172" barStyle="light-content" />
        <View style={styles.headerView}>
            <Text style={styles.headerText}> SignIn </Text>
        </View> 
        <Animatable.View animation="fadeInUpBig" style={styles.footerView}>
            <Text style={styles.footerText}>Username</Text>
            <View style={styles.action}>
                <FontAwesome
                    name='user-o'
                    color='#05375a'
                    size = {25}
                />
                <TextInput
                    placeholder= "Username"
                    //value= {username}
                    style = {styles.textInput}
                    autoCapitalize = 'none'
                    onChangeText ={username => setUsername(username)}
                    defaultValue ={username}
                />
            </View>
            <Text style={[styles.footerText, {marginTop: 35}]}>Password</Text>
            <View style={styles.action}>
                <MaterialCommunityIcons
                    name='lock-outline'
                    color='#05375a'
                    size = {25}
                />
                <TextInput
                    placeholder= "Enter your Password"
                    //value= {password}
                    secureTextEntry={true}
                    style = {styles.textInput}
                    autoCapitalize = 'none'
                    onChangeText ={password => setPassword(password)}
                    defaultValue ={password}
                />
            </View>
            <View style={{marginTop:50}}>
                <TouchableOpacity style={styles.button}
                    onPress={getData}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate('SignUp')}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity> 
            </View>
        </Animatable.View>        
      </View>        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f4172',  
  },
  headerView: {
    flex: 1,
    backgroundColor: '#1f4172',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerView: {
    flex: 8,
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderColor: '#000066',
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30
  },
  action:{
    flexDirection:'row',
    marginTop: 10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footerText: {
    color: '#FEBBBB',
    fontSize: 18,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    marginTop:Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 20,
    borderBottomWidth : 1,
    borderBottomColor: '#FEBBBB'
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: '#FEBBBB'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f4172'
  }
});

export default SignIn;