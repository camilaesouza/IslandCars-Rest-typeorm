import React from "react";
import { Pressable, Image, StyleSheet, Text} from "react-native";

import api from "../services/api";

export default function ButtonShow(props) {
  const goToCarShow = async () => {
    const result = await api.get(`/cars/${props.carId}`)
    .then(function(result) {
      return props.props.navigation.navigate("Visualizar", { car: result.data })
    });
  };

  return (
    <>
      <Pressable style={styles.button} onPress={goToCarShow}>
        <Image style={styles.imageIcon} source={require('../../assets/images/search.png')}/>
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
