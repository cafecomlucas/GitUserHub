import React, {Component} from 'react';
import {Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Form, Input, SubmitButton} from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleInputChange = newUser => {
    this.setState({newUser});
    // console.tron.log(newUser);
  };

  handleSubmit = async () => {
    const {users: oldUsers, newUser} = this.state;

    const {data} = await api.get(`/users/${newUser}`);

    const user = {
      name: data.name,
      login: data.login,
      bio: data.bio,
      avatar: data.avatar_url,
    };

    const users = [user, ...oldUsers];
    console.tron.log(users);

    this.setState({
      users,
      newUser: '',
    });
    Keyboard.dismiss();
  };

  render() {
    const {newUser} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autocorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            onChangeText={this.handleInputChange}
            value={newUser}
            returnKeyType="send"
            onSubmitEditing={this.handleSubmit}
          />
          <SubmitButton onPress={this.handleSubmit}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
