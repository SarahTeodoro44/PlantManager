import React from 'react';

import{ 
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';


export function Confirmation(){
    const navagation = useNavigation();

    function handleConfirmation(){
     
        navagation.navigate('Confirmation');
    }
    return(
        <SafeAreaView style={styles.container}>
        
            <View  style={styles.content}>
                <Text  style={styles.emoji}>
                    😊
                </Text>
                <Text style={styles.title}>
                    Prontinho 
                </Text>

                <Text  style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado!
                </Text>
                <View  style={styles.footer}>
                    <Button
                        title="Começar"
                        onPress={handleConfirmation}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content:{
        flex:1,
        justifyContent: 'center',
        width: '100%',
        padding:30,

    },
    emoji:{
        fontSize: 75, 
        textAlign: 'center',

    },
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading, 
        lineHeight: 38,
        marginTop: 15,
        marginBottom: 10,
    },
    subtitle:{
        fontFamily: fonts.text, 
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 10,
        color: colors.heading,
        marginBottom: 10, 
    },
    footer:{
        width: '100%', 
        paddingHorizontal: 50,
        marginTop: 20,


    },

})