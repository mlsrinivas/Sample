import React from 'react';
import { Text,View, TouchableOpacity, TextInput } from 'react-native';
import {TextInputLayout} from 'rn-textinputlayout';
import PasswordInputText from 'react-native-hide-show-password-input';



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

    render(){
        return(
            <View>
                {/* <TouchableOpacity onPress = { () => this.props.navigation.navigate('Dashboard')}>
                    <Text style = {{marginTop:'30%'}}> Sample data Login.js </Text>
                </TouchableOpacity> */}

                    {/* <View >
							<TextInputLayout
								focusColor={'#B9B6B5'}
				 			>
						<TextInput autoCapitalize = 'none'
							autoCorrect={false}
							placeholder="Username or Email"
							// onChangeText={(username) => this.setState({ username })}
						/></TextInputLayout>
						
						<PasswordInputText autoCapitalize = 'none'
							autoCorrect={false}
							tintColor = '#B9B6B5'
							// secureTextEntry={this.state.hide}
							// onChangeText={(password) => this.setState({ password })}
						/>
					</View> */}
                <TextInputLayout >
                    <TextInput
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                </TextInputLayout>
            </View>
        )
    }
}