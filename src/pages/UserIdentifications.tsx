import React, { useState } from 'react';

import{ 
    SafeAreaView,
    StyleSheet, 
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function UserIdentification(){
    const[isFocused, setisFocused] = useState(false);
    const[isFilled, setisFilled] = useState(false);
    const[name, setisName] = useState<string>();

    function handleinputBlur(){
        setisFocused(false);
        setisFilled(!! name);

    }
    function handleinputFocus(){
        setisFocused(true)
    }
    function handleinputchange( value: string){
        setisFilled( !! value);
        setisName(value);
    }

    return(
        <SafeAreaView style= {styles.container}>
            <KeyboardAvoidingView  style= {styles.content}>
                <View style= {styles.content}>

                    <View style= {styles.form}>
                        <View style= {styles.header}>

                            <Text style= {styles.emoji}>
                               { isFilled ? '😄' : '🧐'}
                            </Text>

                            <Text style= {styles.title}> 
                                Como podemos{'\n'} chamar você? 
                            </Text>
                        </View>

                        <TextInput
                            style= {[
                                styles.input,
                                (isFocused || isFilled)&&
                                {borderColor: colors.green}
                            ]}
                            placeholder= "Digite seu Nome"
                            onBlur={handleinputBlur}
                            onFocus={handleinputFocus}
                            onChangeText= {handleinputchange}
                        />

                        <View style= {styles.footer}>
                            <Button/>
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1, 
        width: '100%',
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        paddingHorizontal: 54, 
    },
    header:{
        alignItems: 'center',
    },
    emoji:{
        fontSize: 44,
    },
    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 30, 
        padding: 10,
        textAlign: 'center',
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 30, 
    },
    footer:{
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,



    }

});