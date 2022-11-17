import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default class AddPatients extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pId: '',
      pFName: '',
      pLName: '',
      pAge: '',
      pGender: '',
      pWeight: '',
      pAddress: '',
      pPhoneNumber: '',
      pDateOfBirth: '',
      pReport: '',
      pDoctor: '',
      pWard: ''
    }
  }

  postPatientsData = async () => {
    fetch("https://enterprise-healthrecords-api.herokuapp.com/patients", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        uniqueId: this.state.pId,
        patientId: this.state.pId,
        firstName: this.state.pFName,
        lastName: this.state.pLName,
        age: this.state.pAge,
        gender: this.state.pGender,
        weight: this.state.pWeight,
        address: this.state.pAddress,
        phoneNumber: this.state.pPhoneNumber,
        dateOfBirth: this.state.pDateOfBirth,
        report: this.state.pReport,
        doctor: this.state.pDoctor,
        ward: this.state.pWard,
      })
    });
  }

  submitData = () => {
    if (this.state.pId.trim().length !== 0 &&
      this.state.pFName.trim().length !== 0 &&
      this.state.pLName.trim().length !== 0 &&
      this.state.pAge.trim().length !== 0 &&
      this.state.pGender.trim().length !== 0 &&
      this.state.pWeight.trim().length !== 0 &&
      this.state.pAddress.trim().length !== 0 &&
      this.state.pPhoneNumber.trim().length !== 0 &&
      this.state.pDateOfBirth.trim().length !== 0 &&
      this.state.pReport.trim().length !== 0 &&
      this.state.pDoctor.trim().length !== 0 &&
      this.state.pWard.trim().length !== 0) {
      this.postPatientsData()
      Alert.alert("New Patient Has Been Added")
      this.clearData()
    }
    else {
      Alert.alert("All Input Fields Must Have Some Value")
    }
  }

  clearData = () => {
    this.setState({ pId: '' })
    this.setState({ pFName: '' })
    this.setState({ pLName: '' })
    this.setState({ pAge: '' })
    this.setState({ pGender: '' })
    this.setState({ pWeight: '' })
    this.setState({ pReport: '' })
    this.setState({ pAddress: '' })
    this.setState({ pPhoneNumber: '' })
    this.setState({ pDateOfBirth: '' })
    this.setState({ pDoctor: '' })
    this.setState({ pWard: '' })
  }

  render() {
    return (
      <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
        <Text style={styles.heading}>PATIENT ADDITION FORM:</Text>
        <ScrollView>
          <Text style={styles.inputLabel}>PATIENT ID:</Text>
          <TextInput style={styles.input1}
            value={this.state.pId}
            onChangeText={(text) => this.setState({ pId: text })}>
          </TextInput>
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>FIRST NAME:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g Richard'
                value={this.state.pFName}
                onChangeText={(text) => this.setState({ pFName: text })}>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>LAST NAME:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g Louis'
                value={this.state.pLName}
                onChangeText={(text) => this.setState({ pLName: text })}>
              </TextInput>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>AGE:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g 35'
                value={this.state.pAge}
                onChangeText={(text) => this.setState({ pAge: text })}>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>GENDER:</Text>
              <TextInput
                style={styles.input2}
                placeholder='i.e Male/Female'
                value={this.state.pGender}
                onChangeText={(text) => this.setState({ pGender: text })}>
              </TextInput>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>WEIGHT:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g 80Kg'
                value={this.state.pWeight}
                onChangeText={(text) => this.setState({ pWeight: text })}>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>REPORT:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g Heart Disease'
                value={this.state.pReport}
                onChangeText={(text) => this.setState({ pReport: text })}>
              </TextInput>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>ADDRESS:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g. 329 Yonge Street'
                value={this.state.pAddress}
                onChangeText={(text) => this.setState({ pAddress: text })}>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>PHONE NUMBER:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g. 644-877-5489'
                value={this.state.pPhoneNumber}
                onChangeText={(text) => this.setState({ pPhoneNumber: text })}>
              </TextInput>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <View>
              <Text style={styles.inputLabel}>DATE OF BIRTH:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g 10/12/1995'
                value={this.state.pDateOfBirth}
                onChangeText={(text) => this.setState({ pDateOfBirth: text })}>
              </TextInput>
            </View>
            <View>
              <Text style={styles.inputLabel}>DOCTOR:</Text>
              <TextInput
                style={styles.input2}
                placeholder='e.g. Dr. Lee'
                value={this.state.pDoctor}
                onChangeText={(text) => this.setState({ pDoctor: text })}>
              </TextInput>
            </View>
          </View>
          <Text style={styles.inputLabel}>WARD ASSIGNMENT:</Text>
          <TextInput
            style={styles.input1}
            placeholder='i.e. WARD A - Room: A123'
            value={this.state.pWard}
            onChangeText={(text) => this.setState({ pWard: text })}>
          </TextInput>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.clearData()}>
              <Text style={{ color: '#414142' }}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.submitData()}>
              <Text style={{ color: '#414142' }}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}></View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  heading: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 31,
    color: '#414142',
  },

  inputLabel: {
    alignSelf: 'center',
    marginTop: 15,
    color: '#414142',
    fontWeight: '700',
  },

  input1: {
    borderWidth: 0.9,
    width: 350,
    height: 45,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#D4DF38',
    color: '#414142',
    paddingLeft: 5,
  },

  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  input2: {
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

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },

  buttonStyle: {
    backgroundColor: '#D4DF38',
    borderWidth: 0.9,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 165,
    height: 45,
    borderColor: '#D4DF38',
  },

  footer: {
    marginTop: 40,
  }
});
