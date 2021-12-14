import React from "react";
import { Pressable, Image, StyleSheet } from "react-native";

import api from "../services/api";

export default function ButtonEdit(props) {

  const goToEditPage = async () => {
    const result = await api.get(`/cars/${props.carId}`)
    .then(function(result) {
      return props.props.navigation.navigate("Editar", { car: result.data, props: props.props })
    });
  };

  return (
    <>
      <Pressable style={styles.button} onPress={goToEditPage}>
        <Image style={styles.imageIcon} source={require('../../assets/images/edit.png')}/>
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
