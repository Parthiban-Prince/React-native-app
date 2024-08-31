import { View, Text, StyleSheet, StatusBar, TextInput, } from 'react-native'
import React from 'react'

const Loginhere = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor="rgb(20,20,20)" />
            <View style={styles.content}>
                <Text style={styles.text}>Login to Heaven's Door</Text>
                <View style={styles.content3}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="white"
                        style={styles.input1} />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="white"
                        style={styles.input2} />
                    <Text style={styles.text}>Forgot Password</Text>
                </View>
                <View style={styles.content2}>
                    <Text style={styles.text1}>Sign In</Text>
                    <Text style={styles.lasttext}>
                        Create a Account
                        <Text style={styles.underline} onPress={() => alert("hello")}> Tap here</Text>
                    </Text>
                </View>

            </View>
        </View>
    )
}

export default Loginhere

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(20,20,20)",
        paddingVertical: "30%",
        paddingHorizontal: "2%"
    },
    content: {
        flex: 1,
    },
    text: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: "white",
        fontSize: 30
    },
    input1: {
        borderWidth: 1,
        borderColor: "white",
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        paddingLeft: 20
    },
    input2: {
        borderWidth: 1,
        borderColor: "white",
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        paddingLeft: 20
    },
    text1: {
        marginTop: "30%",
        borderWidth: 1,
        borderColor: "white",
        color: "white",
        fontSize: 30,
        width: "50%",
        textAlign: "center",
        backgroundColor: "blue",
        borderRadius: 10,
        marginBottom: 50
    },
    content2: {
        flex: 1,
        elevation: 2,
    },
    content3: {
        marginTop: 20,
    },
    lasttext: {
        color: "white",
        fontSize: 23
    },
    underline: {
        textDecorationLine: "underline"
    }
})