import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Onest_400Regular } from '@expo-google-fonts/onest';

export default function Login() {
    let [fontsLoaded] = useFonts({Onest_400Regular});

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.containerMain}
        >

            <View style={styles.leftSidePurple}>
                <Text style={styles.titleJournal}>journal.</Text>
                <Text style={styles.description}>Lorem ipsum dolor...</Text>
            </View>

            {/* --- LADO DIREITO (FORMULÁRIO) --- */}
            <View style={styles.rightSideForm}>
                <Text style={styles.titleLogin}>login</Text>

                {/* Inputs */}
                <TextInput style={styles.input} placeholder="email/username" />
                <TextInput style={styles.input} placeholder="password" secureTextEntry />

                {/* Botão Principal */}
                <TouchableOpacity style={styles.buttonPurple}>
                    <Text style={styles.buttonTextWhite}>LOGIN</Text>
                </TouchableOpacity>

                {/* Links */}
                <TouchableOpacity>
                    <Text style={styles.forgotText}>forgot your password?</Text>
                </TouchableOpacity>

            {/* ... Divisor OR ... */}

                {/* Botão Google */}
                <TouchableOpacity style={styles.buttonGoogleOutline}>
                    <Text style={styles.buttonTextPurple}>LOGIN WITH GOOGLE</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const colors = {
    purple: '#A594F9',
    light: '#f5efff', 
};

const styles = StyleSheet.create({

    containerMain: {
        flex: 1, 
        backgroundColor: colors.light,
        alignItems: 'stretch', 
        justifyContent: 'center', 
        flexDirection: 'row',
    },

    leftSidePurple: {
        backgroundColor: colors.purple,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    titleJournal: {
        color: '#f5efffff',
        fontFamily: 'Onest_400Regular',
    },
    
    rightSideForm: {
        flex: 1, 
        justifyContent: 'center', 
    },

    titulo: {
        fontSize: 32, // Tamanho da fonte (não precisa de 'px')
        color: '#7B61FF', // Aquele roxo bonito do seu design
        fontWeight: 'bold',
        marginBottom: 20, // Margem em baixo
    },

    caixaInput: {
        width: '80%', // 80% da largura da tela
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10, // Borda arredondada
    }

});