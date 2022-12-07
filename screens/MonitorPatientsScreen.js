import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, FlatList, Modal, ScrollView, Image, RefreshControl } from 'react-native';

export default class MonitorPatient extends React.Component {

  constructor(props) {
    super(props);
    const { route } = this.props;

    this.state = {
      data: [],
      tests: [],
      patientId: route.params.selectedId,
      pId: route.params.pId,
      firstName: route.params.pFirstName,
      lastName: route.params.pLastName,
      age: route.params.pAge,
      gender: route.params.pGender,
      dateOfBirth: route.params.pDob,
      doctor: route.params.pDoc,
      ward: route.params.pWard,
      newWeight: route.params.pWeight,
      newAddress: route.params.pAddress,
      newReport: route.params.pReport,
      newPhoneNumber: route.params.pPhoneNumber,
      modalVisible: false,
    }
  }

  componentDidMount() {
    this.fetchPatientsData();
    this.fetchPatientTest();
  }

  fetchPatientsData = async () => {
    fetch(`http://192.168.0.194:5000/patients/${this.state.patientId}`)
      .then(response => response.json())
      .then((jsonResponse) => { this.setState({ data: jsonResponse }) })
      .catch(error => console.log(error))
  }

  fetchPatientTest = async () => {
    fetch(`http://192.168.0.194:5000/patients/${this.state.patientId}/tests`)
      .then(response => response.json())
      .then((jsonResponse) => { this.setState({ tests: jsonResponse }) })
      .catch(error => console.log(error))
  }

  updatePatientsData = async () => {
    fetch(`http://192.168.0.194:5000/patients/${this.state.patientId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        patientId: this.state.pId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        gender: this.state.gender,
        weight: this.state.newWeight,
        address: this.state.newAddress,
        phoneNumber: this.state.newPhoneNumber,
        dateOfBirth: this.state.dateOfBirth,
        report: this.state.newReport,
        doctor: this.state.doctor,
        ward: this.state.ward,
      })
    });
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  updateButton() {
    this.updatePatientsData();
    this.setState({ modalVisible: false });
    this.props.navigation.navigate('MonitorRecords')
  }

  addTest() {
    this.props.navigation.navigate('AddTest', { selectedId: this.state.patientId, fName: this.state.firstName, lName: this.state.lastName, wardd: this.state.ward })
  }

  renderItem = (data) => {
    {
      return (
        <View>
          <Text style={styles.patientId}>PATIENT - {data.item.patientId}</Text>
          <Text style={styles.patientName}>{data.item.firstName} {data.item.lastName}</Text>
          <Text style={styles.textStyle}>AGE: {data.item.age} / {data.item.gender}</Text>
          <Text style={styles.textStyle}>WEIGHT: {data.item.weight}</Text>
          <Text style={styles.textStyle}>REPORT: {data.item.report}</Text>
          <Text style={styles.textStyle}>ASSIGNED ROOM: {data.item.ward}</Text>
          <Text style={styles.textStyle}>ADDMITED ON: {data.item.createdAt}</Text>
          <Text style={styles.textStyle}>LAST UPDATED: {data.item.updatedAt}</Text>
        </View>
      )
    }
  }

  renderTest = (tests) => {
    {
      return (
        <ScrollView>
          <View style={styles.testInfo}>
            <Text style={styles.textStyle}>NURSE: {tests.item.nurseName}</Text>
            <Text style={styles.textStyle}>BLOOD PRESSURE: {tests.item.systolic} / {tests.item.diastolic}mm HG</Text>
            <Text style={styles.textStyle}>RESPIRATORY RATE: {tests.item.respiratoryRate} breaths/min</Text>
            <Text style={styles.textStyle}>BLOOD OXYGEN LEVEL: {tests.item.bloodOxygenLevel}mm HG</Text>
            <Text style={styles.textStyle}>HEARTBEAT RATE: {tests.item.heartBeatRate} beats/min</Text>
            <Text style={styles.textStyle}>ADDED ON: {tests.item.createdAt}</Text>
          </View>
        </ScrollView>
      )
    }
  }

  renderUpdate = (data) => {
    {
      return (
        <View>
          <Text style={styles.heading3}> UPDATE PATIENT INFO:</Text>
          <Image
            style={styles.image}
            source={require('../assets/patient.png')} />
          <Text style={styles.patientId}>PATIENT ID - {data.item.patientId}</Text>
          <Text style={styles.patientName}>NAME: {data.item.firstName} {data.item.lastName}</Text>
          <Text style={styles.textStyle}>AGE: {data.item.age} / {data.item.gender}</Text>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>WEIGHT:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.weight}
              onChangeText={(text) => this.setState({ newWeight: text })}>
            </TextInput>
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>REPORT:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.report}
              onChangeText={(text) => this.setState({ newReport: text })}>
            </TextInput>
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>ADDRESS:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.address}
              onChangeText={(text) => this.setState({ newAddress: text })}>
            </TextInput>
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>PHONE NUMBER:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.phoneNumber}
              onChangeText={(text) => this.setState({ newPhoneNumber: text })}>
            </TextInput>
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>ASSIGNED ROOM:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.ward}
              onChangeText={(text) => this.setState({ ward: text })}>
            </TextInput>
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
        <Text style={styles.heading}>MONITOR PATIENT</Text>
        <View style={styles.recordInfo}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.patientId}
            renderItem={item => this.renderItem(item)} />
        </View>
        <Text style={styles.heading2}>TEST RECORDS:</Text>
        <FlatList
          style={styles.flatList}
          data={this.state.tests}
          keyExtractor={item => item._id}
          renderItem={item => this.renderTest(item)} />
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.addTest()}>
            <Text style={{ color: '#D4DF38' }}>ADD TESTS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.toggleModal(true)}>
            <Text style={{ color: '#D4DF38' }}>UPDATE INFO</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <FlatList
              data={this.state.data}
              keyExtractor={item => item.patientId}
              renderItem={item => this.renderUpdate(item)} />
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.input4}
                onPress={() => { this.toggleModal(!this.state.modalVisible) }}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.input4}
                onPress={() => this.updateButton()}>
                <Text style={styles.text}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.footer}></View>
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

  heading2: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 25,
    color: '#414142',
  },

  heading3: {
    marginTop: 10,
    fontSize: 31,
    color: '#414142',
    alignSelf: 'center'
  },

  numberLabel: {
    marginLeft: 13,
    marginTop: 26,
  },

  image: {
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: "40%",
    height: "35%",
    alignSelf: 'center'
  },

  searchBar: {
    flexDirection: 'row',
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 2,
    height: 46,
    width: 320,
    borderRadius: 10,
  },

  input: {
    color: '#414142',
    paddingLeft: 14,
    width: 280,
  },

  searchIcon: {
    paddingTop: 10,
    paddingLeft: 0,
  },

  recordInfo: {
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 20,
    marginLeft: 10,
    height: 240,
    width: 360,
    borderRadius: 10,
    paddingLeft: 5,
    paddingTop: 15,
  },

  testInfo: {
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 10,
    marginLeft: 10,
    height: 170,
    width: 360,
    borderRadius: 10,
    paddingLeft: 5,
    paddingTop: 15,
  },

  patientId: {
    marginTop: 8,
    color: '#414142',
    fontWeight: 'bold',
    fontSize: 21,
  },

  patientName: {
    marginTop: 5,
    color: '#414142',
    fontWeight: 'bold',
    fontSize: 20,
  },

  textStyle: {
    marginTop: 5,
    color: '#414142',
    fontSize: 15,
    fontWeight: 'bold',
  },

  testStyle: {
    flexDirection: 'row'
  },

  testStatus: {
    marginTop: 5,
    color: 'red'
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20
  },

  buttonStyle: {
    backgroundColor: '#414142',
    borderWidth: 0.9,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 135,
    height: 45,
    textAlign: 'center',
  },

  modal: {
    alignSelf: 'center',
    width: '97%',
    height: '75%',
    borderColor: '#414142',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'rgba(212,223,55,1)',
    borderRadius: 10,
    marginTop: 120,
    padding: 10,
  },

  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  footer: {
    marginTop: 110,
  },

  input2: {
    borderWidth: 0.9,
    width: 165,
    height: 45,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#414142',
    color: '#D4DF38',
    paddingLeft: 5,
    marginBottom: 10
  },

  input3: {
    marginLeft: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 0.9,
    padding: 5,
    marginTop: 5,
    color: '#D4DF38',
    backgroundColor: '#414142',
    borderColor: '#414142',
    paddingLeft: 10,
    paddingRight: 10,
  },

  input4: {
    marginLeft: 10,
    fontWeight: 'bold',
    borderRadius: 25,
    borderWidth: 0.9,
    padding: 5,
    marginTop: 5,
    color: '#D4DF38',
    backgroundColor: '#414142',
    width: 90,
    height: 35,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    borderColor: '#414142',
  },

  testList: {
    marginBottom: 10,
    height: 150,
  },

  flatList: {
    height: 200,
  },

  text: {
    color: '#D4DF38',
    alignSelf: 'center'
  }
});
