import React from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, View, Alert, TextInput, Image } from 'react-native';
import { getConnection } from "typeorm";

export default function NewUser(props) {
    const [usernameCreate, setUsernameCreate] = React.useState("");
    const [passwordCreate, setPasswordCreate] = React.useState("");
    const [notShowPassword, setNotShowPassword] = React.useState(true);

    const handleSubmit = React.useCallback(async () => {
        const connection = getConnection();

        const hasUser = await connection.getRepository("User").findOne({
            username: usernameCreate,
            password: passwordCreate,
        });
    
        if (!!hasUser) { 
            Alert.alert('Erro', 'Usuário já cadastrado!');
        } else {
            connection.getRepository("User").save({
                username: usernameCreate,
                password: passwordCreate,
            });

            Alert.alert('Sucesso', 'Usuário cadastrado!');
            return props.navigation.navigate("Login");
        }
    });

    const changeNotShowPassword = () => {
        return notShowPassword ? setNotShowPassword(false) : setNotShowPassword(true);
    }

  return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/images/islandLogo.png')}/>

        <View style={styles.view}>
          <Text style={styles.title}> Criar usuário </Text>

            <TextInput
            defaultValue={usernameCreate}
            onChangeText={setUsernameCreate}
            placeholder="Usuário"
            style={styles.field}
            />

            <TextInput
                secureTextEntry={notShowPassword}
                defaultValue={passwordCreate}
                onChangeText={setPasswordCreate}
                placeholder="Senha"
                style={styles.field}
            />
            
            <Pressable style={styles.buttonShowPassword} onPress={changeNotShowPassword}>
                <Text style={styles.buttonText}>Mostrar/Ocultar senha</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Criar novo</Text>
            </Pressable>
        </View>
        
      </SafeAreaView>
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
    },

    field: {
        width: "100%", 
        backgroundColor: "lightgrey", 
        margin: 10, 
        padding: 10, 
        borderRadius: 10
      },

      buttonShowPassword: {
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 10,
      },

      button: {
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 10,
        marginTop: 50,
      },
    
      buttonText: {
        color: 'white',
      },

      logo: {
          width: 50,
          height: 50,
          margin: 10,
      }
  });