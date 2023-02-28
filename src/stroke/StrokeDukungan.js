import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1    = "REHABILITASI";
const tulisan1  = "Rehabilitasi akan diberikan oleh tim yang terdiri dari dokter, perawat, ahli fisioterapi, ahli terapi wicara dan bahasa, ahli okupasional, petugas sosial dan peran serta keluarga. Bentuk rehabilitasi dapat berupa rehabilitasi fisik. Mental, dan sosial.";
const judul2    = "REHABILITASI FISIK";
const tulisan2  = "1. Fisioterapi. Latihan rentang gerak ROM (Range of Motion) membantu mengatasi masalah gerakan dan sensoris seperti kekuatan otot, duduk, berdiri, berjalan, koordinasi, dan keseimbangan, serta mobilitas di tempat tidur";
const tulisan2a = "2. Terapi okupasional (Occupational Therapist atau OT). Melatih kemampuan aktivitas sehari-hari seperti mandi, memakai baju, makan, dan buang air";
const tulisan2b = "3. Terapi wicara dan bahasa. Untuk melatih kemampuan menelan makanan dan minuman serta dapat berkomunikasi dengan orang lain";

const judul3    = "REHABILITASI MENTAL";
const tulisan3  = "Dengan psikiater atau ahli psikologi klinis. Bertujuan membantu mengatasi masalah emosional yang dapat mempengaruhi mental misalnya reaksi sedih, mudah tersinggung, tidak bahagia, murung, dan depresi";
const judul4    = "REHABILITASI SOSIAL";
const tulisan4  = "1. Petugas sosial berperan membantu penderita menghadapi masalah sosial seperti perubahan gaya hidup, hubungan perorangan, pekerjaan, dan aktivitas";
const tulisan4a = "2. Petugas sosial memberi informasi mengenai layanan komunitas lokal dan badan-badan bantuan sosial";
const judul5   = "";
const tulisan5 = "";

const StrokeDukungan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Stroke')}>
        <Text style={{textAlign: 'center', fontSize:26, fontWeight: 'bold'}}>
          Dukungan Pasien Stroke{' '}
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
        <Text style={styles.huruf}>{tulisan2a}</Text>
        <Text style={styles.huruf}>{tulisan2b}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul3}</Text>
        <Text style={styles.huruf}>{tulisan3}</Text>
    </View>
    <View style={styles.area1}>
        <Text style={styles.judul}>{judul4}</Text>
        <Text style={styles.huruf}>{tulisan4}</Text>
        <Text style={styles.huruf}>{tulisan4a}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul5}</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default StrokeDukungan


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
