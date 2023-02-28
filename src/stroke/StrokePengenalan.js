import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const tulisan1 = "Gangguan pembuluh darah otak yang mengakibatkan gejala gangguan saraf bahkan kematian.";
const tulisan2 = "Adanya bekuan atau penurunan aliran darah di pembuluh darah otak sehingga berkuranganya suplai oksiegen ke otak yang menyebabkan kehilangan sementara atau permanen gerakan berpikir, memori, bicara, dan sensasi";
const tulisan3 = "Menurut Pudjonarko et al., (2018) tanda dan gejalanya sebagai berikut: 1). Mati rasa, lemah: lumpuh pada wajah, lengan atau kaki pada sisi tubuh; 2). Gangguan penglihatan; 3). Gangguan bicara/tidak lancar; 4). Pingsan; 5). Koma";
const tulisan4 = "Data dari Kemenkes, (2019d) faktor resiko pada pasien stroke sebagai berikut: 1). Hipertensi; 2). Diabetes melitus; 3). Kadar kolesterol yang tinggi (>200mg/dl); 4). Riwayat penyakit arteri koroner, bypass arteri koroner, atau atrial fibrilasi; 5). Obesitas; 6). Merokok; 7). Konsumsi alkohol; 8). Stres; 9). Kontrasepsi oral (khususnya disertai hipertensi, merokok, kadar estrogen tinggi)";
const tulisan5 = "1). Penurunan aliran darah serebral; 2). Luasnya area cedera di serebral";
const tulisan6 = "1). Menghindari kebiasaan merokok; 2). Memeriksakan tekanan darah secara rutin; 3). Mengendalikan penyakit jantung; 4). Mengatasi stres dan depresi; 5). Makanan yang sehat dan gizi seimbang; 6). Mengurangi makanan bergaram; 7). Memantau berat badan; 8). Melakukan olahhraga secara aktif; 9). Menghindari konsumsi alkohol; 10). Mencari informasi tentang penyakit stroke";
const tulisan7 = "1). Mengkonsumsi makanan dengan gizi seimbang seperti makan banyak sayuran dan buah-buahan; 2). Mengkonsumsi ikan terutama ikan salem dan tuna; 3). Meminimalkan junk food; 4). Beralih pada makanan tradisional yang rendah lemak dan gula; 5). Serelia dan susu rendah lemak juga bagus untuk di konsumsi";

const StrokePengenalan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Stroke')}>
        <Text style={{textAlign: 'center', fontSize:26, fontWeight: 'bold'}}>
          Pengenalan Penyakit Stroke{' '}
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
        <Text style={styles.judul}>FAKTOR RISIKO</Text>
        <Text style={styles.huruf}>{tulisan4}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>KOMPLIKASI</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>PENCEGAHAN</Text>
        <Text style={styles.huruf}>{tulisan6}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>POLA MAKAN</Text>
        <Text style={styles.huruf}>{tulisan7}</Text>
    </View>
    
    </ScrollView>
  </View>

)}
export default StrokePengenalan


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
