import React from 'react';
import { SafeAreaView, StyleSheet, Text, Linking, View, Image } from 'react-native';

import { ActionSheetProvider } from '@expo/react-native-action-sheet'

import Header from '../components/Header';
import Form from "../components/Form";

export default function NewCar(props) {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
        <Header home={props}/>

        <View style={styles.view}>
          <Text style={styles.title}> Criar novo carro </Text>

          <Form route={props}/>
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
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
        color: 'green',
    }
  });