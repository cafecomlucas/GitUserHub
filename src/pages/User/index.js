import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  StarsTitle,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading,
} from './styles';

export default class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    loading: false,
  };

  async componentDidMount() {
    const {loading} = this.state;
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    if (loading) return;

    this.setState({loading: true});
    const {data} = await api.get(`/users/${user.login}/starred`);
    this.setState({stars: data, loading: false});
  }

  render() {
    const {navigation} = this.props;
    const user = navigation.getParam('user');
    const {stars, loading} = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}}></Avatar>
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading && (
          <Loading>
            <ActivityIndicator size={30} color="#777" />
          </Loading>
        )}
        {!!stars.length && <StarsTitle>Stars</StarsTitle>}
        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({item}) => (
            <Starred>
              <OwnerAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}
