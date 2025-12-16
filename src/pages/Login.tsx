import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, 
        Onest_100Thin,
        Onest_200ExtraLight,
        Onest_300Light,
        Onest_400Regular,
        Onest_500Medium,
        Onest_600SemiBold,
        Onest_700Bold,
        Onest_800ExtraBold,
        Onest_900Black
    } from '@expo-google-fonts/onest';

export default function Login() {
    let [fontsLoaded] = useFonts({Onest_100Thin, Onest_200ExtraLight, Onest_300Light, Onest_400Regular, Onest_500Medium, Onest_600SemiBold, Onest_700Bold, Onest_800ExtraBold, Onest_900Black});

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.containerMain}
        >

            <View style={styles.leftSidePurple}>
                <Text style={[styles.titleJournal, styles.lightText]}>journal.</Text>
                <Text style={[styles.description, styles.lightText]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec eros feugiat, cursus justo vel, sodales libero. Sed elementum interdum odio, eu semper leo tempor eu. Sed quis nunc augue. Donec mattis turpis quis nulla scelerisque, vitae accumsan enim imperdiet. Sed eget est commodo, porta augue ac, consectetur nulla.</Text>
            </View>

            <View style={styles.rightSideForm}>
                <Text style={[styles.titleLogin, styles.purpleText]}>login</Text>

                <TextInput style={[styles.loginInput, styles.lightGreyText]} placeholder="email/username" />
                <TextInput style={[styles.loginInput, styles.lightGreyText]} placeholder="password" secureTextEntry />

                <TouchableOpacity style={[styles.button, styles.buttonPurple]}>
                    <Text style={[styles.buttonText, styles.lightText]}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[styles.actionTexts, styles.purpleText]}>forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[styles.actionTexts, styles.lightGreyText]}>create an account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonGoogleOutline]}>
                    <Text style={[styles.buttonText, styles.purpleText]}>LOGIN WITH GOOGLE</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const colors = {
    purple: '#A594F9',
    light: '#f5efff', 
    lightGrey: '#8C8991',
};

const styles = StyleSheet.create({

    purpleText: {
        color: colors.purple,
    },

    lightText: {
        color: colors.light,
    },

    lightGreyText: {
        color: colors.lightGrey,
    },

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
        padding: 50,
        gap: 5,
    },

    titleJournal: {
        fontFamily: 'Onest_700Bold',
        fontSize: 32,
    },

    description: {
        fontFamily: 'Onest_300Light',
        fontSize: 14,
    },
    
    rightSideForm: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },

    titleLogin: {
        fontFamily: 'Onest_700Bold',
        fontSize: 28,
        marginBottom: 50,
    },

    loginInput: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 10,
        fontFamily: 'Onest_400Regular',
        fontSize: 12,
    },

    button: {
        marginTop: 40,
        width: '70%',
        paddingVertical: 10,
        borderRadius: 50,
        marginBottom: 15,
    },

    buttonPurple: {
        backgroundColor: colors.purple,
    },

    buttonText: {
        fontFamily: 'Onest_700Bold',
        textAlign: 'center',
    },

    actionTexts: {
        fontSize: 12,
        fontFamily: 'Onest_300Light',
        margin: 5,
    },

    buttonGoogleOutline: {
        borderColor: colors.purple,
        borderWidth: 1,
    },

});