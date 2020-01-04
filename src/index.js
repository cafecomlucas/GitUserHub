import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import reactotronConfig from './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7e7e7',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
  },
});

const App = () => {
  console.tron.warn('iniciou!');
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
    </View>
  );
};

export default App;
