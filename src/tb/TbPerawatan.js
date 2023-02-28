import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

const judul1    ="TATA CARA MENELAN OBAT TBC";
const tulisan1  = "1. Usahakan obat dapat di telan dan disuntikan dalam waktu maksimal 1 jam";
const tulisan1a = "2. Dianjurkan minum obat TBC dua jam setelah makan";
const tulisan1b = "3. Hindari minuman dan makanan yang mengandung susu, lemak, soda, atau suplemen bersamaan dengan obat atau kurang dari dua jam  sebelum/setelah minum obat";
const tulisan1c = "4. Catatlah semua efek samping yang di alami";
const tulisan1d = "5. Konsultasikan semua efek samping di alami ke TAK walaupun sudah teratasi";

const judul2 ="CARA MENGATASI EFEK SAMPING DARI OBAT";
const tulisan2 = "1. Cara mengatasi perubahan rasa pengecapan dan  air ludah berlebihan";
const tulisan2a = "a. Abaikan perubahan rasa ini";
const tulisan2b = "b. Tetaplah mengonsumsi makanan dan minuman agar tidak lemas dan mual muntah";
const tulisan2c = "c. Bila terasa sangat mengganggu bisa di coba untuk mengulum es batu atau mencicipi makanan yang bersifat asam atau asin, misalnya belimbing wuluh, mangga muda, garam, dan lain-lain";

const judul3="CARA MENGATASI MUAL DAN MUNTAH";
const tulisan3  = "2. Cara mengatasi mual dan muntah";
const tulisan3a = "a. Jangan makan porsi besar. Cobalah makan dengan porsi kecil dan lebih sering";
const tulisan3b = "b. Makan dan minum dengan perlahan. Kunyah makanan dengan baik untuk membantu pencernaan";
const tulisan3c = "c. Hindari makanan yang terlalu manis, berminyak, atau berlemak";
const tulisan3d = "d. Hindari aorma yang merangsang mual";
const tulisan3e = "e. Beristirahatlah setelah makan, jangan berbaring setelah makan";
const tulisan3f = "f. Ambil nafas dalam-dalam dan perlahan ketika merasakan sensasi mual, hirup udara segar";
const tulisan3g = "g. Alihkan perhatian ketika merasakan sensai mual. Cobalah teknik relaksasi seperti mendengarkan musik yang menyenangkan";
const tulisan3h = "h. Minum obat anti muntah yang sudah diberikan dokter. Berityahu dokter atau perawat jika mual dan muntah tidak mereda.";

const judul4    = "CARA MENGATASI SEMBELIT";
const tulisan4  = "3. Cara mengatasi sembelit (susah buang air besar)";
const tulisan4a = "4. Minumlah banyak cairan. Minuman jus buah dapat membantu untuk memperlancara sembelit";
const tulisan4b = "5. Tetaplah aktif, ketidakaktifan dan berbaring di tempat tidur dapat membuat sembelit lebih parah";
const tulisan4c = "6. Makanlah dengan pola makan yang seimbang dan tigkatkan asupan buah-buahan dan sayuran";
const tulisan4d = "7. Beritau dokter atau perawat jika belum buang air besar lebih dari 3 hari";

const judul5="CARA MENGATASI DIARE ";
const tulisan5 = "4. Cara mengatasi diare/mencret:";
const tulisan5a = "a. Makan dan minumlah seperti biasa";
const tulisan5b = "b. Perbanyak minum, jika diperlukan minumlah oralit";
const tulisan5c = "c. Apabila belum membaik, segera konsultasikan ke dokter";
const tulisan5d = "d. Bila daerah rektum terasa nyeri, laporkan kepada perawat dan gunakan krim tahan air di sekitar lokasi untuk melindungi kulit";

const TbPerawatan= () => {
  const navigation = useNavigation();
  return(
  
  <View style={styles.container}>
    <View>   
      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Tb')}>
        <Text style={{textAlign: 'center', fontSize:26, fontWeight: 'bold'}}>
          Perawatan Pada Pasien TB{' '}
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
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul2}</Text>
        <Text style={styles.huruf}>{tulisan2}</Text>
        <Text style={styles.huruf}>{tulisan2a}</Text>
        <Text style={styles.huruf}>{tulisan2b}</Text>
        <Text style={styles.huruf}>{tulisan2c}</Text>
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
        <Text style={styles.huruf}>{tulisan3g}</Text>
        <Text style={styles.huruf}>{tulisan3h}</Text>
    </View>

    <View style={styles.area1}>
        <Text style={styles.judul}>{judul4}</Text>
        <Text style={styles.huruf}>{tulisan4}</Text>
        <Text style={styles.huruf}>{tulisan4a}</Text>
        <Text style={styles.huruf}>{tulisan4b}</Text>
        <Text style={styles.huruf}>{tulisan4c}</Text>
        <Text style={styles.huruf}>{tulisan4d}</Text>
    </View>
    <View style={styles.area2}>
        <Text style={styles.judul}>{judul5}</Text>
        <Text style={styles.huruf}>{tulisan5}</Text>
        <Text style={styles.huruf}>{tulisan5a}</Text>
        <Text style={styles.huruf}>{tulisan5b}</Text>
        <Text style={styles.huruf}>{tulisan5c}</Text>
        <Text style={styles.huruf}>{tulisan5d}</Text>
    </View>
    </ScrollView>
  </View>

)}
export default TbPerawatan


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
