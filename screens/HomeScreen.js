import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  

export default class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
          <Text>Home Screen</Text>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
}); 