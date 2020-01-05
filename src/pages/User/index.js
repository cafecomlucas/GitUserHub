import React, {Component} from 'react';
import {View} from 'react-native';
import api from '../../services/api';

import {Container, Header, Avatar, Name, Bio} from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  async componentDidMount() {
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    const stars = await api.get(`/users/${user.login}/starred`);
  }

  render() {
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}}></Avatar>
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
      </Container>
    );
  }
}
