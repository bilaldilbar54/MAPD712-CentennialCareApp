import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput, ImageBackground, ScrollView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class FindPatient extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchPatient: ''
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


  renderItem = (data) => {
    if (this.state.searchPatient === "") {
      return (
        <View style={styles.patientInfo}>
          <ScrollView>
            <Text style={styles.patientId}>PATIENT ID: {data.item.patientId}</Text>
            <Text style={styles.patientName}>NAME: {data.item.firstName} {data.item.lastName}</Text>
            <Text style={styles.textStyle}>AGE: {data.item.age} / {data.item.gender}</Text>
            <Text style={styles.textStyle}>WEIGHT: {data.item.weight}</Text>
            <Text style={styles.textStyle}>ADDRESS: {data.item.address}</Text>
            <Text style={styles.textStyle}>PHONE NO.: {data.item.phoneNumber}</Text>
            <Text style={styles.textStyle}>DATE OF BIRTH: {data.item.dateOfBirth}</Text>
            <Text style={styles.textStyle}>REPORT: {data.item.report}</Text>
            <Text style={styles.textStyle}>DOCTOR: {data.item.doctor}</Text>
            <Text style={styles.textStyle}>ASSIGNED: {data.item.ward}</Text>
            <Text style={styles.textStyle}>ADDMITTED ON: {data.item.createdAt}</Text>
            <Text style={styles.textStyle}>LAST UPDATED: {data.item.updatedAt}</Text>
          </ScrollView>
        </View>
      )
    }

    if (data.item.firstName.includes(this.state.searchPatient) || data.item.lastName.includes(this.state.searchPatient)) {
      return (
        <View style={styles.patientInfo}>
          <Text style={styles.patientId}>PATIENT ID: {data.item.patientId}</Text>
          <Text style={styles.patientName}>NAME: {data.item.firstName} {data.item.lastName}</Text>
          <Text style={styles.textStyle}>AGE: {data.item.age} / {data.item.gender}</Text>
          <Text style={styles.textStyle}>WEIGHT: {data.item.weight}</Text>
          <Text style={styles.textStyle}>ADDRESS: {data.item.address}</Text>
          <Text style={styles.textStyle}>PHONE NO.: {data.item.phoneNumber}</Text>
          <Text style={styles.textStyle}>DATE OF BIRTH: {data.item.dateOfBirth}</Text>
          <Text style={styles.textStyle}>REPORT: {data.item.report}</Text>
          <Text style={styles.textStyle}>DOCTOR: {data.item.doctor}</Text>
          <Text style={styles.textStyle}>ASSIGNED: {data.item.ward}</Text>
          <Text style={styles.textStyle}>ADDMITED ON: {data.item.createdAt}</Text>
          <Text style={styles.textStyle}>LAST UPDATED: {data.item.updatedAt}</Text>
        </View>
      )
    }
  }
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
          <Text style={styles.heading}>FIND A PATIENT:</Text>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder='Enter Patient Name'
              value={this.state.searchPatient}
              onChangeText={(text) => this.setState({ searchPatient: text })}>
            </TextInput>
            <View style={styles.searchIcon}>
              <MaterialCommunityIcons name="account-search-outline" size={20} color="#414142" />
            </View>
          </View>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.patientId}
            renderItem={item => this.renderItem(item)} />
          <View style={styles.footer}></View>
        </ImageBackground>
      </View>
    )
  };
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

  searchBar: {
    flexDirection: 'row',
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 20,
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

  patientInfo: {
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 20,
    marginLeft: 10,
    height: 260,
    width: 360,
    borderRadius: 10,
    paddingLeft: 14,
    paddingTop: 6,
  },

  patientId: {
    textDecorationLine: 'underline',
    marginTop: 5,
    color: '#414142',
    fontWeight: 'bold',
  },

  patientName: {
    marginTop: 3,
    color: '#414142',
    fontWeight: 'bold',
  },

  textStyle: {
    marginTop: 3,
    color: '#414142',
  },

  footer: {
    marginTop: 110,
  }
});