import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const tulisan1 = "Gangguan fungsi ginjal yang menurun secara cepat dan fungsi tersebut tidak dapat kembali seperti semula, yaitu di mana ginjal mengalami kegagalan dalam mempertahankan keseimbangan cairan dan elektrolit";
const tulisan2 = "Penyebab penyakit ginjal kronis yaitu: Diabetes melitus , Lupus (SLE) Tekanan darah tinggi Peradangan atau infeksi ginjal Batu saluran kemih Penggunaan secara rutin obat-obatan tertentu seperti aspirin, ibuprofen.";
const tulisan3 = "Kencing sedikit (<400 ml/24 jam), Kulit terasa gatal, Kulit bersisik dan kering, Kram dan kejang otot, Berat badan menurun, Kehilangan mafsu makan, Merasa lemah, Mual dan muntah,Sesak nafas, Nyeri pada dada";
const tulisan4 = "1. Faktor risiko tidak dapt dimodifikasi:";
const tulisan4a = "- Riwayat keluarga penyakit ginjal";
const tulisan4b = "- Kelahiran prematur";
const tulisan4c = "- Trauma di daerah abdomen";
const tulisan4d = "- Jenis penyakit tertentu: Lupus, AIDS, hepatitis, dan lain-lain";
const tulisan4e = "2. Faktor risiko dapat dimodifikasi:";
const tulisan4f = "- Diabetes (tipe 2)";
const tulisan4g = "- Hipertensi";
const tulisan4h= "- Konsumsi obat pereda nyeri";
const tulisan4i = "- Narkoba, psikotropika dan zat adiktif"; 
const tulisan4j = "- Radang ginjal";

const tulisan5 = "a. Sindrom uremia, urea di absorbsi kembali peredaran darah dan terakumulasi di darah";
const tulisan5a = "1. Sistem saraf pusat: kelelahan, gangguan memori, insomnia, nyeri kepala, kebingungan, infeksi pada sistem saraf pusat";
const tulisan5b = "2. Sistem saraf perifer: kram, neuropati perifer";
const tulisan5c = "3. Gastrointestinal: anoreksia, mual/muntah, ulkus gastrointestinal";
const tulisan5d = "4. HematologiL anemia, gangguan homeostatsis";
const tulisan5e = "5. Kardiovaskular: hipertensi, atherosklerosis, penyakit arteri koroner, perikarditis, edema pulmonal";
const tulisan5f = "6. Kulit: gatal-gatal, kulit kering, uremic frost (sekresi urea yang berlebihan melalui kelenkar keringat)";
const tulisan5g = "7. Nutrisi: malnutrisi, berat badan  menurun, katabolisme otot";

const GinjalPengenalan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Ginjal')}>
        <Text style={{textAlign: 'center', fontSize:28, fontWeight: 'bold'}}>
          Pengenalan Penyakit Ginjal Kronik{' '}
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
        <Text style={styles.huruf}>{tulisan4a}</Text>
        <Text style={styles.huruf}>{tulisan4b}</Text>
        <Text style={styles.huruf}>{tulisan4c}</Text>
        <Text style={styles.huruf}>{tulisan4d}</Text>
        <Text style={styles.huruf}>{tulisan4e}</Text>
        <Text style={styles.huruf}>{tulisan4f}</Text>
        <Text style={styles.huruf}>{tulisan4g}</Text>
        <Text style={styles.huruf}>{tulisan4h}</Text>
        <Text style={styles.huruf}>{tulisan4i}</Text>
        <Text style={styles.huruf}>{tulisan4j}</Text>
    </View>

    <View style={styles.area2}>
        <Text style={styles.judul}>KOMPLIKASI</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
        <Text style={styles.huruf}>{tulisan5a}</Text>
        <Text style={styles.huruf}>{tulisan5b}</Text>
        <Text style={styles.huruf}>{tulisan5c}</Text>
        <Text style={styles.huruf}>{tulisan5d}</Text>
        <Text style={styles.huruf}>{tulisan5e}</Text>
        <Text style={styles.huruf}>{tulisan5f}</Text>
        <Text style={styles.huruf}>{tulisan5g}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default GinjalPengenalan


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
