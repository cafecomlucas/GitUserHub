import React from 'react';
import {WebView} from 'react-native-webview';
import {Dimensions} from 'react-native';

export default function Star({navigation}) {
  return (
    <WebView
      source={{uri: navigation.getParam('html_url')}}
      style={{flex: 1}}
    />
  );
}

Star.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('name'),
  headerTitleStyle: {
    width: Dimensions.get('window').width * 0.7,
    textAlign: 'center',
  },
});
