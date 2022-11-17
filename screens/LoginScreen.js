import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginClicked = this.loginClicked.bind(this);
  
    this.state = {
      userName: '',
      userPass: '',
    }
  }

  loginClicked ()
    {
      if (this.state.userName == "David.mason" && this.state.userPass == "Mason1144")
      {
         this.props.navigation.navigate('Home');
      }
      else if (this.state.userName != "David" || this.state.userPass != "Mason1144")
      {
          Alert.alert("Please Enter Correct Username & Password To Login")
      }
    }
  
  render(){
    
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require('../assets/Doc.png')} />
        </View>
        <Text style={styles.heading}> Welcome to</Text>
        <Text style={styles.heading1}>CENTENNIAL CARE</Text>
        <View style={styles.inputStyle}>
          <Text style={styles.heading3}> Login Below </Text>
          <TextInput
            style={styles.input2}
            placeholder='Username'
            value={this.state.userName}
            onChangeText={(text) => this.setState({ userName: text })}>
          </TextInput>
          <TextInput
            style={styles.input2}
            placeholder='Password'
            value={this.state.userPass}
            onChangeText={(text) => this.setState({ userPass: text })}
            secureTextEntry>
          </TextInput>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.loginClicked()}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
    marginTop: 20,
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
    paddingLeft: 30,
  },

  inputStyle: {
    marginTop: 30,
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
