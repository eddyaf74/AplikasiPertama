import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1 ="PENGERTIAN";
const tulisan1 = "Perawatan diri pada pasien stroke dalam tahap rehabilitasi meliputi perbaikan mobilitas, menghindari nyeri bahu, pencapaian perawatan diri, mendapatkan kontrol kandung kemih, perbaikan proses pikir, pencapaian beberapa bentuk komunikasi, pemeliharaan integritas kulit";
const judul2 ="MEMPERBAIKI MOBILITAS DAN MENCEGAH PERUBAHAN BENTUK TULANG";
const tulisan2 = "Pasien stroke mengalami pengecilan bentuk anggota tubuh terutama kaki atau tangan, hal ini dapat diatasi dengan:";
const tulisan2a = "1. Pemberian posisi";
const tulisan2b = "a. Meredakan tekanan di bagian bawah tubuh";
const tulisan2c = "b. Mempertahankan kesejajaran tubuh";
const tulisan2d = "2. Posisi tidur yang tepat";
const tulisan2e = "a. Harus tetap datar di tempat tidur";
const tulisan2f = "b. Posisi tegak di tempat tidur dalam waktu lama dapat menyebabkan luka di daerah punggung dan bokong tubuh";
const tulisan2g = "3.  Papan kaki";
const tulisan2h = "Dilakukan secara interval dengan tujuan mencegah footdroop dan tumit menjadi lebih pendek";
const tulisan2i = "4.  Pengaturan bahu";
const tulisan2j = "Satu bantal ditaruh di ketiak yang sakit agar posisi lengan tetap menjauh dari dada";
const tulisan2k = "Satu bantal di tempatkan di bawah lengan sehingga siku lebih tinggi dari bahu dengan tujuan mencegah bengkak pada bagian lengan bawah";
const tulisan2l = "5.  Posisi tangan dan jari";
const tulisan2m = "Jari tangan di posisikan sehingga mengalami sedikit bengkok";
const tulisan2n = "Tangan diposisikan dengan telapak tangan meghadap ke atas";
const tulisan2o = "6.  Mengubah posisi";
const tulisan2p = "Posisi pasien di ubah setiap 2 jam";
const tulisan2q = "Untuk mengubah pasien posisi miring dengan cara satu bantal ditempatkan di antara kaki sebelum pasien di balik. Paha atas tidak boleh di tekuk secara tiba-tiba";
const tulisan2r = "7.  Latihan";
const tulisan2s = "Ekstremitas yang sakit di latih secara pasif dan dilakukan ROM empat sampai lima kali sehari";
const tulisan2t = "Latihan ROM mencegah terjadinya lambatnya pembuluh darah";

const judul3   = "MENCEGAH NYERI BAHU";
const tulisan3 = "1. Dapat di cegah dengan menggerakkan dan memberi posisi yang benar; 2. Latihan ROM penting dalam mencegah nyeri bahu; 3. Hindari gerakan-gerakan yang berat";

const StrokePerawatan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Stroke')}>
        <Text style={{textAlign: 'center', fontSize:26, fontWeight: 'bold'}}>
          Perawatan Pasien Stroke{' '}
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
        <Text style={styles.huruf}>{tulisan2c}</Text>
        <Text></Text>
        <Text style={styles.huruf}>{tulisan2d}</Text>
        <Text style={styles.huruf}>{tulisan2e}</Text>
        <Text style={styles.huruf}>{tulisan2f}</Text>
        <Text style={styles.huruf}>{tulisan2g}</Text>
        <Text style={styles.huruf}>{tulisan2h}</Text>
        <Text style={styles.huruf}>{tulisan2i}</Text>
        <Text style={styles.huruf}>{tulisan2j}</Text>
        <Text style={styles.huruf}>{tulisan2k}</Text>
        <Text style={styles.huruf}>{tulisan2l}</Text>
        <Text style={styles.huruf}>{tulisan2m}</Text>
        <Text style={styles.huruf}>{tulisan2n}</Text>
        <Text style={styles.huruf}>{tulisan2o}</Text>
        <Text style={styles.huruf}>{tulisan2p}</Text>
        <Text style={styles.huruf}>{tulisan2q}</Text>
        <Text style={styles.huruf}>{tulisan2r}</Text>
        <Text style={styles.huruf}>{tulisan2s}</Text>
        <Text style={styles.huruf}>{tulisan2t}</Text>
    </View>

    <View style={styles.area1}>
      <Text style={styles.judul}>{judul3}</Text>
      <Text style={styles.huruf}>{tulisan3}</Text>
    </View>

    
    </ScrollView>
  </View>

)}
export default StrokePerawatan


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
