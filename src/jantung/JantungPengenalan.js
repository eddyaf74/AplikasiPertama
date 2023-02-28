import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const tulisan1 = "Penyakit pembuluh darah pada jantung yang diakibatkan penyempitan dan penyumbatan pembuluh darah jantung sehingga terjadi serangan jantung yang mengakibatkan kematian (Rampengan, 2014)";
const tulisan2 = "Penyempitan atau penyumbatan pembuluh darah yang mengalirkan darah ke otot jantung";
const tulisan3 = "Keluhan rasa tidak nyaman di dada atau nyeri dada (angina) yang berlangsung selama lebih dari 20 menit saat istirahat atau saat aktivitas yang disertai gejala keringat dingin atau gejala lainnya seperti lemah, rasa mual, dan pusing (PERKI, 2018)";
const tulisan4 = "Lokasi keluhan nyeri rata-rata tidak nyaman pada penderita gangguan jantung: di belakang tulang dada, di belakang tulang dada menjalar ke leher, dari dada ke bahu dan lengan, dari dada menjalar ke rahang, dari dada kiri bawah di ulu  hati (sering ditafsirkan sakit maag), di daerah punggung antara kedua belikat";
const tulisan5 = "Risiko yang tidak dapat dimodifikasi : umur jenis kelamin, keturunan/rasRisiko yang dapat dimodifikasi: merokok, dislipemia, hipertensi, diabetes melitus, kurangi aktivitas fisik, berat badan lebih dan obesitas, diet yang tidak sehat, stres, konsumsi alkohol berlebih.";

const JantungPengenalan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Jantung')}>
        <Text style={{textAlign: 'center', fontSize:30, fontWeight: 'bold'}}>
          Pengenalan Penyakit{' '}
          {/* <Text style={{color: '#03a9f4'}}>Registrasi Disini</Text> */}
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
    <View style={styles.area1}>
      <Text style={styles.judul}>PENGERTIAN</Text>
      <Text style={styles.huruf}>{tulisan1}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>PENYEBAB</Text>
        <Text style={styles.huruf}>{tulisan2}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>TANDA DAN GEJALA</Text>
        <Text style={styles.huruf}>{tulisan3}</Text>
    </View>
    <View style={styles.area1}>
        <Text style={styles.judul}>TANDA DAN GEJALA</Text>
        <Text style={styles.huruf}>{tulisan4}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>FAKTOR RISIKO</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default JantungPengenalan


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
