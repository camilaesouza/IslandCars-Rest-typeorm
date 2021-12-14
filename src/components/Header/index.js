import React from 'react';
import { Pressable, Text, StyleSheet, View, Image, Button } from 'react-native';

import { useActionSheet } from '@expo/react-native-action-sheet';

export default function header(props){
    const { showActionSheetWithOptions } = useActionSheet();

    const options = ['Criar novo', 'Cancelar']
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 1;

    return(
        <View style={styles.container}>
             <Image style={styles.imageLogo} source={require('../../../assets/images/islandLogo.png')}/>
             
             <Pressable style={styles.button} onPress={() => showActionSheetWithOptions(
                {
                options,
                cancelButtonIndex,
                destructiveButtonIndex,
                },
                buttonIndex => {
                    if (buttonIndex == 0) {
                        props.home.navigation.navigate("Criar novo")
                    }
                },
            )}>
                <Image style={styles.imageMenu} source={require('../../../assets/images/menu.png')}/>
            </Pressable>
        </View> 
    );
}

const styles =  StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        backgroundColor : "#0000",
        borderTopColor:'#ebebeb',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:'#dcdcdc'
    },

    imageLogo: {
        marginLeft: 20,
        width: 50,
        height: 50,
    },

    imageMenu: {
        width: 25,
        height: 25,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 25,
      },
});