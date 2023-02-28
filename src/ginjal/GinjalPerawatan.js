import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1 ="PENGOBATAN PADA PASIEN GAGAL GINJAL KRONIK";
const tulisan1 = "1. Cuci darah (hemodialisa)";
const tulisan1a = "2. Operasi";
const tulisan1b = "a. Pengambilan batu";
const tulisan1c = "b. Transplantasi/cangkok ginjal";
const tulisan1d = "3. Perubahan gaya hidup :";
const tulisan1e = "a. Batasi cairan yang masuk";
const tulisan1f = "b. Observasi antara cairan yang masuk dan keluar";
const tulisan1g = "4. Obat-obatan";
const tulisan1h = "a. Tekanan darah tinggi: Ramipril, Lisinopril, Valsartan, Irbesartan,Losartan";
const tulisan1i = "b. Ketidakseimbangan: diet rendah kalium (pisang, jeruk, tomat), Furosemide cairan";
const tulisan1j = "c. Kolesterol tinggi: Atorvastatin, Simvastatin";
const tulisan1k = "d. Gula darah tinggi: Insulin, Glikuidone";
const tulisan1l = "e. Anemia:Asam folat, Vitamin B12, Eriropoeitin";

const judul2 ="SAAT/SESUDAH TERKENA GAGAL GINJAL KRONIS";
const tulisan2 = "Kontrol rutin";
const tulisan2a = "Berhati-hati dalam mengkonsumsi obat-obatan";
const tulisan2b = "Pengobatan terhadap tekanan darah tinggi";
const tulisan2c = "Pengendalian gula darah, kolesterol";
const tulisan2d = "Penongkatan aktivitas fisik";
const tulisan2e = "Pengendalian berat badan";
const tulisan2f = "Diet rendah protein";
const tulisan2g = "Menjaga kebersihan kulit dengan menggunakan lotion";
const tulisan2h = "Menjaga kebersihan individu";

const judul3    = "PENGATURAN MAKANAN";
const tulisan3  = "Makanlah secara teratur dalam porsi kecil dan sering";
const tulisan3a = "Diet hemodialisa harus direncanakan perorangan";
const tulisan3b = "Nafsu makan pasien umumnya rendah sehingga perlu diperhatikan makanan kesukaan pasien";
const tulisan3c = "Untuk membatasi jumlah cairan, masakan lebih baik di buat dalam bentuk tidak berkuah, misalnya: di tumis, di kukus, di panggang, di bakar, di goreng";
const tulisan3d = "Bila ada edema (bengkak di kaki) atau tekanan darah tinggi, perlu mengurangi garam dan menghindari bahan makanan sumber natrium lainnya, seperti minuman bersoda, kaldu instan, ikan asin, telur asin, makanan yang diawerkan, vetsin, bumbu instan";
const tulisan3e = "Hidangkan makanan dalam bentuk yang menarik sehingga menimbulkan selera";
const tulisan3f = "Makanan tinggi protein seperti sirup, madu, permen. Dianjurkan sebagai penambah kalori tetapi hendaknya tidak diberikan dekat waktu makan karena mengurani nafsu makan (perlu dibatasi bila kadar gula darah tinggi)";



const GinjalPerawatan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Ginjal')}>
        <Text style={{textAlign: 'center', fontSize:26, fontWeight: 'bold'}}>
          Perawatan Pada Gagal Ginjal Kronik{' '}
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
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul2}</Text>
        <Text style={styles.huruf}>{tulisan2}</Text>
        <Text style={styles.huruf}>{tulisan2a}</Text>
        <Text style={styles.huruf}>{tulisan2b}</Text>
        <Text style={styles.huruf}>{tulisan2c}</Text>
        <Text style={styles.huruf}>{tulisan2d}</Text>
        <Text style={styles.huruf}>{tulisan2e}</Text>
        <Text style={styles.huruf}>{tulisan2f}</Text>
        <Text style={styles.huruf}>{tulisan2g}</Text>
        <Text style={styles.huruf}>{tulisan2h}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul3}</Text>
        <Text style={styles.huruf}>{tulisan3}</Text>
        <Text style={styles.huruf}>{tulisan3a}</Text>
        <Text style={styles.huruf}>{tulisan3b}</Text>
        <Text style={styles.huruf}>{tulisan3c}</Text>
        <Text style={styles.huruf}>{tulisan3d}</Text>
        <Text style={styles.huruf}>{tulisan3e}</Text>
        <Text style={styles.huruf}>{tulisan3f}</Text>
    </View>
    {/* <View style={styles.area1}>
        <Text style={styles.judul}>{judul4}</Text>
        <Text style={styles.huruf}>{tulisan4}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul5}</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
    </View> */}
    </ScrollView>
  </View>

)}
export default GinjalPerawatan


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
