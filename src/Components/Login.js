import React from 'react';
import { Text,View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class Login extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<View style={{ justifyContent: "center", marginLeft: 80,
                                alignItems: "center", flex: 1
		                }}> 
				<Text style={{ fontWeight: 'bold', fontSize: 18 }}> Login </Text>
		</View>),
		headerStyle: {
				shadowColor: 'transparent',
				elevation: 0,
		},
		headerBackTitle: '',
		headerTintColor: '#000',
	})

	constructor(){
		super();
	this.state = {
		email: '',
		password: ''
	 }
	}

	 handleEmail = (text) => {
		this.setState({ email: text })
	 }
	 handlePassword = (text) => {
		this.setState({ password: text })
	 }
	 login = (email, pass) => {
		alert('email: ' + email + ' password: ' + pass)
	 }
	 render() {
		return (
		   <View style = {styles.container}>
			  <TextInput style = {styles.input}
				 underlineColorAndroid = "transparent"
				 placeholder = "Email"
				 placeholderTextColor = "#9a73ef"
				 autoCapitalize = "none"
				 onChangeText = {this.handleEmail}/>
			  
			  <TextInput style = {styles.input}
				 underlineColorAndroid = "transparent"
				 placeholder = "Password"
				 placeholderTextColor = "#9a73ef"
				 autoCapitalize = "none"
				 onChangeText = {this.handlePassword}/>
			  
			  <TouchableOpacity
				 style = {styles.submitButton}
				 onPress = {
					() => this.login(this.state.email, this.state.password)
				 }>
				 <Text style = {styles.submitButtonText}> Submit </Text>
			  </TouchableOpacity>
		   </View>
		)
	 }
  }

  const styles = StyleSheet.create({
	container: {
	   paddingTop: 23
	},
	input: {
	   margin: 15,
	   height: 40,
	   borderColor: '#7a42f4',
	   borderWidth: 1
	},
	submitButton: {
	   backgroundColor: '#7a42f4',
	   padding: 10,
	   margin: 15,
	   height: 40,
	},
	submitButtonText:{
	   color: 'white'
	}
 })
    