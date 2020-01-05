import React, {Component} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Form, Input, SubmitButton} from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  handleInputChange = newUser => {
    this.setState({newUser});
    // console.tron.log(newUser);
  };

  handleSubmit = async () => {
    const {users: oldUsers, newUser, loading} = this.state;

    if (loading) return;

    this.setState({loading: true});

    const {data} = await api.get(`/users/${newUser}`);

    const user = {
      name: data.name,
      login: data.login,
      bio: data.bio,
      avatar: data.avatar_url,
    };

    const users = [user, ...oldUsers];
    console.tron.log(users);

    Keyboard.dismiss();

    this.setState({
      users,
      newUser: '',
      loading: false,
    });
  };

  render() {
    const {newUser, loading} = this.state;

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
            editable={!loading}
            loading={loading}
          />
          <SubmitButton loading={loading} onPress={this.handleSubmit}>
            {loading ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <Icon name="add" size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
