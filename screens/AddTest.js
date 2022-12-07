import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

export default class AddPatientTest extends React.Component {

    constructor(props) {
        super(props);
        const { route } = this.props;

        this.state = {
            patientId: route.params.selectedId,
            firstName: route.params.fName,
            lastName: route.params.lName,
            ward: route.params.wardd,
            nurseName: '',
            diastolicVal: 'Pending',
            systolicVal: 'Pending',
            respRateVal: 'Pending',
            bloodOxyLvlVal: 'Pending',
            heartBeatRateVal: 'Pending'
        }
    }

    postPatientsTest = async () => {
        fetch(`http://192.168.0.194:5000/patients/${this.state.patientId}/tests`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                ward: this.state.ward,
                nurseName: this.state.nurseName,
                diastolic: this.state.diastolicVal,
                systolic: this.state.systolicVal,
                respiratoryRate: this.state.respRateVal,
                bloodOxygenLevel: this.state.bloodOxyLvlVal,
                heartBeatRate: this.state.heartBeatRateVal,
            })
        });
    }

    submitTest = () => {
        this.postPatientsTest()
        this.clearData()
        this.props.navigation.navigate('MonitorRecords')
    }

    clearData = () => {
        this.setState({ nurseName: '' })
        this.setState({ diastolicVal: '' })
        this.setState({ systolicVal: '' })
        this.setState({ respRateVal: '' })
        this.setState({ bloodOxyLvlVal: '' })
        this.setState({ heartBeatRateVal: '' })
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
                    <Text style={styles.heading}>PATIENT TESTS ADDITION:</Text>
                    <View style={{ marginTop: 30 }}>
                        <View>
                            <Text style={styles.inputLabel}>Enter Nurse Name:</Text>
                            <TextInput
                                style={styles.input2}
                                placeholder='E.g. Nancy Carter'
                                onChangeText={(text) => this.setState({ nurseName: text })}>
                            </TextInput>
                        </View>
                        <Text style={styles.inputLabel}>BLOOD PRESSURE:</Text>
                        <View style={styles.inputStyle1}>
                            <TextInput
                                style={styles.input1}
                                placeholder='Systolic Pressure'
                                onChangeText={(text) => this.setState({ systolicVal: text })}>
                            </TextInput>
                            <TextInput
                                style={styles.input1}
                                placeholder='Diastolic Pressure'
                                onChangeText={(text) => this.setState({ diastolicVal: text })}>
                            </TextInput>
                        </View>
                        <View style={styles.inputStyle}>
                            <View>
                                <Text style={styles.inputLabel}>RESPIRATORY RATE:</Text>
                                <TextInput
                                    style={styles.input2}
                                    placeholder='Respiratory Rate (X/min)'
                                    onChangeText={(text) => this.setState({ respRateVal: text })}>
                                </TextInput>
                            </View>
                            <View>
                                <Text style={styles.inputLabel}>BLOOD OXYGEN LEVEL:</Text>
                                <TextInput
                                    style={styles.input2}
                                    placeholder='Blood Oxygen Level (X%)'
                                    onChangeText={(text) => this.setState({ bloodOxyLvlVal: text })}>
                                </TextInput>
                            </View>
                        </View>
                        <Text style={styles.inputLabel}>HEARTBEAT RATE:</Text>
                        <TextInput
                            style={styles.input2}
                            placeholder='Heartbeat Rate (X/min)'
                            onChangeText={(text) => this.setState({ heartBeatRateVal: text })}>
                        </TextInput>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => this.submitTest()}>
                                <Text style={{ color: '#414142' }}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footer}></View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
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
        width: 165,
        height: 45,
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

    inputStyle1: {
        justifyContent: 'space-around',
        flexDirection: 'row'
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
        marginTop: 60,
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
