import React from 'react';
import {WebView} from 'react-native-webview';
import {Dimensions} from 'react-native';
import PropTypes from 'prop-types';

export default function Star({navigation}) {
  return (
    <WebView
      source={{uri: navigation.getParam('html_url')}}
      style={{flex: 1}}
    />
  );
}

Star.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Star.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('name'),
  headerTitleStyle: {
    width: Dimensions.get('window').width * 0.7,
    textAlign: 'center',
  },
});
