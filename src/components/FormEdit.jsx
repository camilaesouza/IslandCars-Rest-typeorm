import React from "react";
import { Pressable, TextInput, StyleSheet, Alert, Text } from "react-native";

import api from "../services/api";

export default function FormEdit(props) {
  const car = props.car;

  const [model, setModel] = React.useState(car.model);
  const [brand, setBrand] = React.useState(car.brand);
  const [hp, setHp] = React.useState(car.hp);

  const handleSubmit = async () => {
    const editCar = {
      model,
      brand,
      hp,
    };

    const result = await api.patch(`/cars/${car.id}`, editCar)
    .then(function(response) {
      Alert.alert('Sucesso', 'Carro editado');

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
        <Text style={styles.buttonText}>Editar</Text>
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
    backgroundColor: '#d6bb09',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
  }
});
