import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function AddPatientTest() {

    const route = useRoute();
    return (
        <View>
            <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
                <Text style={styles.heading}>PATIENT TESTS:</Text>
                <ScrollView>
                    <Text style={styles.inputLabel}>PATIENT ID:</Text>
                    <TextInput style={styles.input1}> PTN - {route.params?.patientId}</TextInput>
                    <View style={styles.inputStyle}>
                        <Text style={styles.inputLabel}>BLOOD PRESSURE:</Text>
                        <TextInput
                            style={styles.input2}>
                        </TextInput>
                    </View>
                    <View style={styles.inputStyle}>
                        <View>
                            <Text style={styles.inputLabel}>RESPIRATORY RATE:</Text>
                            <TextInput
                                style={styles.input2}>
                            </TextInput>
                        </View>
                        <View>
                            <Text style={styles.inputLabel}>BLOOD OXYGEN LEVEL:</Text>
                            <TextInput
                                style={styles.input2}>
                            </TextInput>
                        </View>
                    </View>
                    <Text style={styles.inputLabel}>HEARTBEAT RATE:</Text>
                    <TextInput
                        style={styles.input1}>
                    </TextInput>

                    <Text style={styles.inputLabel}>ADDITIONAL NOTES:</Text>
                    <TextInput
                        style={styles.input3}>
                    </TextInput>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity
                            style={styles.buttonStyle}>
                            <Text style={{ color: '#414142' }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}></View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 850,
    },

    heading: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 31,
        color: '#414142',
    },

    inputLabel: {
        alignSelf: 'center',
        marginTop: 20,
        color: '#414142',
        fontWeight: '700',
    },

    input1: {
        borderWidth: 0.9,
        width: 350,
        height: 56,
        alignSelf: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        backgroundColor: '#D4DF38',
        color: '#414142',
        paddingLeft: 5,
    },


    input3: {
        borderWidth: 0.9,
        width: 350,
        height: 120,
        alignSelf: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        backgroundColor: '#D4DF38',
        color: '#414142',
        paddingLeft: 5,
    },

    inputStyle: {
        alignSelf: 'center',
    },

    input2: {
        borderWidth: 0.9,
        width: 365,
        height: 56,
        alignSelf: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        backgroundColor: '#D4DF38',
        color: '#414142',
        paddingLeft: 5,
    },

    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },

    buttonStyle: {
        backgroundColor: '#D4DF38',
        borderWidth: 0.9,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 165,
        height: 56,
        borderColor: '#D4DF38',
    },

    footer: {
        marginTop: 110,
      }
});
