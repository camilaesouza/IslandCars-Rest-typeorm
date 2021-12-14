import React from 'react';
import { SafeAreaView, StyleSheet, Text, Linking, View, Image, Button } from 'react-native';

import { ActionSheetProvider } from '@expo/react-native-action-sheet'

import Header from '../components/Header'


export default function ShowCar(props) {
  const car = props.route.params.car;

  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
        <Header home={props}/>

        <View style={styles.view}>
          <Text style={styles.title}>Detalhes do carro</Text>

          <Text style={styles.label}>Carro número de identificação:</Text>
          <Text style={styles.text}>{car.id}</Text>

          <Text style={styles.label}>Modelo:</Text>
          <Text style={styles.text}>{car.model}</Text>

          <Text style={styles.label}>Marca:</Text>
          <Text style={styles.text}>{car.brand}</Text>

          <Text style={styles.label}>Hp:</Text>
          <Text style={styles.text}>{car.hp}</Text>

          <Image style={styles.image} source={require('../../assets/images/carroIcon.png')}/>
        </View>

      </SafeAreaView>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    view: {
      borderWidth: 1,
      borderRadius: 10,
      margin: 12,
      padding: 8,
      marginTop: 30,
    },

    image: {
      width: 150,
      height: 150,
      alignSelf: 'center',
    },

    title: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      color: 'green',
      marginBottom: 20,
    },

    label: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },

    text: {
      fontSize: 17,
      color: 'grey',
      marginBottom: 10,
    }
  });