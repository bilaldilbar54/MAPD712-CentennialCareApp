import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

export default function CriticalPatient() {
  return (
    <ImageBackground source={require('../assets/background_image.png')} style={styles.container}>
      <Text style={styles.heading}>CRITICAL PATIENTS:</Text>
      <Text style={styles.textLabel}>FOLLOWING PATIENTS NEEDS ATTENTION:</Text>
      <ScrollView>
        <View style={styles.criticalInfo}>
          <Text style={styles.patientId}>PATIENT - 101009</Text>
          <Text style={styles.patientName}>RICHARD BENSAN</Text>
          <Text style={styles.criticalTextLabel}>CRITICAL POINTS: </Text>
          <Text style={styles.textStyle}>BLOOD PRESSURE:
            <Text style={{ color: 'red' }}> HIGH</Text>
          </Text>
          <Text style={styles.textStyle}>SUGAR LEVEL:
            <Text style={{ color: 'red' }}> HIGHER THAN NORMAL</Text>
          </Text>
          <Text style={styles.textStyle}>POSITION:
            <Text style={{ fontWeight: '900' }}> ROOM# C410</Text>
          </Text>
        </View>
        <View style={styles.criticalInfo}>
          <Text style={styles.patientId}>PATIENT - 100205</Text>
          <Text style={styles.patientName}>ALEX LEO</Text>
          <Text style={styles.criticalTextLabel}>CRITICAL POINTS: </Text>
          <Text style={styles.textStyle}>HEARTBEAT RATE:
            <Text style={{ color: 'red' }}> LOW</Text>
          </Text>
          <Text style={styles.textStyle}>RESPIRATORY RATE:
            <Text style={{ color: 'red' }}> LOW</Text>
          </Text>
          <Text style={styles.textStyle}>POSITION:
            <Text style={{ fontWeight: '900' }}> INTENSIVE CARE UNIT (ICU)</Text>
          </Text>
        </View>
        <View style={styles.criticalInfo}>
          <Text style={styles.patientId}>PATIENT - 101050</Text>
          <Text style={styles.patientName}>OLIVER GRACE</Text>
          <Text style={styles.criticalTextLabel}>CRITICAL POINTS: </Text>
          <Text style={styles.textStyle}>BLOOD PRESSURE:
            <Text style={{ color: 'red' }}> HIGH</Text>
          </Text>
          <Text style={styles.textStyle}>HEARTBEAT RATE:
            <Text style={{ color: 'red' }}> HIGH</Text>
          </Text>
          <Text style={styles.textStyle}>POSITION:
            <Text style={{ fontWeight: '900' }}> SURGERY WARD - S12</Text>
          </Text>
        </View>
        <View style={styles.criticalInfo}>
          <Text style={styles.patientId}>PATIENT - 101089</Text>
          <Text style={styles.patientName}>LILLY GEORGE</Text>
          <Text style={styles.criticalTextLabel}>CRITICAL POINTS: </Text>
          <Text style={styles.textStyle}>BLOOD OXYGEN LEVEL:
            <Text style={{ color: 'red' }}> LOW</Text>
          </Text>
          <Text style={styles.textStyle}>HEARTBEAT:
            <Text style={{ color: 'red' }}> HIGH</Text>
          </Text>
          <Text style={styles.textStyle}>POSITION:
            <Text style={{ fontWeight: '900' }}> -</Text>
          </Text>
        </View>
        <View style={styles.footer}></View>
      </ScrollView>
    </ImageBackground>
  );
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
    marginTop: 35,
    marginBottom: 5,
  },

  criticalInfo: {
    borderWidth: 0.9,
    backgroundColor: '#D4DF38',
    height: 170,
    width: 360,
    borderRadius: 10,
    paddingLeft: 5,
    paddingTop: 15,
    justifyContent: 'center',
    alignSelf: 'center'
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
    marginTop: 110,
  }
});