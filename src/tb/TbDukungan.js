import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1 ="DUKUNGAN";
const tulisan1 = "Dukungan yang diperoleh dari diri sendiri, dapat diperoleh dengan mengkomunikasikan kepada :"; 
const tulisan1a = "1. Keluarga:";
const tulisan1b = "a. Diskusikan pengobatan dalam keluarga agar mendapat dukungan";
const tulisan1c = "b. Tetap beraktivitas normal";
const tulisan1d = "c. Ingatkan pada anggota keluarga bahwa TB dapat menular lewat udara dan percikan ludah, dan tidak menular apabila sudah mendapatkan pengobatan";
const tulisan1e = "2. Teman-teman";
const tulisan1f = "a. Berusaha untuk bersikap juju mengenai penyakit yang di derita dengan orang-orang terdekat, agar tetap dapat dukungan";
const tulisan1g = "b. Berusaha untuk menerima reaksi apapun yang akan muncul dengan sikap jujur tersebut";
const tulisan1h = "c. Jika dibutuhkan dapat meminta orang lain untuk memediasi";

const judul2   = "PENGAWAS MENELAN OBAT (PMO)";
const tulisan2 = "PMO merupakan seseorang yang secara sukarela membantu pasien TB dalam masa pengobatan hingga sembuh";

const judul3   = "SYARAT PMO";
const tulisan3 = "a. Sehat jasmani dan rohani serta bisa baca tulis";
const tulisan3a = "b. Bersedia membantu pasien dengan sukarela";
const tulisan3b = "c. Tinggal dekat dengan pasien";
const tulisan3c = "d. dikenal, dipercayai, dan disegani oleh pasien";
const tulisan3d = "e. disetujui oleh pasien dan petugas kesehatan";
const tulisan3e = "f. Bersedia di latih dan atau mendapat penyuluhan bersama-sama dengan pasien";

const judul4    = "SIAPA SAJA YANG MENJADI PMO ?";
const tulisan4  = "a. Angota keluarga atau kerabat yang tinggal serumah"; 
const tulisan4a = "b. Tetangga";
const tulisan4b = "c. Teman atau atasan (rekan kerja, supervisor, sipir, dan lain-lain)";
const tulisan4c = "d. Tokoh agama, tokoh masyarakat, atau tokoh adat";
const tulisan4d = "e. Kader kesehatan (Posyandu, juru pemantau jentik, KB, dan lain-lain)";
const tulisan4e = "f. Anggota organisasi keagamaan (majelis taklim, gereja, dan lain-lain)";
const tulisan4f = "g. Anggota organisasi Kemasyarakatan (PKK, LSM, dan lain-lain)";
const tulisan4g = "h. Petugas kesehatan (Bidan di desa, perawat, pekarya, sanitarian, juru imunisasi, dokter, dan lain-lain)";

const judul5    = "APA SAJA TUGAS PMO?";
const tulisan5  = "a. Memastikan pasien menelan obat sesuai aturan sejak awal pengobatan sampai sembuh";
const tulisan5a = "b. Mendampingi dan memberikan dukungan moral kepada pasien agar dapat menjalani pengobatan secara lengkap dan teratur";
const tulisan5b = "c. Mengingatkan pasien TB untuk mengambil obat dan periksa ulang dahak sesuai jadwal";
const tulisan5c = "d. Menemukan dan mengenali gejal-gejala efek samping OAT dan merujuk ke sarana pelayanan kesehatan";
const tulisan5d = "e. Mengisi kartu kontrol pengobatan pasien sesuai petunjuk";
const tulisan5e = "f. Memberikan penyuluhan tentang TB kepada keluarga pasien atau orang yang tinggal serumah";

const TbDukungan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Tb')}>
        <Text style={{textAlign: 'center', fontSize:30, fontWeight: 'bold'}}>
          Dukungan Pasien TB{' '}
          {/* <Text style={{color: '#03a9f4'}}>Registrasi Disini</Text> */}
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
    <View style={styles.area1}>
      <Text style={styles.judul}>{judul1}</Text>
      <Text style={styles.huruf}>{tulisan1}</Text>
      <Text></Text>
      <Text style={styles.huruf}>{tulisan1a}</Text>
      <Text style={styles.huruf}>{tulisan1b}</Text>
      <Text style={styles.huruf}>{tulisan1c}</Text>
      <Text style={styles.huruf}>{tulisan1d}</Text>
      <Text></Text>
      <Text style={styles.huruf}>{tulisan1e}</Text>
      <Text style={styles.huruf}>{tulisan1f}</Text>
      <Text style={styles.huruf}>{tulisan1g}</Text>
      <Text style={styles.huruf}>{tulisan1h}</Text>
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
        <Text style={styles.huruf}>{tulisan3c}</Text>
        <Text style={styles.huruf}>{tulisan3d}</Text>
        <Text style={styles.huruf}>{tulisan3e}</Text>
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
        <Text style={styles.huruf}>{tulisan5a}</Text>
        <Text style={styles.huruf}>{tulisan5b}</Text>
        <Text style={styles.huruf}>{tulisan5c}</Text>
        <Text style={styles.huruf}>{tulisan5d}</Text>
        <Text style={styles.huruf}>{tulisan5e}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default TbDukungan


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
