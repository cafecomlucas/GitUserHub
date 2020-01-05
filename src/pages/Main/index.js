import React, {Component} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({users: JSON.parse(users)});
    }
  }

  componentDidUpdate(_, prevState) {
    const {users} = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

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

  handleNavigate = user => {
    const {navigation} = this.props;
    navigation.navigate('User', {user});
  };

  render() {
    const {newUser, users, loading} = this.state;

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
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
