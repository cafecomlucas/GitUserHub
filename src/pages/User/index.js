import React from 'react';
import {View} from 'react-native';

// import { Container } from './styles';

export default function User(props) {
  console.tron.log(props.navigation.getParam('user'));
  return <View />;
}
