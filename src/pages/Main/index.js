import React, {Component} from 'react';
import {Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Form, Input, SubmitButton} from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleInputChange = newUser => {
    this.setState({newUser});
    console.tron.log(newUser);
  };

  handleSubmit = () => {
    const {users: oldUsers, newUser} = this.state;

    const users = [newUser, ...oldUsers];

    this.setState({
      users,
      newUser: '',
    });
    console.tron.log(users);
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
