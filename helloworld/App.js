import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

		<View style={styles.inside}>
			<Text>Hello Universe!</Text>
		</View>
		
		<View style={styles.inside2}>
			<Text>How you doin?!</Text>
		</View>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
	
  container: {
	  
    flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	//alignSelf: 'stretch',
    backgroundColor: '#fffddd',
    alignItems: 'flex-end',
  },
	
  inside: {
	
	flex: 2,
	alignSelf: 'stretch',
	backgroundColor: '#dddfff',
	alignItems: 'center',
	justifyContent: 'center',
  },
	
  inside2: {
	  
	flex: 3,
	alignSelf: 'stretch',
	backgroundColor: '#dddaaa',
	alignItems: 'center',
	justifyContent: 'center',
  },
});
