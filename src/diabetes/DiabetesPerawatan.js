import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1     = "Beberapa hal yang harus diperhatikan perawatan pada pasien dengan diabetes melitus adalah:";
const tulisan1a  = "a. Kepatuhan monitor kada r glukosa darah";
const tulisan1b  = "b. Kepatuhan aktivitas fisik";
const tulisan1c  = "c. Kepatuhan kunjungan berobat";
const tulisan1d  = "d. Kepatuhan diet";
const tulisan1e  = "e. Kepatuhan perawatan kaki";
const tulisan1f   = "f. Kepatuhan minum obat";
const judul2   = "KEPATUHAN MONITOR KADAR GLUKOSA DARAH";
const tulisan2 = "Kadar glukosa datah sewaktu dan puasa sebagai patokan penyaring dan diagnosis DM yang dinyatakan dengan satuan mg/dl. Kadar glukosa darah sewaktu adalah pemeriksaan glukosa darah yang dilakukan kapan saja tanpa perlu puasa dan tanpa memperhatikan waktu terakhir makan. Sedangkan kadar glukosa darah puasa adalah pemeriksaan glukosa darah yang dilakukan dengan mengharuskan pasien berpuasa (sekitar 8 jam) sebelum pemeriksaan agar hasil pemeriksaan tidak dipengaruhi oleh makanan.";
const judul3   = "KEPATUHAN MONITOR KADAR GLUKOSA DARAH";
const tulisan3  = "1. Hiperglikemia dan hipoglikemia";
const tulisan3a = "a. Hiperglikemia: Adalah kompolikasi akut diabetes yang ditandai dengan peningkatan kadar glukosa darah yang tinggi (300-600 mg/dl)";
const tulisan3b = "b. Hiperglikemia: Penurunan konsentrasi glukosa serum yang ditandai dengan menurunnya kadar glukosa darah <70 mg/dl.";

const judul4   = "KEPATUHAN MONITOR KADAR GLUKOSA DARAH";
const tulisan4 = "2. Tanda dan gejala hipoglikemia pada orang dewasa";
const tulisan4a = "Rasa lapar, berkeringat, gelisah, pucat, nadi cepat, lemah, lesu, pandangan kabur, kejang, suhu tubuh rendah";
const tulisan4b = "Cara mengatasi hipoglikemia di rumah";
const tulisan4c = "a. Mengonsumsi larutan air gula atau makanan tinggi gula seperti permen";
const tulisan4d = "b. Larutan air gula dapat dibuat dengan cara melarutkan 2 sdm gula pasir ke dalam satu gelas air putih";
const tulisan4e = "c. Jika setelah 15 menit keluhan hipoglikemia masih tetap ada, minum kembali larutan air gula atau makanan tinggi gula";
const tulisan4f = "d. Jika hasil pemeriksaan kadar gula darah sudah mencapai normal,  maka segera mengonsumsi makanan utama atau selingan";
const tulisan4g = "e. Segera berkonsultasi dengan dokter";

const judul5   = "";
const tulisan5 = "";

const DiabetesPerawatan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Diabetes')}>
        <Text style={{textAlign: 'center', fontSize:24, fontWeight: 'bold'}}>
        PERAWATAN PADA PASIEN DIABETES MELITUS{' '}
          {/* <Text style={{color: '#03a9f4'}}>Registrasi Disini</Text> */}
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
    <View style={styles.area1}>
      <Text style={styles.judul}>{judul1}</Text>
      <Text style={styles.huruf}>{tulisan1a}</Text>
      <Text style={styles.huruf}>{tulisan1b}</Text>
      <Text style={styles.huruf}>{tulisan1c}</Text>
      <Text style={styles.huruf}>{tulisan1d}</Text>
      <Text style={styles.huruf}>{tulisan1e}</Text>
      <Text style={styles.huruf}>{tulisan1f}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul2}</Text>
        <Text style={styles.huruf}>{tulisan2}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul3}</Text>
        <Text style={styles.huruf}>{tulisan3}</Text>
        <Text style={styles.huruf}>{tulisan3a}</Text>
        <Text style={styles.huruf}>{tulisan3b}</Text>
    </View>
    <View style={styles.area1}>
        <Text style={styles.judul}>{judul4}</Text>
        <Text style={styles.huruf}>{tulisan4}</Text>
        <Text style={styles.huruf}>{tulisan4a}</Text>
        <Text style={styles.huruf}>{tulisan4b}</Text>
        <Text style={styles.huruf}>{tulisan4c}</Text>
        <Text style={styles.huruf}>{tulisan4d}</Text>
        <Text style={styles.huruf}>{tulisan4e}</Text>
        <Text style={styles.huruf}>{tulisan4f}</Text>
        <Text style={styles.huruf}>{tulisan4g}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul5}</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default DiabetesPerawatan


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
