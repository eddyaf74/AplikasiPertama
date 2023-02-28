import React from 'react';
import {View, Text} from 'react-native';
const Title = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#373248',
          textAlign: 'center',
        }}>
        Telenursing App
      </Text>
      <Text style={{textAlign: 'center'}}>
      Telenursing Berbasis Budaya Pada Pasien Penyakit Kronik
      </Text>
      {/* <Text style={{marginTop: 20, textAlign: 'center', marginHorizontal: 50}}>
        Codeinsia membantu anda untuk belajar membuat aplikasi android pertama
        anda lewat kelas online
      </Text> */}
    </View>
  );
};

export default Title;
