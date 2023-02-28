import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1 ="";
const tulisan1 = "";
const judul2 ="";
const tulisan2 = "";
const judul3="";
const tulisan3 = "";
const judul4="";
const tulisan4 = "";
const judul5="";
const tulisan5 = "";

const JantungFaskes= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Jantung')}>
        <Text style={{textAlign: 'center', fontSize:30, fontWeight: 'bold'}}>
          Fasilitas Kesehatan{' '}
          {/* <Text style={{color: '#03a9f4'}}>Registrasi Disini</Text> */}
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
    <View style={styles.area1}>
      <Text style={styles.judul}>{judul1}</Text>
      <Text style={styles.huruf}>{tulisan1}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul2}</Text>
        <Text style={styles.huruf}>{tulisan2}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul3}</Text>
        <Text style={styles.huruf}>{tulisan3}</Text>
    </View>
    <View style={styles.area1}>
        <Text style={styles.judul}>{judul4}</Text>
        <Text style={styles.huruf}>{tulisan4}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul5}</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default JantungFaskes


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFDEAD'
  },
  area:{
    flex:1,
    padding:15,
    marginLeft:15,
    marginTop:15,
    marginRight:15,
    marginBottom:5,
    backgroundColor:"#FFEBCD",
    
    borderRadius:13
    },
    area1:{
        flex:1,
        padding:15,
        marginLeft:15,
        marginTop:15,
        marginRight:15,
        marginBottom:5,
        backgroundColor:"#F0FFF0",
       
        borderRadius:10
    },
    area2:{
    flex:1,
    padding:15,
    marginLeft:15,
    marginTop:15,
    marginRight:15,
    marginBottom:5,
    backgroundColor:"#F0FFF0",
   
    borderRadius:10
    },
  huruf:{
    fontSize:20,
    color:'darkblue'
  },
   judul:{
    fontWeight:'bold',
    fontSize:20,
    color:'darkblue'
  }
  })
