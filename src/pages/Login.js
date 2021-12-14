import React from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, StatusBar, Pressable, Text, View, Alert } from 'react-native';
import { getConnection } from "typeorm";

export default function Login(props) {
    const [usernameValue, onChangeText] = React.useState('teste');
    const [password, onChangePass] = React.useState('123456');

    const createDefaultUser = React.useCallback(async () => {
        const connection = getConnection();

        const firstUser = connection.getRepository("User").findOne({
            username: "teste",
            password: "123456",
        });
    
        if (!firstUser) { 
            connection.getRepository("User").save({
                username: "teste",
                password: "123456",
            });
        }
    });

    createDefaultUser();

    const verifyLoginAndRedirect = React.useCallback(async () => {
        const connection = getConnection();

        const userToConect = await connection.getRepository("User").findOne({
            username: usernameValue,
            password: password,
        });

        if(userToConect) {
            Alert.alert('Sucesso', 'Usuário acessado');
            return props.navigation.navigate("Island Cars");
        } else {
            Alert.alert('Erro', 'Usuário não existe');
        }
    });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

      <Image source={require('../../assets/images/islandLogo.png')}/>

      <TextInput style={styles.inputText}
        onChangeText={username => onChangeText(username)}
        value={usernameValue}
      />

      <TextInput style={styles.inputText}
        secureTextEntry={true}
        onChangeText={password => onChangePass(password)}
        value={password}
      />

    <View style={styles.buttonsView}>
        <Pressable style={styles.buttonCreate} onPress={()=>{props.navigation.navigate('Criar usuário')}}>
        <Image style={styles.imageLogin} source={require('../../assets/images/plusIcon.jpg')}/>
        <Text style={styles.text}>
            Criar usuário
        </Text>
        </Pressable>

        <Pressable style={styles.buttonLogin} onPress={verifyLoginAndRedirect}>
        <Image style={styles.imageLogin} source={require('../../assets/images/login.png')}/>
        <Text style={styles.text}>
            Login
        </Text>
        </Pressable>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputText:{
      padding: 10,
      borderRadius: 6,
      height: 40,
      width: 250,
      borderWidth: 1,
      marginTop: 30,
    },

    buttonLogin: {
      marginTop: 30,
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 7,
      paddingHorizontal: 45,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },

    buttonCreate: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
      },

    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },

    imageLogin: {
      width: 20,
      height: 20,
    },

    buttonsView: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      },
  });