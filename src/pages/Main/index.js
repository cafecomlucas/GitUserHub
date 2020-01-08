import React, {Component} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

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
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = {
    title: 'Usuários',
  };

  state = {
    newUser: '',
    users: [],
    loading: false,
    error: false,
    errorTimeout: null,
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
    const {users: oldUsers, newUser, loading, errorTimeout} = this.state;

    console.tron.log(oldUsers);

    if (loading) return;

    try {
      if (newUser === '') {
        throw 'Campo de usuário vazio';
      }
      if (
        oldUsers.find(
          user => user.login.toLowerCase() === newUser.toLowerCase()
        )
      ) {
        throw 'Usuário já existente';
        return;
      }

      this.setState({loading: true});

      const {data} = await api.get(`/users/${newUser}`);

      const user = {
        name: data.name,
        login: data.login,
        bio: data.bio,
        avatar: data.avatar_url,
      };

      const users = [user, ...oldUsers];

      Keyboard.dismiss();

      this.setState({
        users,
        newUser: '',
      });
    } catch (err) {
      console.tron.warn(err);
      this.setState({error: true});
      clearTimeout(errorTimeout);
      this.setState({
        errorTimeout: setTimeout(
          () =>
            this.setState({
              error: false,
            }),
          2000
        ),
      });
    } finally {
      this.setState({loading: false});
    }
  };

  handleNavigate = user => {
    const {navigation} = this.props;
    navigation.navigate('User', {user});
  };

  render() {
    const {newUser, users, loading, error} = this.state;

    return (
      <Container>
        <Form>
          <Input
            error={error}
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
