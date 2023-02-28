import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import SignInHeader from '../components/SignInHeader';
import {useNavigation} from '@react-navigation/native';


const MenuUtama = ({route}) => {
  const navigation = useNavigation();
  return (
  <View>
    <View>
      
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Pilih Jenis Penyakit Kronik{' '}
          {/* <Text style={{color: '#03a9f4'}}>Registrasi Disini</Text> */}
        </Text>
      </TouchableOpacity>
      {/* <Text>Info1 : {route.params.info1} </Text>
      <Text>Info2 : {route.params.info2} </Text> */}
    </View>

<View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 40}}>

</View>

        <TouchableOpacity onPress={()=>navigation.navigate('Jantung')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/jantung.jpg')}>
                <Text style={styles.teksMenu}>Penyakit Jantung</Text>    
            </ImageBackground>      
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Diabetes')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/diabetes.jpg')}>
                <Text style={styles.teksMenu}>Penyakit Diabetes</Text>    
            </ImageBackground>      
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Stroke')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/stroke.jpg')}>
                <Text style={styles.teksMenu}>Penyakit Stroke</Text>    
            </ImageBackground>      
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Tb')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/tb.jpg')}>
                <Text style={styles.teksMenu}>Penyakit TB</Text>    
            </ImageBackground>      
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Ginjal')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/ginjal.jpg')}>
                <Text style={styles.teksMenu}>Gagal Ginjal</Text>    
            </ImageBackground>      
        </TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
  area:{
      paddingTop:20,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FFE4C4',
      margin:10

  },
  container: {
    flex: 1,
    paddingTop:10,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems:'center',
    padding: 8,
  },
  teks: {
    marginBottom:5,
    marginLeft:0,
    fontSize: 18,
    color: 'darkblue'
  },
  teks2: {
    marginBottom:5,
    marginLeft:0,
    textAlign:'center',
    fontWeight:'bold',
    alignItems:'center',
    alignContent:'center',
    fontSize: 22,
    color: 'darkblue'
  },
  teksMenu:{
    // backgroundColor:'blue',
    fontSize:20,
    fontWeight:'bold',
    color:'darkblue',
  },
  judul: {
    marginBottom:5,
    marginLeft:0,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkblue'
  },
  tombol:{
        backgroundColor:'#FFFFFF',
        elevation:2,
        width:400,
        height:400,
        paddingVertical:50,
        marginHorizontal:20,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
  },
  gambar: {
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    // margin: 5,
    width: 400,
    height: 80,
    borderRadius: 15,
    marginBottom:15
  },
  gambar2: {
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    // margin: 5,
    width: 400,
    height: 300,
    // borderRadius: 30/2,
    // marginBottom:15
  }
})

export default MenuUtama

