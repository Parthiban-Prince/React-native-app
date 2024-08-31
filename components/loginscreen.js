import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, TextInput, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

const Loginscreen = () => {
    const eliza = { uri: "https://firebasestorage.googleapis.com/v0/b/food-b96c2.appspot.com/o/eliza-ibarra-keiran-lee-5.jpg?alt=media&token=d310a375-e357-4704-a229-950f989b9342" }

    const handleclick = () => {
        alert("hello")

    }
    return (
        <View style={styles.fullscreen}>

            <ImageBackground source={eliza} style={styles.background} resizeMode="cover">
                <View style={styles.textstyling}>
                    <TouchableOpacity onPress={handleclick}>
                        <Text style={styles.Text} >Heaven's door</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Loginscreen

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
    },
    background: {
        width: "100%",
        height: "100%",
        opacity: 0.85,
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    textstyling: {
        position: "relative",
        bottom: "5%",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    Text: {
        fontSize: 50,
        borderWidth: 2,
        borderColor: "white",
        color: "#ff006e",
        backgroundColor: "#000000",
        borderRadius: 10,
    },
    modals: {
        justifyContent: "flex-end",
        position: "relative",
        width: "100%",
        height: "10%",
        borderRadius: 10,
        padding: 20,
        backgroundColor: "white"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    }, button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})