import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  map,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Settings = (props) => {

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1f4172" barStyle="light-content" />
        <Animatable.View animation="fadeInDown" style={styles.headerView}>
            <Text style={styles.headerText}> Setting </Text>
        </Animatable.View>
        <View style={styles.footerView}>
              <TouchableOpacity style={styles.button}
                onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go to Home</Text>
              </TouchableOpacity>
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
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footerText: {
    color: '#106669',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 20,
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

export default Settings;