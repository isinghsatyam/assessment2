import React, {useState, useEffect, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Feeds = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [dataset, setDataset] = useState([]);
  const [page, setPage] = useState([1]);

  function fetchData (){
    const url = "https://randomuser.me/api/?seed=1&results=10&page="+page
      fetch(url)
      .then((res) =>res.json())
      .then(response => {
            setDataset(dataset.concat(response.results))
            }
          )
      .catch(error=>alert(error)) 
      .finally(() => setLoading(false));
  }
  useEffect(() => {
       fetchData()
  });

  console.log(dataset)
  const onLoadMore = () =>{
    setPage(page +1)
    setLoading( true)
    fetchData ()  
  }

  return ( 
    <View style={styles.container}>
      <StatusBar backgroundColor="#1f4172" barStyle="light-content" />
      <Animatable.View animation="fadeInDown" style={styles.headerView}>
          <Text style={styles.headerText}> Feeds </Text>
      </Animatable.View>
      <View style={styles.footerView}>
      {isLoading ? <ActivityIndicator size='large' color='red' animating/>
       : (
          <FlatList
            style={styles.footerView}
            data={dataset}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item}) => {
              return(
                <View style={styles.flatlist} >
                  <Image source={{uri : item.picture.thumbnail}} style={styles.imageView}></Image>
                  <Text style={styles.footerText}>{`${item.name.first} ${item.name.last}`}</Text>
                  <Text style={styles.footerText}> {item.gender}</Text>
                  <Text style={styles.footerText}> {item.phone}</Text>
                  <Text style={styles.footerText}> {item.email}</Text>
                </View>
              ) 
              }  
            }
            onEndReached= {onLoadMore}
            onEndReachedThreshold ={0}
          />
          )}
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
  imageView:{
    alignSelf :  'center',
    height : 70,
    width : 70,
    borderBottomLeftRadius : 30,
    borderTopRightRadius : 30,
    borderTopLeftRadius : 30,
    borderBottomRightRadius : 30
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
    paddingTop: 5,
    fontWeight: 'bold',
  },
  flatlist:{
    borderBottomColor : '#FEBBBB',
    backgroundColor : '#FEBBBB',
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderBottomLeftRadius : 25,
    borderTopRightRadius : 25,
    borderTopLeftRadius : 25,
    borderBottomRightRadius : 25
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

export default Feeds;