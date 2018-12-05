import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class SplashScreen extends Component {  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.getStartedText}>
              Splash Screen.
            </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
      },
  });