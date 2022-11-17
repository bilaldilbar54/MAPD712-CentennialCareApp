import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FindPatient from './screens/FindPatientScreen';
import MonitorRecords from './screens/MonitorRecordScreen';
import CriticalPatient from './screens/CriticalPatientsScreen';
import AddPatientTest from './screens/AddTest';
import AddPatients from './screens/AddPatients';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} 
            options={{title: '', headerStyle: {backgroundColor: '#FCFFD3'}}}/>
          <Stack.Screen name="Home" component={HomeScreen}
            options={{title: 'CENTENNIAL-CARE HOME', headerStyle: {backgroundColor: '#D4DF38'}, headerTintColor: '#414142', headerLeft: null, gestureEnabled: false}}/>
          <Stack.Screen name="FindPatient" component={FindPatient}
            options={{title: '', headerStyle: {backgroundColor: '#D4DF38'}, headerBackTitle: 'Home', headerBackTitleStyle: {color: '#414142'}, headerTintColor: '#414142'}}/>
          <Stack.Screen name="MonitorRecord" component={MonitorRecords}
            options={{title: '', headerStyle: {backgroundColor: '#D4DF38'}, headerBackTitle: 'Home', headerBackTitleStyle: {color: '#414142'}, headerTintColor: '#414142'}}/>
          <Stack.Screen name="CriticalPatient" component={CriticalPatient}
            options={{title: '', headerStyle: {backgroundColor: '#D4DF38'}, headerBackTitle: 'Home', headerBackTitleStyle: {color: '#414142'}, headerTintColor: '#414142'}}/>
          <Stack.Screen name="AddTest" component={AddPatientTest}
            options={{title: '', headerStyle: {backgroundColor: '#D4DF38'}, headerBackTitle: '', headerBackTitleStyle: {color: '#414142'}, headerTintColor: '#414142'}}/>
          <Stack.Screen name="AddPatients" component={AddPatients}
            options={{title: '', headerStyle: {backgroundColor: '#D4DF38'}, headerBackTitle: 'Home', headerBackTitleStyle: {color: '#414142'}, headerTintColor: '#414142'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFD3',
  },

  heading: {
    marginTop: 20,
    fontSize: 18,
    alignSelf: 'center',
    color: '#414142',
  },

  image: {
    marginTop: 80,
    fontSize: 18,
    alignSelf: 'center',
    color: '#414142',
  },


  heading1: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 28,
    color: '#414142',
  },


  heading3: {
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#414142',
  },

  input2: {
    borderWidth: 0.9,
    width: 327,
    height: 56,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 100,
    backgroundColor: '#ECEDF0',
    color: '#414142',
    paddingLeft: 15,
    padding: 5,
  },

  inputStyle: {
    marginTop: 80,
    flexDirection: 'column',
    padding: 16,
    flex: 0.5,
    justifyContent: 'space-evenly',
  },

  buttonStyle: {
    backgroundColor: '#D4DF38',
    borderWidth: 0.9,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    width: 327,
    height: 56,
    borderColor: '#D4DF38',
  },
});