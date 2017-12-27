import React from 'react';
import {StyleSheet, Text, View, TextInput, AppRegistry, Alert, Button} from 'react-native';

export default class App extends React.Component {
	constructor(props){
		
		super(props);
		this.state = {text: ''};
	}
	
	_changeButton(){
		
		Alert.alert('Heyy');
		
		//this.state.text.split(' ').map((word) => word && '👽').join(' ');
	}
	
	render() {
		return (
      	<View style={styles.container}>
			<View style={styles.topbar}>
				<Text style={styles.topbartext}>Handling Inputs and Touches - Example</Text>
      		</View>
			<View style={styles.inputView}>
				<TextInput style={styles.input}
				placeholder = "Typing goes here."
				onChangeText = {(text) => this.setState({text})}
				/>

				<Button style={styles.button}
					title = "Change the words, change the world!"
					onPress = {this._changeButton}
				/>
				
				<Text style={styles.fintext}>
					{this.state.text.split(' ').map((word) => word && '👽').join(' ')}
				</Text>
			</View>
      	</View>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 10,
	},
	
	topbar: {
		
		height: 50,
		backgroundColor: 'skyblue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	topbartext: {
		
		fontWeight: 'bold',
		color: 'darkred',
	},
	
	inputView: {
		
		flex: 1,
	},
	
	input: {
	
		height: 40,
	},
								 
	fintext: {
		
		padding: 10, 
		fontSize: 42,
	},
	
	button:{
		
		padding: 5,
		backgroundColor: 'red',
	},
});





