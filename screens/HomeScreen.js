import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ToastAndroid, Platform, AlertIOS } from 'react-native';

export default function Home({navigation}){
function relaxedEmoji(){
  var msg = "All is well"
  if (Platform.OS === 'android')
  {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  }
  else
  {
    Alert.alert(msg)
  }
}

function stressedEmoji(){
  var msg = "All will be well"
  if (Platform.OS === 'android')
  {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  }
  else
  {
    Alert.alert(msg);
  }
}

function sickEmoji(){
  var msg = "We Hope you Have A Good Day"
  if (Platform.OS === 'android')
  {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  }
  else
  {
    Alert.alert(msg);
  }
}
  return (
    <ImageBackground source={require('../assets/background_image.png')} style={styles.container2}>
      <View style={styles.container1}>
        <View style={styles.image}>
          <Image source={require('../assets/avatar.png')} />
          <View>
            <Text style={styles.text1}>Good Morning! </Text>
            <Text style={styles.text2}>Dr. David Mason </Text>
          </View>
        </View>
        <View style={styles.image2}>
          <ImageBackground source={require('../assets/gradient_back.png')} style={styles.image2}>
          <Text style={styles.feelingStyle}>How are you feeling</Text>
          <Text style={styles.feelingStyle}>today?</Text>
          <View style={styles.iconStyle}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => relaxedEmoji()}>
                <Feather name="smile" size={40} color="#fff"/>
              </TouchableOpacity>
              <Text style={{color: '#fff'}}>Relaxed</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => stressedEmoji()}>
                <Feather name="meh" size={40} color="#fff"/>
              </TouchableOpacity>
              <Text style={{color: '#fff'}}>Stressed</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => sickEmoji()}>
                <Feather name="frown" size={40} color="#fff"/>
              </TouchableOpacity>
              <Text style={{color: '#fff'}}>Sick</Text>
            </View>
          </View>
        </ImageBackground>
        </View>
      </View>
      <View style={styles.buttonGroup1}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('AddPatients')}>
          <Text style={styles.buttonText}>ADD PATIENTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('FindPatient')}>
          <Text style={styles.buttonText}>VIEW PATIENTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('MonitorRecords')}>
          <Text style={styles.buttonText}>MONITOR RECORDS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonGroup2}>
        <TouchableOpacity
          style={styles.buttonStyle2}
          onPress={() => navigation.navigate('CriticalPatient')}>
          <Text style={styles.buttonText}>CRITICAL PATIENTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container1: {
    marginTop: 10,
    marginBottom: 20,
    flex: 0.5,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: "#414142",
  },

  container2: {
    flex: 1,
    backgroundColor: '#FCFFD3',
  },

  heading: {
    marginTop: 50,
    marginLeft: 10,
    fontSize: 31,
    color: '#414142',
  },

  text1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 24,
    color: '#BBC71C',
  },

  text2: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 32,
    color: '#BBC71C',
  },

  image: {
    marginTop: 25,
    marginLeft: 20,
    flexDirection: 'row',
  },

  image2: {
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#414142',
    width: 370,
    height: 220,
    overflow: 'hidden',
  },

  feelingStyle:{
    alignSelf: 'center',
    color: '#414142',
    fontSize: 23,
    paddingTop: 15,
    color: '#414142',
    },

  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 10,
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


  buttonGroup1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 200,
  },

  buttonGroup2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },

  buttonStyle: {
    backgroundColor: '#D4DF38',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    borderColor: '#D4DF38',
  },

  buttonText: {
    color: '#414142',
    textAlign: 'center',
  },

  buttonStyle2: {
    backgroundColor: '#D4DF38',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 100,
    borderColor: '#D4DF38',
  },

});

