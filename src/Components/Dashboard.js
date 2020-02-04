import React from 'react'
import { Text, TouchableOpacity, View} from 'react-native'

export default class Dashboard extends React.Component{

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (<View style={{ justifyContent: "center", marginLeft: 80,
                                alignItems: "center", flex: 1
		                }}> 
				<Text style={{ fontWeight: 'bold', fontSize: 18 }}> Dashboard </Text>
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
                <TouchableOpacity onPress = { () => this.props.navigation.navigate('Login')}>
                    <Text> Sample data Dashboard.js </Text>
                </TouchableOpacity>
            </View>
        )
    }
}