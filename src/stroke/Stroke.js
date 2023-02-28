import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Stroke = () => {
  const navigation = useNavigation();
  return (
  <View>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('MenuUtama')}>
        <Text style={{textAlign: 'center', fontSize:30, fontWeight: 'bold'}}>
          Penyakit Stroke{' '}
          {/* <Text style={{color: '#03a9f4'}}>Registrasi Disini</Text> */}
        </Text>
      </TouchableOpacity>
    </View>


<View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 40}}>

</View>
        <TouchableOpacity onPress={()=>navigation.navigate('StrokePengenalan')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/PengenalanPenyakit.png')}>    
            </ImageBackground>      
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('StrokePerawatan')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/Perawatan.png')}>
                    
            </ImageBackground>      
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('StrokeDukungan')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/dukungan.png')}>
                  
            </ImageBackground>      
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('StrokeBudaya')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/PerawatanDenganPendekatanBudaya.png')}>
                 
            </ImageBackground>      
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('StrokeFaskes')}>
            <ImageBackground style={styles.gambar} 
                  source={require('../images/FasilitasKesehatan.png')}>
                 
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
    marginLeft: 5,
    width: 350,
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

export default Stroke

