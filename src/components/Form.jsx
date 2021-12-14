import React from "react";
import { Pressable, TextInput, StyleSheet, Alert, Text } from "react-native";

import api from "../services/api";

export default function Form(props) {
  const [model, setModel] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [hp, setHp] = React.useState("");

  const handleSubmit = async () => {
    const newCar = {
      model,
      brand,
      hp,
    };

    const result = await api.post("/cars", newCar)
    .then(function() {
      Alert.alert('Sucesso', 'Novo carro criado');
      return props.route.navigation.navigate("Island Cars")
    });

  };

  return (
    <>
      <TextInput
        defaultValue={model}
        onChangeText={setModel}
        placeholder="Modelo"
        style={styles.field}
      />
      <TextInput
        defaultValue={brand}
        onChangeText={setBrand}
        placeholder="Marca"
        style={styles.field}
      />
      <TextInput
        defaultValue={hp}
        onChangeText={setHp}
        placeholder="hp"
        style={styles.field}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Criar novo</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  field: {
    width: "100%", 
    backgroundColor: "lightgrey", 
    margin: 10, 
    padding: 10, 
    borderRadius: 10
  },

  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
  }
});
