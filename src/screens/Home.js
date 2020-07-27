import React, {useState, useEffect, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Switch,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = (props) => {
  const [username , setUsername] =useState('');
  
  useEffect(() => {
    const userSigned = async () =>{
    const currentUser = await AsyncStorage.getItem('username')
    setUsername(currentUser);
    }
    userSigned();
  })
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1f4172" barStyle="light-content" />
      <Animatable.View animation="fadeInDown" style={styles.headerView}>
        <View style={styles.action}>
            <FontAwesome
              name='user-o'
              color='#fff'
              size = {25}
            />
            <Text style={styles.textInput}> {username} </Text>
        </View>
      </Animatable.View>
      <View style={styles.footerView}>
      </View>
    </View>            
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  headerView: {
    flex: 1,
    backgroundColor: '#1f4172',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomLeftRadius : 40,
    borderBottomRightRadius : 40
  },
  footerView: {
    flex: 8,
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderColor: '#000066',
  },
  action:{
    flexDirection:'row',
    marginTop: 8,
    paddingBottom:5,
    justifyContent : 'center'
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textInput: {
    paddingLeft: 10,
    color: '#fff',
    fontSize: 20,
    justifyContent : 'center',
    fontWeight : 'bold'
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 130,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Home;