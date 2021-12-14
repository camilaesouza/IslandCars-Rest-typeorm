import React, { useContext } from "react";
import { Alert, Pressable, Image, StyleSheet } from "react-native";

import api from "../services/api";

import { HomeContext } from "../pages/home";

export default function ButtonDelete(props) {
  const confirmDelete = () => {
    Alert.alert("Confirmação", "Deseja realmente deletar esse carro?", [
      {
        text: "Sim",
        onPress: () => deleteCar(),
      },
      {
        text: "Não",
        style: "cancel",
      }
    ]);
  };

  const featchData = useContext(HomeContext);

  const deleteCar = async () => {
    const result = await api.delete(`/cars/${props.carId}`)
    .then(function(result) {
        Alert.alert("Sucesso", "Carro deletado");
        featchData();
    });
  };

  return (
    <>
      <Pressable style={styles.button} onPress={confirmDelete}>
        <Image style={styles.imageIcon} source={require('../../assets/images/delete.png')}/>
      </Pressable>
    </>
  );
}

const styles =  StyleSheet.create({
  imageIcon: {
      width: 35,
      height: 35,
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: "flex-end",
    textAlign: "center",
  }
});
