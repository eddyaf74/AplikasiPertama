import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1    = "PENGERTIAN";
const tulisan1  = "Suatu penyakit menahun yang ditandai oleh kadar gula/glukosa darah yang melebihi nilai normal (Kemenkes, 2019a).";
const tulisan1a = "Nilai normal (PERKENI, 2021)"; 
const tulisan1b = "1). Gula darah sewaktu (GDS)/tanpa puasa < 200 mg/dl";
const tulisan1c = "2). Gula darah puasa (GDP) < 135 mg/dL";

const judul2    = "TANDA DAN GEJALA";
const tulisan2  = "Gejala utama klasik: Sering kencing (poliuri), cepat lapar (polifagia), dan cepat haus (polidipsi).";
const tulisan2a = "Gejala tambahan: Berat badan menurun cepat tanpa penyebab yang jelas, kesemutan, gatal di daerah kemaluan wanita, keputihan pada wanita, luka sulit sembuh, bisul yang hilang timbul, penglihatan kabur, cepat lelah, mudah mengantuk, impotensi pada pria ";

const judul3    = "FAKTOR RISIKO";
const tulisan3  = "Faktor risiko yang tidak dapat di ubah : Umur > 40 tahun, ada riwayat keluarga dengan Diabetes Melitus, riwayat kehamilan dengan Diabetes Melitus, riwayat melahirkan anak dengan berat badan > 4 kg, riwayat lahir dengan berat badan bayi < 2,5 kg.";

const judul4    = "FAKTOR RISIKO";
const tulisan4  = "Faktor risiko yang dapat diubah";
const tulisan4a = "a. Berat badan > 120 % BB ideal atau IMT > 25 kg/m2.";
const tulisan4b = "b. Kurang aktivitas fisik. Jika < 150 menit/minggu atau < 30  menit x 5 kali /minggu";
const tulisan4c = "c. Dislipidemia. Kadar lipid: HDL > 35 mg/dL. dan atau Trigliserida 2250 mg/dL.";
const tulisan4d = "d. Memilki riwayat penyakit kardiocaskuler";
const tulisan4e = "e. Hipertensi atau tekanan darah tinggi adalah suatu keadaan dimana tekanan darah sistolik >140 mmHg dan atau tekanan darah diastolik > 90 mmHg";
const tulisan4f = "f. Diet tidak seimbang. Tinggi gula, garam, lemak, dan rendah serar.";

const judul5     = "KOMPLIKASI - HIPOGLIKEMIA";
const tulisan5   = "Kondisi turunnya kadar gula darah yang drastis akibat terlalu banyak insulin dalam tubuh, terlalu banyak mengkonsumsi obat penurun gula darah, atau terlambat makan.";
const tulisan5a  = "Gejalanya antara lain : penglihatan kabur, detak jantung cepat sakit kepala, gemetar, keringat dingin, pusing dapat menyebabkan pingsan, kejang, bahkan koma";
const tulisan5b  = "";
const tulisan5c  = "";
const tulisan5d  = "";

const DiabetesPengenalan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Diabetes')}>
        <Text style={{textAlign: 'center', fontSize:30, fontWeight: 'bold'}}>
          Pengenalan Penyakit{' '}
          {/* <Text style={{color: '#03a9f4'}}>Registrasi Disini</Text> */}
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
    <View style={styles.area1}>
      <Text style={styles.judul}>{judul1}</Text>
      <Text style={styles.huruf}>{tulisan1}</Text>
      <Text style={styles.huruf}>{tulisan1a}</Text>
      <Text style={styles.huruf}>{tulisan1b}</Text>
      <Text style={styles.huruf}>{tulisan1c}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul2}</Text>
        <Text style={styles.huruf}>{tulisan2}</Text>
        <Text style={styles.huruf}>{tulisan2a}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul3}</Text>
        <Text style={styles.huruf}>{tulisan3}</Text>
    </View>
    <View style={styles.area1}>
        <Text style={styles.judul}>{judul4}</Text>
        <Text style={styles.huruf}>{tulisan4a}</Text>
        <Text style={styles.huruf}>{tulisan4b}</Text>
        <Text style={styles.huruf}>{tulisan4c}</Text>
        <Text style={styles.huruf}>{tulisan4d}</Text>
        <Text style={styles.huruf}>{tulisan4e}</Text>
        <Text style={styles.huruf}>{tulisan4f}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul5}</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default DiabetesPengenalan


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
  huruf2:{
    fontSize:16,
    color:'darkblue'
  },
   judul:{
    fontWeight:'bold',
    fontSize:20,
    color:'darkblue'
  }
  })
