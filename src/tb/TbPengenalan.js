import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const tulisan1 = "TBC atau tuberculosis adalah penyakit menular yang disebbakan oleh kuman TBC (Mycobacterium Tuberculosis). Kuman ini menyerang tubuh manusia, terutama pada paru (Kemenkes, 2019e)";
const tulisan2 = "Kuman TB (Mycobacterium tuberculosis) yang terhirup melalui saluran pernafasan menuju paru-paru dan menyebar ke bagian tubuh lainnya";
const judul3    = "JENIS TB";
const tulisan3  = "TB Paru: Tuberkulosis paru adalah tuberkulosis yang menyerang jaringan paru";
const tulisan3a = "TB ekstra paru: Tuberkulosis yang menyerang organ lain selain paru, misalnya: selaput otak, selaput jantung (perikardium), kelenjar getah bening, tulang, persendian, kulit, usus, ginjal. Saluran kencing, alat kelamin, dan lain-lain.";
const tulisan4  = "1). Gejala utama: batuk terus menerus (berdahak maupun tidak berdahak) selama 2 minggu atau lebih";
const tulisan4a = "2). Gejala lainnya:";
const tulisan4b = "a). Demam meriang (demam tidak terlalu tinggi)";
const tulisan4c = "b). Batuk berdahak (dapat bercampur darah)";
const tulisan4d = "c). Nyeri dada";
const tulisan4e = "d). Berkeringat tanpa sebab ( terutama pada sore-malam hari)";
const tulisan4f = "e). Nafsu makan menurun";
const tulisan4g = "f). Berat badan menurun";

const tulisan5 = "Orang-orang yang beresiko tinggi terkena TB:";
const tulisan5a = "1). Orang-orang yang kontak erat dengan pasien TB yang belum di obati";
const tulisan5b = "2). Orang yang status gizinya rendah";
const tulisan5c = "3). Orang yang daya tahan tubuhnya rendah";
const tulisan5d = "4). Bayi dan anak-anak yang kontak erat dengan pasien TB BTA positif";
const tulisan5e = "5). Orang dengan HIV dan AIDS";

const TbPengenalan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Tb')}>
        <Text style={{textAlign: 'center', fontSize:28, fontWeight: 'bold'}}>
          Pengenalan Penyakit TB{' '}
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
        <Text style={styles.judul}>{judul3}</Text>
        <Text style={styles.huruf}>{tulisan3}</Text>
        <Text style={styles.huruf}>{tulisan3a}</Text>
    </View>
    <View style={styles.area1}>
        <Text style={styles.judul}>TANDA DAN GEJALA</Text>
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
        <Text style={styles.judul}>FAKTOR RISIKO</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
        <Text style={styles.huruf}>{tulisan5a}</Text>
        <Text style={styles.huruf}>{tulisan5b}</Text>
        <Text style={styles.huruf}>{tulisan5c}</Text>
        <Text style={styles.huruf}>{tulisan5d}</Text>
        <Text style={styles.huruf}>{tulisan5e}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default TbPengenalan


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
