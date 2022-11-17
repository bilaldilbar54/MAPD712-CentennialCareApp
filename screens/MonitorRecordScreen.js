import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MonitorRecords extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchPatient: '0'
    }
  }

  componentDidMount() {
    this.fetchPatientsData();
  }

  fetchPatientsData = async () => {
    fetch("https://enterprise-healthrecords-api.herokuapp.com/patients")
      .then(response => response.json())
      .then((jsonResponse) => { this.setState({ data: jsonResponse })})
      .catch(error => console.log(error))
  }

  addTest ()
    {
      this.props.navigation.navigate('AddTest', {patientId: this.state.searchPatient})
    }

  renderItem = (data) => {
    if (data.item.patientId == this.state.searchPatient) {
      return (
        <ScrollView>
          <View>
            <Text style={styles.patientId}>PATIENT - {data.item.patientId}</Text>
            <Text style={styles.patientName}>{data.item.firstName} {data.item.lastName}</Text>
            <Text style={styles.textStyle}>AGE: {data.item.age} / {data.item.gender}</Text>
            <Text style={styles.textStyle}>WEIGHT: {data.item.weight}</Text>
            <Text style={styles.textStyle}>BLOOD PRESSURE: {data.item.Bp}</Text>
            <Text style={styles.textStyle}>RESPIRATORY RATE: {data.item.Rrate}</Text>
            <Text style={styles.textStyle}>BLOOD OXYGEN LEVEL: {data.item.BLO}</Text>
            <Text style={styles.textStyle}>HEARTBEAT RATE: {data.item.HBrate}</Text>
            <Text style={styles.textStyle}>REQUIRED TESTS:</Text>
            <Text style={styles.textStyle}>
              *BLOOD SUGAR LEVEL →
              <Text style={styles.testStatus}> Pending</Text>
            </Text>
            <Text style={styles.textStyle}>
              *XRAY →
              <Text style={styles.testStatus}> Completed</Text>
            </Text>
            <Text style={styles.textStyle}>REPORT: {data.item.report}</Text>
            <Text style={styles.textStyle}>ASSIGNED ROOM: {data.item.ward}</Text>
            <Text style={styles.textStyle}>ADDMITED ON: {data.item.createdAt}</Text>
            <Text style={styles.textStyle}>LAST UPDATED: {data.item.updatedAt}</Text>
          </View>
        </ScrollView>
      )
    }
  }

  render(){
    return (
      <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
        <Text style={styles.heading}>MONITOR RECORDS:</Text>
        <Text style={styles.numberLabel}>ENTER PATIENT NO.:</Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder='101101'
            onChangeText={(text) => this.setState({ searchPatient: text })}>
          </TextInput>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={24} color="#414142" />
          </TouchableOpacity>
        </View>
        <View style={styles.recordInfo}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.patientId}
            renderItem={item => this.renderItem(item)} />
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.addTest()}>
              <Text style={{ color: '#D4DF38' }}>ADD TESTS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={{ color: '#D4DF38' }}>ADD/UPDATE INFO</Text>
            </TouchableOpacity>
          </View>
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
    height: 520,
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
