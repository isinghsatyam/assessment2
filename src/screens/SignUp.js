import React, {useState, useEffect,Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';


const SignUp = (props) => {
    const [username, setUsername] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const onSubmit = async () =>{
           try{
               if(username == null || email == null || password == null){
                    alert('Enter value in all fields')
               }else{
                    await AsyncStorage.setItem('username',username)
                    await AsyncStorage.setItem('email',email)
                    await AsyncStorage.setItem('password',password)
                    alert('your credential is stored')
               }     
           }catch (error){
               alert(error)
           }finally{
            props.navigation.navigate('SignIn')
           }
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1f4172" barStyle="light-content" />
        <View style={styles.headerView}>
            <Text style={styles.headerText}> SignUp </Text>
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
                // value= {username}
                    style = {styles.textInput}
                    autoCapitalize = 'none'
                    onChangeText ={username => setUsername(username)}
                />
            </View>
            <Text style={[styles.footerText, {marginTop: 35}]}>Email</Text>
            <View style={styles.action}>
                <MaterialCommunityIcons
                    name='email'
                    color='#05375a'
                    size = {25}
                />
                <TextInput
                    placeholder= "Email id"
                    //value= {email}
                    style = {styles.textInput}
                    autoCapitalize = 'none'
                    onChangeText ={email => setEmail(email)}
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
                />
            </View>
            <View style={{marginTop:20}}>
                <TouchableOpacity style={styles.button}
                    onPress={onSubmit}>
                    <Text style={styles.buttonText}>Create an account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Back</Text>
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
    marginTop: 8,
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

export default SignUp;