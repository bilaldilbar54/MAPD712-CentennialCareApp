import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, FlatList } from 'react-native';

export default class CriticalPatient extends React.Component {

  constructor(props) {
    super(props);
    const { route } = this.props;

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.fetchPatientsData();
  }

  fetchPatientsData = async () => {
    fetch(`http://192.168.0.194:5000/patients/tests`)
      .then(response => response.json())
      .then((jsonResponse) => { this.setState({ tests: jsonResponse}) })
      .catch(error => console.log(error))
  }

  renderItem = (data) => {
    if (data.item.respiratoryRate > 150 || data.item.respiratoryRate < 12 || data.item.bloodOxygenLevel < 94 || data.item.bloodOxygenLevel > 102 
      || data.item.systolic > 140 || data.item.systolic < 100 || data.item.diastolic > 100 || data.item.diastolic < 60 || data.item.heartBeatRate > 85
      || data.item.heartBeatRate < 65 ) {
    
    return(
      <View style={styles.criticalInfo}>
          <ScrollView>
            <Text style={styles.patientName}>NAME: {data.item.firstName} {data.item.lastName}</Text>
            <Text style={styles.textStyle}>NURSE: {data.item.nurseName}</Text>
            <Text style={styles.textStyle}>BLOOD PRESSURE: {data.item.systolic} / {data.item.diastolic}mm HG</Text>
            <Text style={styles.textStyle}>RESPIRATORY RATE: {data.item.respiratoryRate} breaths/min</Text>
            <Text style={styles.textStyle}>BLOOD OXYGEN LEVEL: {data.item.bloodOxygenLevel}mm HG</Text>
            <Text style={styles.textStyle}>HEARTBEAT RATE: {data.item.heartBeatRate} beats/min</Text>
            <Text style={styles.textStyle}>STATUS: 
              <Text style={{color: 'red'}}> CRITICAL</Text>
            </Text>
            <Text style={styles.textStyle}>WARD: {data.item.ward}</Text>
          </ScrollView>
        </View>
    )
  }
}

  render() {
    return (
      <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
        <Text style={styles.heading}>CRITICAL PATIENTS:</Text>
        <Text style={styles.textLabel}>FOLLOWING PATIENTS NEEDS ATTENTION:</Text>
        <FlatList
            data={this.state.tests}
            keyExtractor={item => item._id}
            renderItem={item => this.renderItem(item)} />
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

  textLabel: {
    marginLeft: 17,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  criticalInfo: {
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    marginTop: 20,
    marginLeft: 10,
    height: 200,
    width: 360,
    borderRadius: 10,
    paddingLeft: 14,
    paddingTop: 6,
  },

  patientId: {
    textDecorationLine: 'underline',
    color: '#414142',
    fontWeight: 'bold',
    fontSize: 15,
  },

  patientName: {
    marginTop: 5,
    color: '#414142',
    fontWeight: 'bold',
    fontSize: 17,
  },

  textStyle: {
    marginTop: 5,
    color: '#414142',
    fontSize: 15,
    fontWeight: 'bold',
  },

  criticalTextLabel: {
    marginTop: 12,
    color: 'red',
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
    marginTop: 20,
  }
});