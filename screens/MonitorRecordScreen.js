import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MonitorRecords extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchPatient: ""
    }
  }

  componentDidMount() {
    this.fetchPatientsData();
  }

  fetchPatientsData = async () => {
    fetch("http://192.168.0.194:5000/patients")
      .then(response => response.json())
      .then((jsonResponse) => { this.setState({ data: jsonResponse }) })
      .catch(error => console.log(error))
  }

  monitorPatient(patId, patientFName, patientLName, patientWard, patientId, patientAge, patientGender, patientDob, patientDoc,
    patientWeight, patientPhoneNumber, patientAddress, patientReport) {
    this.props.navigation.navigate('MonitorPatient', { selectedId: patId, pFirstName: patientFName, pLastName: patientLName, 
      pWard: patientWard, pId: patientId, pAge: patientAge, pGender: patientGender, pDob: patientDob, pDoc: patientDoc, 
    pWeight: patientWeight, pPhoneNumber: patientPhoneNumber, pAddress: patientAddress, pReport: patientReport})
  }

  renderItem = (data) => {
    if (data.item.firstName === this.state.searchPatient || data.item.lastName === this.state.searchPatient) {
      return (
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.monitorPatient(data.item._id, data.item.firstName, data.item.lastName, data.item.ward,
            data.item.patientId, data.item.age, data.item.gender, data.item.dateOfBirth, data.item.doctor, data.item.weight, data.item.phoneNumber,
            data.item.address, data.item.report)}>
            <View style={styles.recordInfo}>
              <Text style={styles.patientId}>PATIENT - {data.item.patientId}</Text>
              <Text style={styles.patientName}>{data.item.firstName} {data.item.lastName}</Text>
              <Text style={styles.textStyle}>REPORT: {data.item.report}</Text>
              <Text style={styles.textStyle}>ADDMITED ON: {data.item.createdAt}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
        <Text style={styles.heading}>MONITOR RECORDS:</Text>
        <Text style={styles.numberLabel}>ENTER PATIENT NAME:</Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder='Richard Louis'
            value={this.state.searchPatient}
            onChangeText={(text) => this.setState({ searchPatient: text })}>
          </TextInput>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={24} color="#414142" />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.patientId}
            renderItem={item => this.renderItem(item)} />
        </View>
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

  numberLabel: {
    marginLeft: 13,
    marginTop: 26,
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
    height: 140,
    width: 360,
    borderRadius: 10,
    paddingLeft: 5,
    paddingTop: 15,
  },

  patientId: {
    textDecorationLine: 'underline',
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
    marginTop: 20,
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

  footer: {
    marginTop: 110,
  }
});
