import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1 ="DUKUNGAN";
const tulisan1 = "Dukungan yang diberikan pada pasien dengan gagal ginjal kronik yaitu:";
const tulisan1a = "- Keringanan biaya";
const tulisan1b = "- Bantuan obat-obatan";
const tulisan1c = "- Mengantar/diantar ketika melakukan pengobatan/cuci darah";
const tulisan1d = "- Menjemput/dijemput setelah selesai pengobatan/cuci darah";
const tulisan1e = "- Pemberian informasi tentang penyakit ginjal";
const tulisan1f = "- Pemberian informasi tentang cara perawatan";
const tulisan1g = "- Pemberian hiburan";
const tulisan1h = "- Mengunjungi/dikunjungi baik di rumah maupun di tempat pengobatan/cuci darah";
const tulisan1i = "- Menemani/ditemani pasien ketika sedang pengobatan/cuci darah";
const tulisan1j = "- Menjadi tempat pasien berkeluh kesah";
const tulisan1k = "- Membantu/dibantu ketika sedang pengobatan/cuci darah";
const tulisan1l = "- Memberi/diberi nasihat";
const tulisan1m = "- Memberi/diberi semangat";
const tulisan1n = "- Teman mengobrol ketika sedang pengobatan/cuci darah";
const tulisan1o = "- Mengajak/diajak mengikuti kegiatan suatu kelompok sosial ";

const GinjalDukungan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Ginjal')}>
        <Text style={{textAlign: 'center', fontSize:26, fontWeight: 'bold'}}>
          Dukungan Pada Pasien Gagal Ginjal Kronik {' '}
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
      <Text style={styles.huruf}>{tulisan1d}</Text>
      <Text style={styles.huruf}>{tulisan1e}</Text>
      <Text style={styles.huruf}>{tulisan1f}</Text>
      <Text style={styles.huruf}>{tulisan1g}</Text>
      <Text style={styles.huruf}>{tulisan1h}</Text>
      <Text style={styles.huruf}>{tulisan1i}</Text>
      <Text style={styles.huruf}>{tulisan1j}</Text>
      <Text style={styles.huruf}>{tulisan1k}</Text>
      <Text style={styles.huruf}>{tulisan1l}</Text>
      <Text style={styles.huruf}>{tulisan1m}</Text>
      <Text style={styles.huruf}>{tulisan1n}</Text>
      <Text style={styles.huruf}>{tulisan1o}</Text>
    </View>
    
    </ScrollView>
  </View>

)}
export default GinjalDukungan


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
