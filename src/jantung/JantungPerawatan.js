import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1 ="PENGERTIAN";
const tulisan1 = "Perawatan diri pada pasien dengan gagal jantung menekankan dalam hal pemeliharaan diri (Self-care maintenance), Pengelolaan diri )Self-care management), dan kepercayaan diri (self-care Confidence)";
const judul2 ="PEMELIHARAAN DIRI (SELF-CARE MAINTENANCE)";
const tulisan2 = "Menepati perjanjian dengan dokter atau perawat ketika berobat ke rumah sakit tidak pernah lupa untuk minum salah satu obat Melakukan kegiatan fisik (seperti melakukan pekerjaan rumah tangga, pekerjaan kantor) memakan makanan dengan jumlah garam sedikit menimbang berat badan melakukan olah raga selama 30 menit mencoba menghindari sakit (seperti pencegahan sakit flu, menghindari orang sakit) meminta makanan rendah garam saat makan di luar atau mengunjungi orang lain menggunakan suatu cara (kotak obat, pengingat) untuk membantu mengingat waktu minum obat memeriksa pembekakan pada kaki";
const judul3="PENGELOLAAN DIRI (SELF-CARE MAINTENANCE)";
const tulisan3 = "Mengenali gejala gagal jantung mengurangi garam dalam diet Kayakinan akan cara yang digunakan untuk menolong diri minum tambahan obat pengurangan air (diuretik) mengurangi pemasukan cairan menelpon dokter atau perawat untuk bantuan/bimbingan";
const judul4="KEPERCAYAAN DIRI (SELF-CARE MAINTENANCE)";
const tulisan4 = "Mengikuti petunjuk pengobatan yang telah diberikan menilai seberapa baik obat bekerja membuat diri terhindar dari gejala-gejala gagal jangtung mengevaluasi gejala-gejala gagal jantung yang terjadi mengenali perubahan-perubahan kesehatan yang terjadi melakukan sesuatu untuk mengurangi gejala-gejala gagal jantung";
const judul5="PROGRAM LATIHAN FISIK REHABILITATIF";
const tulisan5 = "1. Manfaat Latihan Fisik Pada Penderita Gangguan Jantung. Mengurangi efek samping fisiologis dan psikologis tirah baring di rumah sakit Dapat dimanfaatkan untuk memonitor kondisi fisiologis penderita. Mempercepat proses pemulihan dan kemampuan untuk kembali apda level aktivitas sebelum serangan jantung";

const JantungPerawatan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Jantung')}>
        <Text style={{textAlign: 'center', fontSize:30, fontWeight: 'bold'}}>
          Perawatan{' '}
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
export default JantungPerawatan


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
